import { createRoot } from '../react-dom/client';


let myApp = document.getElementById("myApp");

myApp.innerHTML = "Hello Words!!!";

myApp.innerHTML = myApp.innerHTML +'<div id = "reactApp"></div>';

const root = createRoot(document.getElementById(reactApp));
root.render("<h1> Hello Words From React</h1>");
