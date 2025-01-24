export function build() {

    const window_title = "Milk Engine ∙ Preview ";
    const favicon = "https://milk.macestudios.ru/logo.svg"

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

    const scripts = `
    // Set up
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const CW = canvas.width = 640;
    const CH = canvas.height = 640;

    let gameFrame = 0;

    // Game loop
    function animate(timestamp) {
        ctx.clearRect(0, 0, CW, CH);

        ctx.fillStyle = "#E9E5DC";
        ctx.fillRect(10, 10, gameFrame + 10, CH-20)

        gameFrame++;
        requestAnimationFrame(animate);
    };
    animate();
    `;

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
        </head>
        <body>
            <canvas id="canvas"></canvas>
            <script>${scripts}</script>
        </body>
    </html>
    `;

    console.log(preview_htmlBase)
    return preview_htmlBase

}