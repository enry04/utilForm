import FetchManager from "../../common/js/fetchManager.js";
import PopupManager from "../../common/js/popupManager.js";
class FormPageManager {
  constructor(parentElement) {
    this.rootElement = parentElement;
    this.elements = {};
    this.popupManager = new PopupManager(
      document.querySelector(".popup-overlay")
    );
    const parser = new DOMParser();
    const radioTemplateString =
      '<div class="input-container radio-container"><input type="radio" name="radio" class="input-radio" required="required"><label class="radio-label"></label></div>';
    const templateElement = parser.parseFromString(
      radioTemplateString,
      "text/html"
    );
    this.template = templateElement.documentElement.querySelector("body > div");
  }

  init() {
    this.initElements();
    this.initEventListeners();
  }

  initElements() {
    this.elements = {
      text: this.rootElement.querySelector(".input-text"),
      date: this.rootElement.querySelector(".input-date"),
      checkBox: this.rootElement.querySelector(".input-checkBox"),
      number: this.rootElement.querySelector(".input-number"),
      file: this.rootElement.querySelector(".input-file"),
      radios: this.rootElement.querySelectorAll(".input-radio"),
      select: this.rootElement.querySelector(".input-select"),
      form: this.rootElement.querySelector("form"),
    };
  }

  initEventListeners() {
    this.elements.select.addEventListener("change", (event) => {
      if (event.target.value == "0") {
        this.elements.select.style.border = "#8f8f8f solid 1px";
      } else {
        this.elements.select.style.border = "#45f3ff solid 1px";
      }
    });

    this.elements.form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (this.elements.select.value != "0" && this.elements.selectedFile.textContent != "Seleziona file") {
        var date = new Date(this.elements.date.value);
        const data = {
          text: this.elements.text.value,
          date: date.toISOString().slice(0, 19).replace("T", " "),
          checkBox: this.getCheckBoxValue(),
          number: parseInt(this.elements.number.value),
          file: this.elements.file.value,
          idRadio: parseInt(this.getSelectedRadio()),
          idSelect: parseInt(this.elements.select.value),
        };

        FetchManager.postData("../formPage/php/insertFormValues.php", data).then(
          (response) => {
            if (response.status == "success") {
              this.elements.text.value = "";
              this.elements.date.value = "";
              this.elements.checkBox.checked = false;
              this.elements.number.value = "";
              this.elements.file.value = "";
              this.elements.select.value = "0";
              this.elements.select.style.border = "#8f8f8f solid 1px";
              this.uncheckRadio();
              this.popupManager.showPopup(
                "Record aggiunto con successo",
                "#3AE51B"
              );
            }
          }
        );
      }
    });
  }

  getCheckBoxValue() {
    if (this.elements.checkBox.checked == true) {
      return "1";
    } else {
      return "0";
    }
  }

  getSelectedRadio() {
    for (let i = 0; i < this.elements.radios.length; i++) {
      if (this.elements.radios[i].checked) {
        return this.elements.radios[i].id;
      }
    }
  }
  uncheckRadio() {
    for (let i = 0; i < this.elements.radios.length; i++) {
      if (this.elements.radios[i].checked) {
        this.elements.radios[i].checked = false;
      }
    }
  }
}

export default FormPageManager;
