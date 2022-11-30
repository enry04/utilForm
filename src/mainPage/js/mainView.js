import TableManager from "./tableManager.js";
import FetchManager from "../../common/js/fetchManager.js";

const searchBarParent = document.querySelector(".search-add-container");
const textBar = searchBarParent.querySelector(".search-text");
const btnConfirm = searchBarParent.querySelector(".confirm-btn");
const parentElement = document.querySelector(".table-container");
const tableElement = document.querySelector("table");
parentElement.style.display = "none";
let notFoundText = document.createElement("h1");
notFoundText.classList.add("not-found-text");
document.querySelector("body").appendChild(notFoundText);
notFoundText.style.display = "none";
let tableData = null;
const headerValues = ["Id", "Testo", "Data", "Camposn", "Numero", "Percorso", "Supporto", "Radioet", "modifica", "elimina"];

btnConfirm.addEventListener("click", (event) => {
  if ((textBar.value != null) & (textBar.value != "")) {
    const data = {
      currentSearch: textBar.value,
    };
    FetchManager.postData("../mainPage/php/readFilter.php", data).then(
      (response) => {
        if (response.status == "success") {
          tableElement.innerHTML = "";
          parentElement.style.display = "flex";
          notFoundText.style.display = "none";
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
            const tableManager = new TableManager(tBody);
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
          parentElement.style.display = "none";
          notFoundText.style.display = "block";
          notFoundText.innerText = "Nessun record presente";
          console.log(response);
        }
      }
    );
  } else {
    parentElement.style.display = "none";
    notFoundText.style.display = "block";
    notFoundText.textContent = "Inserisci qualcosa";
  }
});