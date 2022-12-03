import FetchManager from "../../common/js/fetchManager.js";
import RadioManager from "../../common/js/radioManager.js";
import SelectManager from "../../common/js/selectManager.js";
import ModifyFormPageManager from "./modifyFormPageManager.js";

const radioParentElement = document.querySelector(".third-row-container");
let data = {};
let radioData;

await FetchManager.postData("../common/php/readRadio.php", data).then(
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

await FetchManager.postData("../common/php/readSelect.php", data).then(
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

const titleText = document.querySelector(".title-text");
titleText.textContent = "Modifica record";

let dataToReceive = new URLSearchParams(window.location.search);
data = {
  currentElementId: dataToReceive.get("idElement"),
};

await FetchManager.postData("../modifyFormPage/php/readElement.php", data).then(
  (response) => {
    if (response.status == "success") {
      const formParentElement = document.querySelector(".items-container");
      const modifyFormPageManager = new ModifyFormPageManager(formParentElement, JSON.parse(response.data));
      modifyFormPageManager.init();
    } else {
      console.log(response.status);
    }
  }
);

const goBackElement = document.querySelector(".go-back-container");
goBackElement.addEventListener("click", (event) => {
  location.href = "../mainPage/mainPage.php";
});
