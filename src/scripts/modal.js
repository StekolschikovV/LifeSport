class Modal{
    constructor(){
        this.listener()
    }
    listener(){
        document.querySelector('.mob-menu').onclick = () => {
            this.toggleModal()
        }
        document.querySelector('.modal-window').onclick = (e) => {
            if(e.toElement.classList.value == 'modal-window show-modal' || e.toElement.classList.value == 'close')
                this.toggleModal()
        }
    }
    toggleModal(){
        var element = document.querySelector(".modal-window");
        element.classList.toggle("show-modal");
    }
}
var modal = new Modal()