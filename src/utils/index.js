export function getVideoURL() {
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

/**
 * Função para verificar a acessibilidade de uma URL de vídeo
 * @param {string} url - A URL a ser verificada
 * @returns {Promise<boolean>} - Retorna true se a URL for acessível, false caso contrário
 */
export async function checkVideoURL(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        // Verifica se o status da resposta é 200 (OK)
        return response.ok; // true para status 200, false caso contrário
    } catch (error) {
        console.error(`Erro ao verificar a URL: ${error.message}`);
        try {
            url = url.replace('filmeshentai.com','hentaitokyo.net')
            const response = await fetch(url, { method: 'HEAD' });
            // Verifica se o status da resposta é 200 (OK)
            return response.ok; // true para status 200, false caso contrário
        } catch (error) {
            console.error(`Erro ao verificar a URL: ${error.message}`);
            return false;
        }
    }
}