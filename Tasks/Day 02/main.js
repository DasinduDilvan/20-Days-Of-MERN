

import { welcomeMessage, logMessage } from "./func.js";

const currentUser = {
    name: "Dasindu",
    age: 21,
    role: "Admin"
};

const welcomeText = welcomeMessage(currentUser);

const message = logMessage(welcomeText);

document.getElementById("app").innerHTML = message;