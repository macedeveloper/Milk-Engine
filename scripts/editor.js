document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.editor-tab');
    const fields = document.querySelectorAll('.editor-field');

    // Функция для активации вкладки
    function activateTab(tabId) {
        // Скрываем все контенты
        fields.forEach(content => {
            content.classList.remove('active');
        });
        
        // Показываем нужный контент
        const contentId = `editor-field-${tabId.replace('editor-tab-', '')}`;
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            contentElement.classList.add('active');
        }

        // Обновляем активный класс на вкладках
        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.id === tabId) {
                tab.classList.add('active');
            }
        });
    }

    // Добавляем обработчики событий для вкладок
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            activateTab(tab.id);
        });
    });

});
