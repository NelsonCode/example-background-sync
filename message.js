import { sendData } from "./service.js";


const inputMessage = document.querySelector("#message");
const btnSend = document.querySelector("#btn-message");


btnSend.addEventListener("click", (event) => {
    event.preventDefault();
    sendData({ "message": inputMessage.value })
})