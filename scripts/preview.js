import { build } from './build.js';

// Ui buttons
const uiRunPreviewButton = document.getElementById('ui-run-preview')
uiRunPreviewButton.addEventListener('click', runPreview)

let previewWindow
let PreviewState = ''

// Run Preview
function runPreview() {

    // Preview setup
    const preview_specs = "width=640, height=360";
    
    
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
    
        previewWindow.document.write(build());
    }

    
}
