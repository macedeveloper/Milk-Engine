import { getProjectJSON } from './build.js';

// Editor tabs
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.editor-tab');
    const fields = document.querySelectorAll('.editor-field');

    // Activate tab
    function activateTab(tabId) {
        // Hide everything
        fields.forEach(content => {
            content.classList.remove('active');
        });

        // Show selected
        const contentId = `editor-field-${tabId.replace('editor-tab-', '')}`;
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            contentElement.classList.add('active');
        }
    }

    // Event listeners
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            activateTab(tab.id);
        });
    });

});


// Save project
function saveToLocalStorage(key, str) {
    localStorage.setItem(key, str);
}
function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function saveProject() {
    const projectNameInput = document.getElementById('project-sets-name');
    const projectName = projectNameInput.value;
    
    saveToLocalStorage(`Project.${projectName}`, getProjectJSON());
    console.log(`📝 Saved data for ${projectName}: `, getFromLocalStorage(`Project.${projectName}`));
}

function loadProject() {
    const projectName = document.getElementById('project-sets-name').value;

    let json = getFromLocalStorage(`Project.${projectName}`)
    let obj = JSON.parse(json)

    const editorFieldScript = document.getElementById('editor-script-text');
    editorFieldScript.value = obj.script;
}


document.getElementById('ui-save-project').addEventListener('click', saveProject)
document.getElementById('ui-load-project').addEventListener('click', loadProject)
