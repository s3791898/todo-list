import UI from "./modules/UI";
import "./styles/style.css";

console.log("testing index.js webpack");

// testing out DOM manipulation via webpack
const contentDiv = document.querySelector(".content");
const testH1 = document.createElement("h1");
testH1.textContent = "HELLO WORLD...TEST FROM WEBPACK INDEX.JS";
contentDiv.appendChild(testH1);
