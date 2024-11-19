function getVideoURL() {
    const regex = `src=".+?file=https:\/\/trailers\.(.+?)\/(.+?)\.mp4.+?"`
    const html = document.documentElement.outerHTML;
    console.log(`Analisando html...`);

    const match = html.match(regex);

    if (match) {
        // match[1] contém a parte após "trailers."
        const domain = match[1];
        // match[2] contém o caminho do arquivo antes de ".mp4"
        const path = match[2].replace('-previa','');
        
        console.log("Domínio:", domain);  // "site"
        console.log("Caminho:", path);  // "path/video"
        return { 'domain':domain, 
            'path':path };
    } else {
        console.log("Nenhum vídeo encontrado no HTML.");
        return null;
    }
}

// /**
//  * Função para verificar a acessibilidade de uma URL de vídeo
//  * @param {string} url - A URL a ser verificada
//  * @returns {Promise<boolean>} - Retorna true se a URL for acessível, false caso contrário
//  */
// async function checkVideoURL(url) {
//     var response = ''
//     try {
//         response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 // Substitui o User-Agent padrão por um mais comum de navegadores
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
//                 // Outros cabeçalhos que podem ajudar a contornar bloqueios
//                 'Accept': '*/*',
//                 'Referer': 'https://filmeshentai.com/',
//             }
//         });
//         console.log(response.status)
//         // const response = await fetch(url, { method: 'GET' }); // Substituído 'HEAD' por 'GET'
//         // return response.ok; // true se o status for 200
//     } catch (error) {
//         console.error(`Erro ao verificar a URL: ${error.message}`);
//         try {
//             // Troca de domínio em caso de erro
//             url = url.replace('filmeshentai.com', 'hentaitokyo.net');
//             response = await fetch(url, {
//                 method: 'GET',
//                 headers: {
//                     // Substitui o User-Agent padrão por um mais comum de navegadores
//                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
//                     // Outros cabeçalhos que podem ajudar a contornar bloqueios
//                     'Accept': '*/*',
//                     'Referer': 'https://filmeshentai.com/',
//                 }
//             }); // Tenta novamente com o novo domínio
//             console.log(response.status)
//             return response.ok;
//         } catch (error) {
//             console.error(`Erro ao verificar a URL no domínio alternativo: ${error.message}`);
//             return false;
//         }
//     }
// }

function addURLs(domain, path) {
    // Monta o URL do vídeo
    const video_path = `https://videos.${domain}/${path}.mp4`;
    console.log(`${domain} : ${video_path}`);

    // Seleciona o elemento principal para inserir as informações
    const div_info = document.querySelector('div.infoVideo');
    if (!div_info) {
        console.error('Elemento div.infoVideo não encontrado.');
        return;
    }

    // Cria a linha para exibir as informações
    const div_row = document.createElement('div');
    div_row.setAttribute('class', 'row');
    div_info.appendChild(div_row);

    // Adiciona o título (nome do domínio)
    const div_title = document.createElement('div');
    div_title.setAttribute('class', 'tit');
    div_title.innerText = `${domain}:`;
    div_row.appendChild(div_title);

    // Adiciona o link do vídeo
    const div_content = document.createElement('div');
    div_row.setAttribute('class', 'container_url');
    div_row.appendChild(div_content);

    const video_url = document.createElement('a');
    video_url.innerText = `${path}.mp4`;
    video_url.href = video_path;
    video_url.setAttribute('target', '_blank');
    video_url.setAttribute('class', 'url');
    div_content.appendChild(video_url);
}


/**
 * Função para adicionar a URL do vídeo e verificar se é acessível
 */
async function addVideoURL() {
    const response = getVideoURL();
    const domain = response.domain;
    const path = response.path;

    // Monta a URL do vídeo
    // const video_url = `https://videos.${domain}/${path}.mp4`;
    const domains = ['filmeshentai.com', 'hentaitokyo.net']
    for (const domain of domains) {
        addURLs(domain, path)
    }    
}

function injectRowStyles() {
    const style = document.createElement('style');
    style.textContent = `
        div.row > div.container_url {
            background-color: blue;
        },
        div.row > div > a.url {
            text-decoration: none,
            backgroud-color: blue;
        }
    `;
    document.head.appendChild(style);
}

// Injetar estilos globais na página
injectRowStyles();

addVideoURL()