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
      
    });
  }

  setSelect() {}
}

export default FormPageManager;
