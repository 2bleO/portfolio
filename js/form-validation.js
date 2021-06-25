const validationProp = {
  form: document.getElementById('contactForm'),
  email: document.getElementById('email'),
  errorMesage: null,
};

const validationMet = {
  start() {
    validationProp.form.addEventListener('submit', (e) => {
      if (validationProp.email.value.toLowerCase() !== validationProp.email.value) {
        e.preventDefault();
        validationMet.error();
      }
    });
  },

  error() {
    validationProp.form.appendChild(document.createElement('P')).setAttribute('id', 'error');
    validationProp.errorMessage = document.getElementById('error');
    validationProp.errorMessage.innerText = 'Please, use only lowercase letters for your e-mail!';
  },
};
validationMet.start();
