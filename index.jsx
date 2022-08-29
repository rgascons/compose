import {Text, Row, Column} from "./dist/index";

let t = Text("hello world");
let t2 = Text("!!");
let row = Row(t, t2);
let app = Column(row, Text("-end of app-"));

window.document.getElementById("composeApp").replaceWith(app);