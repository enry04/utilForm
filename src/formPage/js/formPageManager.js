import FetchManager from "../../common/js/fetchManager.js";

class FormPageManager {
  constructor(parentElement) {
    this.rootElement = parentElement;
    this.elements = {};

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
      number: this.rootElement.querySelector(".input-number"),
      date: this.rootElement.querySelector(".input-date"),
      file: this.rootElement.querySelector(".input-file"),
      radios: this.rootElement.querySelectorAll(".input-radio"),
      select: this.rootElement.querySelector(".input-select"),
      checkBox: this.rootElement.querySelector(".input-checkBox"),
      form: this.rootElement.querySelector("form"),
    };
  }

  initEventListeners() {
    this.elements.form.addEventListener("submit", (event) => {
      const data = {
        text: this.elements.text.value,
        number: this.elements.number.value,
        date: this.elements.date.value,
        file: this.elements.file.value,
        idRadio: this.getSelectedRadio(),
        idSelect: this.elements.select.value,
        checkBox: this.getCheckBoxValue(),
      };

      debugger;

      FetchManager.postData("../formPage/php/insertFormValues.php", data).then(
        (response) => {
          console.log(response);
        }
      );
    });
  }

  getCheckBoxValue() {
    if (this.elements.checkBox.value == "on") {
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
