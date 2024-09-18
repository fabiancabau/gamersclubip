// content.js

(function () {


  const targetUrl = "https://gamersclub.com.br/api/lobby/match";

  console.log("Gamers Club Response Interceptor loaded");

  setInterval(() => {
    fetch(targetUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.data != null) {
          if (data.data.step == "onServerReady") {
            let ip = `connect ${data.data.ip}; password ${data.data.password}`;
            displayInfo(ip);
          } else if (data.data.step == "onMapVeto") {
            displayInfo("Vetando Mapa");
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, 3000);


  function displayInfo(data) {
    // Create a container for the info
    const infoDiv = document.createElement("div");
    infoDiv.style.position = "fixed";
    infoDiv.style.bottom = "10px";
    infoDiv.style.right = "10px";
    infoDiv.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    infoDiv.style.color = "#fff";
    infoDiv.style.padding = "10px";
    infoDiv.style.borderRadius = "5px";
    infoDiv.style.zIndex = "10000";
    infoDiv.style.fontSize = "12px";
    infoDiv.style.maxWidth = "500px";
    infoDiv.style.wordBreak = "break-word";
    infoDiv.style.fontFamily = "sans-serif";

    const responseInfo = `
      <strong>IP:</strong><pre>${data}</pre>
    `;

    infoDiv.innerHTML = responseInfo;

    document.body.appendChild(infoDiv);
  }
})();
