class PopupManager{

    constructor(overlayElement){
        this.overlayElement = overlayElement;
        this.popupContent = this.overlayElement.querySelector(".popup-content");
    }

    showPopup(content){
        console.log(this.overlayElement);
        this.overlayElement.style.visibility = 'visible';
        this.overlayElement.style.opacity = '1';
        this.popupContent.innerHTML = "kdsfkdfndknfd";
    }

}

export default PopupManager;