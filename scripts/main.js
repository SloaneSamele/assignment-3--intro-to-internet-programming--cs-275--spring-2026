let showMenuButton = document.getElementById(`show-menu`);
let showModalButton = document.getElementById(`show-modal`);
let modal = document.querySelector(`.modal-panel`);
let modalPane = document.querySelector(`.modal-content-pane`);
let menu = document.querySelector(`nav`);
let menuShowing = false;
let modalShowing = false;

let showModal =(event)=> {
    event.preventDefault();

    if(!modalShowing){
        modal.style.display = `flex`;
        modalShowing = true;
    }
    else{
        modal.style.display = `none`;
        menuShowing = false;
    }
}

let showMenu =(event)=>{
    event.preventDefault();
    if(!menuShowing){
        if(window.innerWidth <= 736){
            menu.classList.remove('side-tray-slide-close');
            menu.classList.add('side-tray-slide-open');
        }
        else{
            menu.classList.remove('drop-down-slide-close');
            menu.classList.add('drop-down-slide-open');
        }
        menuShowing = true;
    }
    else{
        if (window.innerWidth <= 736) {
            menu.classList.remove('side-tray-slide-open');
            menu.classList.add('side-tray-slide-close');
        } else {
            menu.classList.remove('drop-down-slide-open');
            menu.classList.add('drop-down-slide-close');
        }
        menuShowing = false;
    }
}

let exitModal =(event)=> {
    modal.style.display = `none`;
    modalShowing = false;
}
showMenuButton.addEventListener(`click`, showMenu);
showModalButton.addEventListener(`click`, showModal);
modalPane.addEventListener(`click`, exitModal);
