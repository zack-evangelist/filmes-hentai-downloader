# Filmes Hentai Downloader
* Change URLs for download videos in the https://filmeshentai.com for FREE

# What this extension do?
![video of the extension running](assets/example.gif)

| Before use the extension          | after use the extension            |
|-----------------------------------|------------------------------------|
| ![Antes](assets/before.png)       | ![Depois](assets/after.jpg)        |

Browsers supported:
- Chrome
- Edge
- Firefox (ESR, Nightly and Developer Edition)
- Opera (GX also supports)
- Brave

**!!! Actually only works on this Firefox versions: ESR, Nightly and Developer Edition !!!**
**normal version of Firefox doesnt work because firefox policies**
# Execute

### Install directly from file
- download the extension on [this github page](https://zack-evangelist.github.io/filmes-hentai-downloader/)
- go to [about:config](about:config)
- type "xpinstall.signatures.required" and set it to **False** 
    ![configuration to set install extensions by file in firefox](assets/config_firefox.png)
- go to [about:addons](about:addons) 
- in the engine button menu, select install from file, accept the risk and give the file downloaded

### Or create the extension file from scratch

#### Firefox
- Create a **.zip** and **.xpi** file with all src/ folder

    if using Linux, simply execute on the terminal:
    ```bash
    cd src && zip -r ../filmes_hentai_downloader.zip . && cd ..
    cp filmes_hentai_downloader.zip filmes_hentai_downloader.xpi
    ```
- Go to [debugging page firefox](about:debugging#/runtime/this-firefox) on your Firefox
- Upload the zip on "temporary upload extension"
    ![instalation of extension](assets/install.jpg)
- Go to [https://filmeshentai.com](https://filmeshentai.com) and select a video to view

#### Chrome
- unzip the .zip file on a temporary folder
- Go to [chrome://extensions/](chrome://extensions/)
- active the developer mode
- click on "upload without compression" and select the folder you extracted the zip file
- Go to [https://filmeshentai.com](https://filmeshentai.com) and select a video to view