import FetchManager from "../../common/js/fetchManager.js";
import PopupManager from "../../common/js/popupManager.js";

class TableManager {
  constructor(parentElement) {
    this.rootElement = parentElement;
    this.row = null;
    this.N_ATTRIBUTES = 10;
    this.btns = {};
    this.currentId = null;
    this.popupManager = new PopupManager(
      document.querySelector(".popup-overlay")
    );
  }

  init() {
    this.initElements();
    this.initEventsListener();
  }

  initElements() {
    this.row = document.createElement("tr");

    for (let i = 0; i < this.N_ATTRIBUTES; i++) {
      let tableCell = document.createElement("td");
      if (i == 8) {
        let inputElement = document.createElement("input");
        inputElement.setAttribute("type", "button");
        inputElement.setAttribute("value", "modifica");
        inputElement.setAttribute("class", "modify-btn");
        tableCell.appendChild(inputElement);
      } else if (i == 9) {
        let inputElement = document.createElement("input");
        inputElement.setAttribute("type", "button");
        inputElement.setAttribute("value", "elimina");
        inputElement.setAttribute("class", "remove-btn");
        tableCell.appendChild(inputElement);
      }
      this.row.appendChild(tableCell);
    }

    this.btns = {
      btnModify: this.row.querySelector(".modify-btn"),
      btnRemove: this.row.querySelector(".remove-btn"),
    };

    console.log(this.btns);

    this.rootElement.appendChild(this.row);
  }
  initEventsListener() {
    this.btns.btnRemove.addEventListener("click", (event) => {
      this.popupManager.showPopup("Record eliminato con successo", "red");
      const data = {
        currentId: parseInt(this.currentId),
      };
      FetchManager.postData("../mainPage/php/removeElement.php", data).then(
        (response) => {
          console.log(response);
        }
      );
      this.row.remove();
    });

    this.btns.btnModify.addEventListener("click", (event) => {
      let valuesToSend = new URLSearchParams();
      valuesToSend.append("idElement", this.row.firstChild.textContent);
      location.href =
        "../modifyFormPage/modifyFormPage.php?" + valuesToSend.toString();
    });
  }

  setData(id, testo, data, camposn, numero, percorso, supporto, radioet) {
    let values = [
      id,
      testo,
      data,
      camposn,
      numero,
      percorso,
      supporto,
      radioet,
    ];
    for (let i = 0; i < this.row.childNodes.length - 2; i++) {
      this.row.childNodes[i].innerHTML = values[i];
    }
    this.currentId = id;
  }
}

export default TableManager;
