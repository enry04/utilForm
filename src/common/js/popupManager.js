class PopupManager{

    constructor(overlayElement){
        this.overlayElement = overlayElement;
        this.popupElement = this.overlayElement.querySelector(".popup-container");
        this.popupContent = this.overlayElement.querySelector(".popup-content");
    }
    showPopup(content, color){
        this.overlayElement.style.visibility = 'visible';
        this.overlayElement.style.opacity = '1';
        this.popupElement.style.border = 'solid ' + color;
        this.popupContent.style.color = color;
        this.popupContent.innerHTML = content;
    }
}

export default PopupManager;