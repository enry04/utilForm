import FetchManager from "../../common/js/fetchManager.js";
import PopupManager from "../../common/js/popupManager.js";
class FormPageManager {
  constructor(parentElement, data) {
    this.rootElement = parentElement;
    this.elements = {};
    this.data = data;
    console.log(this.data);
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

    this.elements.text.value = this.data["testo"];
    this.elements.date.value = this.data["data"];
    this.elements.checkBox.checked = this.setPreCheckBoxValue();
    this.elements.number.value = this.data["numero"];
    this.elements.file.value = this.data["percorso"];
    this.elements.select.style.border = "#45f3ff solid 1px";
    this.setPreSelectedRadio();
    this.elements.select.value = this.data["idSupporto"];
  }

  initEventListeners() {
    this.elements.form.addEventListener("submit", (event) => {
      event.preventDefault();
      var date = new Date(this.elements.date.value);
      const data = {
        currentId: this.data["id"],
        text: this.elements.text.value,
        date: date.toISOString().slice(0, 19).replace("T", " "),
        checkBox: this.getCheckBoxValue(),
        number: parseInt(this.elements.number.value),
        file: this.elements.file.value,
        idRadio: parseInt(this.getSelectedRadio()),
        idSelect: parseInt(this.elements.select.value),
      };

      FetchManager.postData(
        "../modifyFormPage/php/updateElement.php",
        data
      ).then((response) => {
        if (response.status == "success") {
          this.popupManager.showPopup(
            "Record modificato con successo",
            "#3AE51B",
            "../mainPage/mainPage.php"
          );
        }
      });
    });
  }

  setPreCheckBoxValue() {
    if (this.data["camposn"] == "1") {
      return true;
    } else {
      return false;
    }
  }

  setPreSelectedRadio() {
    for (let i = 0; i < this.elements.radios.length; i++) {
      if (this.elements.radios[i].id == this.data["idRadioet"]) {
        this.elements.radios[i].checked = true;
      }
    }
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
}

export default FormPageManager;
