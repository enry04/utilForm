import TableManager from "./tableManager.js";
import FetchManager from "../../common/js/fetchManager.js";
import PopupManager from "../../common/js/popupManager.js";

const popupManager = new PopupManager(document.querySelector(".popup-overlay"));
const searchBarParent = document.querySelector(".search-add-container");
const textBar = searchBarParent.querySelector(".search-text");
const btnConfirm = searchBarParent.querySelector(".confirm-btn");
const parentElement = document.querySelector(".table-container");
const tableElement = document.querySelector("table");
parentElement.style.display = "none";
let tableData = null;
const headerValues = [
  "Id",
  "Testo",
  "Data",
  "Camposn",
  "Numero",
  "Percorso",
  "Supporto",
  "Radioet",
  "Modifica",
  "Elimina",
];

btnConfirm.addEventListener("click", (event) => {
  tableElement.innerHTML = "";
  
  if ((textBar.value != null) & (textBar.value != "")) {
    const data = {
      currentSearch: textBar.value.split(' ').join(''),
    };
    FetchManager.postData("../mainPage/php/readFilter.php", data).then(
      (response) => {
        if (response.status == "success") {
          tableElement.innerHTML = "";
          parentElement.style.display = "flex";
          tableData = JSON.parse(response.data);
          let tHead = tableElement.createTHead();
          let row = tHead.insertRow();
          for (let i = 0; i < headerValues.length; i++) {
            let th = document.createElement("th");
            th.innerHTML = headerValues[i];
            row.appendChild(th);
          }
          let tBody = tableElement.createTBody();
          tableData.forEach((rowData) => {
            const tableManager = new TableManager(tableElement);
            tableManager.init();
            tableManager.setData(
              rowData["id"],
              rowData["testo"],
              rowData["data"],
              rowData["camposn"],
              rowData["numero"],
              rowData["percorso"],
              rowData["supportoEtichetta"],
              rowData["radioetEtichetta"]
            );
          });
        } else {
          popupManager.showPopup("Nessun risultato trovato", "red");
          parentElement.style.display = "none";
          console.log(response);
        }
      }
    );
  } else {
    popupManager.showPopup("Inserisci qualcosa", "red");
    parentElement.style.display = "none";
  }
});
