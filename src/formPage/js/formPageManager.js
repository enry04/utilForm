class FormPageManager{
    constructor(parentElement){

        this.rootElement = parentElement;
        this.elements = {};
    }

    init(){
        this.initElements();
        this.initEventListeners();
    }

    initElements(){
        this.elements = {
            text: this.rootElement.querySelector(""),
            number: this.rootElement.querySelector(""),
            date: this.rootElement.querySelector(""),
            file: this.rootElement.querySelector(""),
            radios: this.rootElement.querySelectorAll(""),
            select: this.rootElement.querySelector(""),
            checkBox: this.rootElement.querySelector(""),
            btnSend: this.rootElement.querySelector(""),
        }
    }

    initEventListeners(){


    }

    setRadios(){

    }

    setSelect(){

    }
}

export default FormPageManager;