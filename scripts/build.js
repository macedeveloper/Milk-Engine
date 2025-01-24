export function build(gamescript = '') {
    
    // Hello world if empty script
    if (!gamescript) {
        gamescript = `add([
text("Hello World!"),
pos(120, 80),
]);`
    }

    const window_title = "Milk Engine ∙ Preview ";
    const favicon = "https://milk.macestudios.ru/logo.svg"

    const styles = `
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        padding: 0;
        background-color: black;
        color: white;
    }
    `;

    const scripts = `// import kaboom.js and initialize kaboom context
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";
kaboom();

// custom script
${gamescript}`;

    const preview_htmlBase = `
    <!DOCTYPE html>
    <!-- Made with Milk Engine 🥛 -->
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${window_title}</title>

            <link rel="shortcut icon" href="${favicon}" type="image/x-icon">
            
            <style>${styles}</style>
            <script async type="module">${scripts}</script>
        </head>
        <body>
        </body>
    </html>
    `;

    console.log('⚙️ HTML generated: ', preview_htmlBase)
    return preview_htmlBase

}

export function getProjectJSON() {
    const editorFieldScript = document.getElementById('editor-script-text');

    let obj = {
        script: editorFieldScript.value,
    };

    let json = JSON.stringify(obj);

    return json;
}