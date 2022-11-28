import TableManager from "./tableManager.js";
import FetchManager from "../../common/js/fetchManager.js";

const searchBarParent = document.querySelector(".search-add-container");
const textBar = searchBarParent.querySelector(".search-text");
const btnConfirm = searchBarParent.querySelector(".confirm-btn");
const parentElement = document.querySelector(".table-container");
parentElement.style.display = "none";
let notFoundText = document.createElement("h1");
notFoundText.classList.add("not-found-text");
notFoundText.innerText = "Nessun record presente";
document.querySelector("body").appendChild(notFoundText);
notFoundText.style.display = "none";
let tableData = null;

btnConfirm.addEventListener("click", (event) => {
    if (textBar.value != null & textBar.value != "") {
        const data = {
            "currentSearch": textBar.value,
        }
        FetchManager.postData("../mainPage/php/readFilter.php", data).then(
            (response) => {
                if (response.status == "success") {
                    parentElement.style.display = "flex";
                    notFoundText.style.display = "none";
                    tableData = JSON.parse(response.data);
                } else {
                    parentElement.style.display = "none";
                    notFoundText.style.display = "block";
                }
            }
        );
    }
});

const tableManager = new TableManager(parentElement);
tableManager.init();


