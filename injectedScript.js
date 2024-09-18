// Intercept XMLHttpRequest
const originalXHROpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (...args) {
  this.addEventListener("load", function () {
    console.log("XHR:", this.responseURL);

    const targetUrl = "https://gamersclub.com.br/api/lobby/match";

    // if (this.responseURL.includes(targetUrl)) {
    //   console.log("Captured HTTP call:", this.responseURL);
    //   window.postMessage(
    //     {
    //       type: "IP_RESPONSE",
    //       url: this.responseURL,
    //       body: this.responseText,
    //     },
    //     "*"
    //   );
    // }
  });
  originalXHROpen.apply(this, args);
};
