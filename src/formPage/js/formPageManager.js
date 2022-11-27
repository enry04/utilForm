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
      date: this.rootElement.querySelector(".input-date"),
      checkBox: this.rootElement.querySelector(".input-checkBox"),
      number: this.rootElement.querySelector(".input-number"),
      file: this.rootElement.querySelector(".input-file"),
      selectedFile: this.rootElement.querySelector("#current-file"),
      radios: this.rootElement.querySelectorAll(".input-radio"),
      select: this.rootElement.querySelector(".input-select"),
      form: this.rootElement.querySelector("form"),
    };
  }

  initEventListeners() {

    this.elements.file.addEventListener("change", (event) => {
      this.elements.selectedFile.textContent = this.elements.file.files[0].name;

    });

    this.elements.form.addEventListener("submit", (event) => {
      var date = new Date(this.elements.date.value);
      const data = {
        'text': this.elements.text.value,
        'date': date.toISOString().slice(0, 19).replace('T', ' '),
        'checkBox': this.getCheckBoxValue(),
        'number': parseInt(this.elements.number.value),
        'file': this.elements.file.value,
        'idRadio': parseInt(this.getSelectedRadio()),
        'idSelect': parseInt(this.elements.select.value),
      };

      FetchManager.postData("../formPage/php/insertFormValues.php", data).then(
        (response) => {
          if(response.status == "success") {
            location.href = "../mainPage/mainPage.php";
          }
        }
      );
     
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
}

export default FormPageManager;
