const form = document.querySelector("#form");
const inputs = document.querySelectorAll(".form__input");
const FORM_KEY = 'formDataState';
const formData = {
    name: "",
    tel: "",
};

form.addEventListener('input', onFormInput);
form.addEventListener("submit", onFormSubmit);
(() => {
    inputs.forEach((input) => {
        input.addEventListener("blur", onValidatorInputBlur);
    });
})();

Notiflix.Notify.init({
    position: 'right-top',
    opacity: 0.9,
    distance: '80px',
    fontSize: '18px',
    backOverlay: true,
    plainText: false,
});

afterPageReload();

function onFormInput(event) {
    const { user_name, user_tel } = event.currentTarget.elements;
    formData.name = user_name.value;
    formData.tel = user_tel.value;
    localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    const formValue = event.currentTarget;
    const hasInvalidInput = Array.from(inputs).some(input => input.classList.contains('form__input-invalid'));
    const hasValidInput = Array.from(inputs).every(input => input.classList.contains('form__input-valid'));

    if (!hasInvalidInput && hasValidInput) {
        // const formDataMessage = `<b>Нова заявка</b>
        // <b>Ім’я: ${formData.name}</b>;
        // <b>Номер: ${formData.tel}</b>;`

        Notiflix.Notify.success(`Заявку надіслано! <br> Ім’я: ${formData.name} <br> Номер: ${formData.tel}`);

        inputs.forEach(input => {
            input.classList.remove('form__input-valid', 'form__input-invalid');
        });
        formValue.reset();
        localStorage.removeItem(FORM_KEY);
        // axios.post(URL_API, {
        //     chat_id: CHAT_ID,
        //     text: formDataMessage,
        //     parse_mode: `html`,
        // })
        //     .then(() => {
        //         inputs.forEach(input => {
        //             input.classList.remove('form__input-valid', 'form__input-invalid');
        //         });
        //         formValue.reset();
        //         localStorage.removeItem(FORM_KEY);
        //     })
        //     .catch((err) => {
        //         console.warn(err);
        //         Notify.failure('Непередбачувана помилка спробуйте, буть-ласка ще раз.');
        //     })
        //     .finally(() => {
        //         Notify.success('Заявку надіслано.');
        //     })
    } else {
        Notiflix.Notify.failure('Заявку не надіслано. Перевірте правильність заповнення.');
    }
}

function afterPageReload() {
    const storedData = JSON.parse(localStorage.getItem(FORM_KEY));
    if (storedData === null) {
        return;
    }
    const { user_name, user_tel } = form.elements;
    user_name.value = storedData.name || '';
    user_tel.value = storedData.tel || '';

    formData.name = storedData.name || '';
    formData.tel = storedData.tel || '';

    validatorInputAfterPageReload()
}

function onValidatorInputBlur(event) {
    const input = event.currentTarget;
    const inputContentLength = event.currentTarget.value.split("").length;
    inputClassMaker(input, inputContentLength);
}

function validatorInputAfterPageReload() {
    inputs.forEach((input) => {
        let inputContentLength = input.value.split("").length;
        inputClassMaker(input, inputContentLength);
    });
}

function inputClassMaker(input, inputContentLength) {
    if (inputContentLength === 0) {
        input.classList.remove('form__input-valid', 'form__input-invalid');
    } else if (inputContentLength >= Number(input.dataset.length)) {
        input.classList.remove('form__input-invalid');
        input.classList.add('form__input-valid');
    } else {
        input.classList.remove('form__input-valid');
        input.classList.add('form__input-invalid');
    };
}