import { sendData } from "./service.js";

self.addEventListener("fetch", (event) => {
  console.log(event);
});


self.addEventListener("sync",(event)=> {
    if (event.tag === "message-sync") {
        sendData({"message": "Hola desde BackgroundSync"})
    }
})