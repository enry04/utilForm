import FetchManager from "../../common/js/fetchManager.js";
import FormPageManager from "./formPageManager.js";
import RadioManager from "./radioManager.js";

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

radioData.forEach(radioValue => {
    const radioManager = new RadioManager(radioParentElement);
    radioManager.init();
    radioManager.setRadioValues(radioValue['id'], radioValue['etichetta']);
});