// content.js

(function () {
  window.addEventListener("message", (event) => {
    // console.log("received message", event.data.type);

    if (event.data.type && event.data.type === "IP_RESPONSE") {
    }
    // if (event.source !== window) return;
    // if (
    //   event.data.type &&
    //   (event.data.type === "FETCH_RESPONSE" ||
    //     event.data.type === "XHR_RESPONSE")
    // ) {
    //   chrome.runtime.sendMessage(event.data);
    // }
  });

  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("injectedScript.js");
  document.documentElement.appendChild(script);

  // The endpoint you want to intercept
  const targetUrl = "https://gamersclub.com.br/api/lobby/match";

  console.log("Gamers Club Response Interceptor loaded");

  // every 1 second, call the endpoint
  setInterval(() => {
    fetch(targetUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        displayInfo(targetUrl, data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, 1000);

  // chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  //   if (message.action === "ipFound") {
  //     console.log("Message received:", message, window.axios);
  //   }
  // });
  // Function to display the information on the page
  function displayInfo(url, data) {
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
    infoDiv.style.maxWidth = "300px";
    infoDiv.style.wordBreak = "break-word";
    infoDiv.style.fontFamily = "sans-serif";

    // Format the response info
    const responseInfo = `
      <strong>Intercepted Response:</strong><br>
      <strong>URL:</strong> ${url}<br>
      <strong>Data:</strong><pre>${JSON.stringify(data, null, 2)}</pre>
    `;

    infoDiv.innerHTML = responseInfo;

    // Append to the body
    document.body.appendChild(infoDiv);
  }
})();
