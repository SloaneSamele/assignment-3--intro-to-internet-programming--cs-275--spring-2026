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
        menu.style.opacity = `1`;
        if(window.innerWidth <= 736){
            menu.classList.toggle(`side-tray-slide`);
        }
        else{
            menu.classList.toggle(`drop-down-slide`);
        }
        menuShowing = true;
    }
    else{
        menu.style.opacity = `0`;
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
