import { style, script } from './buildvars.js';


export function build(gameScript = '') {

    const window_title = "Milk Engine ∙ Preview";
    const favicon = "https://milk.macestudios.ru/logo.svg"

    let code = 
    `<!DOCTYPE html>
    <!-- Made with Milk Engine (https://milk.macestudios.ru/) 🥛 -->
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${window_title}</title>
        <link rel="shortcut icon" href="${favicon}" type="image/x-icon">
        <style>${style}</style>
    </head>
    <body>
        <canvas id="canvas"></canvas>
        <script>${script(gameScript)}</script>
    </body>
    </html>`;

    console.log('⚙️ HTML generated: ', code)
    return code
}


export function getProjectJSON() {
    const editorFieldScript = document.getElementById('editor-script-text');

    let obj = {
        script: editorFieldScript.value,
    };

    let json = JSON.stringify(obj);

    return json;
}