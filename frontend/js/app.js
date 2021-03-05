import {createHeader} from "./header.js"
import {createMainElement} from "./createMainElement.js";

const clearChildren = function (element) {
    while (element.firstChild) {
      element.removeChild(element.lastChild);
    }
  };
const container = document.getElementById('div--wrapper');
const displayViewMainElement = function (albums) {
    clearChildren(container);
    let header = createHeader();
    container.prepend(header);
    let mainElement = createMainElement(albums);
    container.appendChild(mainElement);
};
const getMainElementFromJSON = function () {
    fetch("http://localhost:8080/api/albums/")
        .then((response) => response.json())
        .then((albums) => displayViewMainElement(albums))
        .catch((error) => console.log(error));
      };


getMainElementFromJSON();


export {getMainElementFromJSON};
export {clearChildren};