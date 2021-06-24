(function(){

  const propPopup = {
    pressBtn: document.getElementsByClassName('projectBtn'),
    parent: null,
    projTitle: null,
    clonedTitle: null,
    projDescription: null,
    clonedDescription: null,
    imageSrc: 'img/Snapshoot_Portfolio.png',
    projTech: null,
    clonedTech: null,
    bodyDOM: document.getElementsByTagName('body')[0],
    popup_container: null,
    modalHeader: null,
    modalCloseBtn: null,
    modalImage: null,
    modalButtons:null,
    modalBtnLive: null,
    modalBtnSource: null

  }

  const metPopup = {
// Listening for button click //
    start: function(){
      for (let i = 0; i < propPopup.pressBtn.length; i++) {
        propPopup.pressBtn[i].addEventListener('click', metPopup.getParent);
      }
    },
// Getting parent of clicked button //
    getParent: function(){
      propPopup.parent = this.parentElement;
      metPopup.popup(propPopup.parent);
    },
// Lauching popup //
    popup: function(parent){    
      propPopup.projTitle = parent.getElementsByTagName('H3')[0];
      propPopup.clonedTitle = propPopup.projTitle.cloneNode(true);
      propPopup.projTech = parent.getElementsByTagName('UL')[0];
      propPopup.clonedTech = propPopup.projTech.cloneNode(true);
      
      propPopup.imageSrc = window.getComputedStyle(parent, null).backgroundImage.slice(5, -2);
      propPopup.projDescription = parent.getElementsByTagName('P')[0];
      propPopup.clonedDescription = propPopup.projDescription.cloneNode(true);
       
      if (propPopup.bodyDOM.className === 'scroll') {
        propPopup.bodyDOM.className = 'noscroll';
      } else {
        propPopup.bodyDOM.className = 'noscroll';
      }

      propPopup.bodyDOM.appendChild(document.createElement('DIV')).setAttribute('id', 'popup_container');
      propPopup.popup_container = document.getElementById('popup_container');

      propPopup.popup_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modalHeader');
      propPopup.modalHeader = document.getElementById('modalHeader');

      propPopup.modalHeader.appendChild(propPopup.clonedTitle).setAttribute('id', 'modalTitle');
      propPopup.modalHeader.appendChild(document.createElement('SPAN')).setAttribute('id', 'modalClose');
      propPopup.modalCloseBtn = document.getElementById('modalClose');
      propPopup.modalCloseBtn.innerHTML = '<i class="fas fa-times"></i>';
      propPopup.modalCloseBtn.addEventListener('click', metPopup.close);

      propPopup.popup_container.appendChild(propPopup.clonedTech).setAttribute('id', 'modalTech');
      propPopup.clonedTech.className = '';

      propPopup.popup_container.appendChild(document.createElement('img')).setAttribute('id', 'modalImage');
      propPopup.modalImage = document.getElementById('modalImage');
      propPopup.modalImage.setAttribute('src', propPopup.imageSrc);

      propPopup.popup_container.appendChild(propPopup.clonedDescription).setAttribute('id', 'modalDesc');

      propPopup.popup_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modalButtons');
      propPopup.modalButtons = document.getElementById('modalButtons');

      propPopup.modalButtons.appendChild(document.createElement('BUTTON')).setAttribute('id', 'modalButtonLive');
      propPopup.modalBtnLive = document.getElementById('modalButtonLive');
      propPopup.modalButtons.appendChild(document.createElement('BUTTON')).setAttribute('id', 'modalButtonSource');
      propPopup.modalBtnSource = document.getElementById('modalButtonSource');
      propPopup.modalBtnLive.innerHTML = '<a href="#">See Live <i class="fas fa-power-off"></i></a>';
      propPopup.modalBtnSource.innerHTML = '<a href="#">See Source <i class="fab fa-github"></i></a>';

    },

    close: function() {
      propPopup.bodyDOM.removeChild(propPopup.popup_container);
      if (propPopup.bodyDOM.className === 'noscroll') {
        propPopup.bodyDOM.className = 'scroll';
      } else {
        propPopup.bodyDOM.className = 'scroll';
      }
    }
  }

metPopup.start();

}())