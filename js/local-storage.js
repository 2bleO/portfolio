const formData = {
  available: null,
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  message: document.getElementById('message'),
  toStore: null,
  storedJson: null,
  storedObj: null,
  userData: {
    name: null,
    email: null,
    message: null,
  },
};

if (window.localStorage) {
  formData.available = true;
}

const storageMet = {
  retrieve() {
    formData.storedJson = localStorage.getItem('jsonObj');
    formData.storedObj = JSON.parse(formData.storedJson);
  },

  prePop() {
    formData.name.setAttribute('value', formData.storedObj.name);
    formData.email.setAttribute('value', formData.storedObj.email);
    formData.message.setAttribute('placeholder', formData.storedObj.message);
  },

  listen() {
    if (formData.available === true) {
      formData.name.addEventListener('change', storageMet.store);
      formData.email.addEventListener('change', storageMet.store);
      formData.message.addEventListener('change', storageMet.store);
    }
  },

  store() {
    formData.userData.name = formData.name.value;
    formData.userData.email = formData.email.value;
    formData.userData.message = formData.message.value;

    formData.toStore = JSON.stringify(formData.userData);
    if (formData.storedJson !== formData.toStore) {
      window.localStorage.setItem('jsonObj', formData.toStore);
    }
  },
};

storageMet.retrieve();
storageMet.prePop();
storageMet.listen();