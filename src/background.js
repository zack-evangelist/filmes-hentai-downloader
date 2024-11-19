// alterar o HTML apenas em momentos específicos (como quando o usuário clica em um botão da extensão), use a API tabs.executeScript()

// browser.tabs.executeScript({
//     code: `
//       const elemento = document.querySelector('h1');
//       if (elemento) {
//         elemento.style.color = 'red';
//         elemento.innerText = 'Alterado pela extensão!';
//       }
//     `
//   });
  
chrome.webRequest.onHeadersReceived.addListener(
    (details) => {
        const headers = details.responseHeaders || [];
        headers.push({
            name: "Access-Control-Allow-Origin",
            value: "*"
        });

        return { responseHeaders: headers };
    },
    { urls: ["https://videos.filmeshentai.com/*"] },
    ["blocking", "responseHeaders"]
);
