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
        menu.style.display = `block`;
        menuShowing = true;
    }
    else{
        menu.style.display = `none`;
        menuShowing = false;
    }
}

let exitModal =(event)=> {
    modal.style.display = `none`;
    modalShowing = false;
}
