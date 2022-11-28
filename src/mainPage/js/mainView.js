import TableManager from "./tableManager.js";
import FetchManager from "../../common/js/fetchManager.js";

const searchBarParent = document.querySelector(".search-add-container");
const textBar = searchBarParent.querySelector(".search-text");
const form = searchBarParent.querySelector("form");
let data;

form.addEventListener("submit" , (event) => {
    debugger
    const data = {
        "currentSearch": textBar.value,
    }
    FetchManager.postData("../mainPage/php/readFilter.php",data).then(
        (response) => {
            if(response.status == "success"){
                location.href = "../formPage/formPage.php";
            }else {
                
            }
        }
    );
});

const parentElement = document.querySelector(".table-container");
// parentElement.style.display = "none";
const tableManager = new TableManager(parentElement);
tableManager.init();


