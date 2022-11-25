import FetchManager from "../../common/js/fetchManager.js";
import FormPageManager from "./formPageManager.js";

const parentElement = document.querySelector("items-container");
const formPageManager = new FormPageManager(parentElement);
formPageManager.init();

