// Ui buttons
const uiRunPreviewButton = document.getElementById('ui-run-preview')
uiRunPreviewButton.addEventListener('click', runPreview)

let previewWindow
let PreviewState = ''


// Run Preview
function runPreview() {

    // Preview setup
    const preview_title = "Milk Engine 🥛 ∙ Preview ";
    const preview_specs = "width=640, height=360";
    const styles = `
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        padding: 0;
        background-color: black;
    }
    canvas {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 100vw;
        height: 100vh;
        margin: auto;
    }
    `;
    const scripts = ``

    const preview_htmlBase = `
    <!DOCTYPE html>
    <!-- Made with Milk Engine 🥛 -->
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${preview_title}</title>
            <link rel="shortcut icon" href="https://macestudios.ru/assets/pelmeni.jpeg" type="image/x-icon">
            <style>${styles}</style>
        </head>
        <body>
            <canvas id="canvas"></canvas>
            <script>${scripts}</script>
        </body>
    </html>
    `;
    
    if (PreviewState == 'Running') {
        console.log('⛔ Preview stopped!')
        PreviewState = ''
        uiRunPreviewButton.innerHTML = `<i class="bi bi-caret-right-fill"></i> Run`

        previewWindow.close();
    }
    else {
        console.log('▶️ Preview started!')
        PreviewState = 'Running'
        uiRunPreviewButton.innerHTML = `<i class="bi bi-stop-circle"></i> Stop`

        previewWindow = window.open('', '_blank', preview_specs);
    
        previewWindow.document.write(preview_htmlBase);
    }

    
}
