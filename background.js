const targetUrl = "https://gamersclub.com.br/api/lobby/match";

// chrome.webRequest.onCompleted.addListener(
//   function (details) {
//     if (details.url.includes(targetUrl)) {
//       console.log("Captured HTTP call:", details);

//       // send a message to the content script to display the response

//       chrome.tabs.sendMessage(details.tabId, {
//         details: details,
//         action: "ipFound",
//       });
//     }
//   },
//   { urls: [targetUrl] }
// );

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.type === "IP_RESPONSE") {
//     console.log("URL:", message.url);
//     console.log("Response Body:", message.body);
//     // Process the response as needed
//   }
// });
