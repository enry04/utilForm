class PopupManager {
  constructor(overlayElement) {
    this.overlayElement = overlayElement;
    this.popupElement = this.overlayElement.querySelector(".popup-container");
    this.popupContent = this.overlayElement.querySelector(".popup-content");
    this.closeBtn = this.overlayElement.querySelector(".close-popup");
  }
  showPopup(content, color) {
    this.overlayElement.style.visibility = "visible";
    this.overlayElement.style.opacity = "1";
    this.popupElement.style.border = "solid " + color;
    this.popupContent.style.color = color;
    this.popupContent.innerHTML = content;
    this.closeBtn.addEventListener("click", (event) => {
      this.closePopup();
    });
    if (this.overlayElement.style.opacity == "1") {
      window.addEventListener("click", (event) => {
        if (event.target == this.overlayElement) {
            this.closePopup();
        }
      });
    }
  }

  closePopup() {
    this.overlayElement.style.visibility = "hidden";
    this.overlayElement.style.opacity = "0";
    this.popupElement.style.border = "none";
    this.popupContent.style.color = "none";
    this.popupContent.innerHTML = "";
  }
}

export default PopupManager;
