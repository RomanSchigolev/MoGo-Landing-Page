window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js")
      .then(registration => {
        console.log("SW registered");
        console.log(registration);
      })
      .catch(error => {
        console.log("SW failed");
        console.log(error);
      });
  }
});