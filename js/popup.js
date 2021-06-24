const propPopup = {
    bodyDOM: document.getElementsByTagName('body')[0],
    pressBtn: document.getElementsByClassName('projectBtn'),
    projTitle: 'Multi Post Stories',
    projDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    modalDescription: null,
    imageSrc: 'img/Snapshoot_Portfolio.png',
    modalImage: null,
    projTech: null,
    popup_container: null,
    parent: null,
    modal_container: null,
    clonedTech: null,
    modalHeader: null,
    modalTitle: null,
    modalCloseBtn: null,
    modalButtons: null,
    modalBtnLive: null,
    modalBtnSource: null,
    img_desc: null,
    desc_butt: null,
  };

  const metPopup = {

    start: function () {
      for (let i = 0; i < propPopup.pressBtn.length; i += 1) {
        propPopup.pressBtn[i].addEventListener('click', metPopup.getParent);
      }
    },

    getParent: function () {
      propPopup.parent = this.parentElement;
      metPopup.popup(propPopup.parent);
    },

    popup: function (parent) {
      propPopup.bodyDOM.appendChild(document.createElement('DIV')).setAttribute('id', 'modal_container');
      propPopup.modal_container = document.getElementById('modal_container');
      propPopup.modal_container.appendChild(document.createElement('DIV')).setAttribute('id', 'popup_container');
      propPopup.popup_container = document.getElementById('popup_container');

      propPopup.popup_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modalHeader');
      propPopup.modalHeader = document.getElementById('modalHeader');
      // Header //
      propPopup.modalHeader.appendChild(document.createElement('H3')).setAttribute('id', 'modalTitle');
      propPopup.modalTitle = document.getElementById('modalTitle');
      propPopup.modalTitle.innerText = propPopup.projTitle;

      propPopup.modalHeader.appendChild(document.createElement('SPAN')).setAttribute('id', 'modalClose');
      propPopup.modalCloseBtn = document.getElementById('modalClose');
      propPopup.modalCloseBtn.innerHTML = '<i class="fas fa-times"></i>';
      propPopup.modalCloseBtn.addEventListener('click', metPopup.close);
      // Technologies //
      propPopup.projTech = parent.getElementsByTagName('UL')[0];
      propPopup.clonedTech = propPopup.projTech.cloneNode(true);
      propPopup.popup_container.appendChild(propPopup.clonedTech).setAttribute('id', 'modalTech');
      propPopup.clonedTech.className = '';
      // Image and Description Ccontainer //
      propPopup.popup_container.appendChild(document.createElement('DIV')).setAttribute('id', 'img_desc');
      propPopup.img_desc = document.getElementById('img_desc');

      propPopup.img_desc.appendChild(document.createElement('img')).setAttribute('id', 'modalImage');
      propPopup.modalImage = document.getElementById('modalImage');
      propPopup.modalImage.setAttribute('src', propPopup.imageSrc);

      propPopup.img_desc.appendChild(document.createElement('DIV')).setAttribute('id', 'desc_butt');
      propPopup.desc_butt = document.getElementById('desc_butt');

      propPopup.desc_butt.appendChild(document.createElement('P')).setAttribute('id', 'modalDesc');
      propPopup.modalDescription = document.getElementById('modalDesc');
      propPopup.modalDescription.innerText = propPopup.projDescription;
      // Buttons //
      propPopup.desc_butt.appendChild(document.createElement('DIV')).setAttribute('id', 'modalButtons');
      propPopup.modalButtons = document.getElementById('modalButtons');

      propPopup.modalButtons.appendChild(document.createElement('BUTTON')).setAttribute('id', 'modalButtonLive');
      propPopup.modalBtnLive = document.getElementById('modalButtonLive');
      propPopup.modalButtons.appendChild(document.createElement('BUTTON')).setAttribute('id', 'modalButtonSource');
      propPopup.modalBtnSource = document.getElementById('modalButtonSource');
      propPopup.modalBtnLive.innerHTML = '   <a href="#">See Live    <i class="fas fa-power-off"></i></a>';
      propPopup.modalBtnSource.innerHTML = '   <a href="#">See Source    <i class="fab fa-github"></i></a>';
      // stop scroll //
      if (propPopup.bodyDOM.className === 'scroll') {
        propPopup.bodyDOM.className = 'noscroll';
      } else {
        propPopup.bodyDOM.className = 'noscroll';
      }
    },

    close: function () {
      propPopup.bodyDOM.removeChild(propPopup.modal_container);
      if (propPopup.bodyDOM.className === 'noscroll') {
        propPopup.bodyDOM.className = 'scroll';
      } else {
        propPopup.bodyDOM.className = 'scroll';
      }
    },
  };
  metPopup.start ();
