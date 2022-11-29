import FetchManager from "../../common/js/fetchManager.js";
import FormPageManager from "./formPageManager.js";
import RadioManager from "./radioManager.js";
import SelectManager from "./selectManager.js";

const radioParentElement = document.querySelector(".third-row-container");
const data = {};
let radioData;

await FetchManager.postData("../formPage/php/readRadio.php", data).then(
  (response) => {
    if (response.status == "success") {
      radioData = JSON.parse(response.data);
    } else {
      console.log(response.status);
    }
  }
);

radioData.forEach((radioValue) => {
  const radioManager = new RadioManager(radioParentElement);
  radioManager.init();
  radioManager.setRadioValues(radioValue["id"], radioValue["etichetta"]);
});

const selectParentElement = document.querySelector(".input-select");
let selectData;

await FetchManager.postData("../formPage/php/readSelect.php", data).then(
  (response) => {
    if (response.status == "success") {
      selectData = JSON.parse(response.data);
    } else {
      console.log(response.status);
    }
  }
);

selectData.forEach((optionValue) => {
  const selectManager = new SelectManager(selectParentElement);
  selectManager.setOptionValues(optionValue["id"], optionValue["etichetta"]);
});

const formParentElement = document.querySelector(".items-container");
const formPageManager = new FormPageManager(formParentElement);
formPageManager.init();

const goBackElement = document.querySelector(".go-back-container");
goBackElement.addEventListener("click", (event) => {
  location.href = "../mainPage/mainPage.php";
});
