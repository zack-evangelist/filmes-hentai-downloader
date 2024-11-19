// Importa a biblioteca Axios
const axios = require('axios');

/**
 * Função para extrair informações de URLs de vídeos no HTML
 * @param {string} html - O conteúdo HTML para análise
 */
function addVideoURL(html) {
    const regex = /src=".+?file=https:\/\/trailers\.(.+?)\/(.+?)\.mp4.+?"/;
    console.log("Analisando HTML...");

    const match = html.match(regex);

    if (match) {
        // match[1] contém a parte após "trailers."
        const dominio = match[1];
        // match[2] contém o caminho do arquivo antes de ".mp4"
        const caminho = match[2].replace('-previa', '');

        console.log("Domínio:", dominio); // Exemplo: "site"
        console.log("Caminho:", caminho); // Exemplo: "path/video"
    } else {
        console.log("Nenhum vídeo encontrado no HTML.");
    }
}

/**
 * Função para buscar o HTML de uma URL e analisá-lo
 * @param {string} url - A URL para fazer a requisição
 */
async function fetchAndAnalyzeHTML(url) {
    try {
        console.log(`Fazendo requisição para: ${url}`);
        const response = await axios.get(url); // Faz a requisição HTTP
        const html = response.data; // Obtém o HTML da resposta
        addVideoURL(html); // Chama a função para analisar o HTML
    } catch (error) {
        console.error("Erro ao buscar e analisar HTML:", error.message);
    }
}

// URL de exemplo (substitua pela URL desejada)
const url = 'https://filmeshentai.com/filmes-legendados/recebi-um-tratamento-incomum-de-uma-medica-exemplar-live-action';
fetchAndAnalyzeHTML(url);