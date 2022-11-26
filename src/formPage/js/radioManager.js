class RadioManager {
  constructor(parentElement) {
    this.rootElement = parentElement;
    this.elements = {};
    const parser = new DOMParser();
    const radioTemplateString =
      '<div class="input-container radio-container"><input type="radio" name="radio" class="input-radio"><label class="radio-label"></label></div>';
    const templateElement = parser.parseFromString(
      radioTemplateString,
      "text/html"
    );
    this.template = templateElement.documentElement.querySelector("body > div");
  }

  init(){
    this.initElements();
  }

  initElements(){
    this.elements = {
        radio : this.template.querySelector(".input-radio"),
        label: this.template.querySelector(".radio-label"),
    }
    this.rootElement.appendChild(this.template);
  }

  setRadioValues(id, name){
    this.elements.radio.id = id;
    this.elements.label.innerHTML = name;
    this.elements.label.htmlFor = this.elements.radio.id;
  }

}

export default RadioManager;
