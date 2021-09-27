const registerBackgroundSync = () => {
  navigator.serviceWorker.ready
    .then((swRegistration) => swRegistration.sync.register("message-sync"))
    .catch((err) => console.log(err));
};

export const sendData = (data) => {
  fetch("http://localhost:3000/send/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
      registerBackgroundSync();
    });
};
