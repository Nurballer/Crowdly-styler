// Function to modify the page
function modifyPage() {
    // 1. Remove specific elements
    document.querySelectorAll('.success_status_axy06_46, .success_status_axy06_41, .question-status, ._logo_button_119mu_152').forEach(el => el.remove());

    // 2. Modify the text content of all elements containing '•'
    document.querySelectorAll('*').forEach(el => {
        if (el.childNodes.length) {
            el.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('•')) {
                    node.textContent = node.textContent.replace(/•/g, '•'); // Replace '•' with '.'
                }
            });
        }
    });

    // 3. Modify the CSS for ._button_axy06_1
    document.querySelectorAll('._button_axy06_1').forEach(button => {
        button.style.background = '#ffffff';
        button.style.color = '#ffffff';
        button.style.width = '51%';
    });

    // 4. Modify the CSS for .ai-answer
    document.querySelectorAll('.ai-answer').forEach(answer => {
        answer.style.background = '#e7f3f5';
        answer.style.animation = ''; // Remove animation
        answer.style.color = '#ffffff';
    });

    // 5. Remove emoji '' and '' throughout the page
    document.querySelectorAll('*').forEach(el => {
        if (el.childNodes.length) {
            el.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('')) {
                    node.textContent = node.textContent.replace(//g, '');
                }
                if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('')) {
                    node.textContent = node.textContent.replace(//g, '');
                }
            });
        }
    });

    // 6. Modify Shadow DOM if present
    document.querySelectorAll('*').forEach(el => {
        if (el.shadowRoot) {
            // Remove specific elements inside Shadow DOM
            el.shadowRoot.querySelectorAll('.success_status_axy06_46, .success_status_axy06_41, .question-status, ._logo_button_119mu_152').forEach(div => div.remove());

            // Modify the CSS for ._button_axy06_1
            el.shadowRoot.querySelectorAll('._button_axy06_1').forEach(button => {
                button.style.background = '#ffffff';
                button.style.color = '#ffffff';
                button.style.width = '51%';
            });

            // Modify the CSS for .ai-answer
            el.shadowRoot.querySelectorAll('.ai-answer').forEach(answer => {
                answer.style.background = '#e7f3f5';
                answer.style.animation = '';
                answer.style.color = '#ffffff';
            });

            // Remove emoji '' and '' in Shadow DOM
            el.shadowRoot.querySelectorAll('*').forEach(shadowEl => {
                if (shadowEl.childNodes.length) {
                    shadowEl.childNodes.forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('')) {
                            node.textContent = node.textContent.replace(//g, '');
                        }
                        if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('')) {
                            node.textContent = node.textContent.replace(//g, '');
                        }
                    });
                }
            });
        }
    });

    // 7. Modify the color of images inside _logo_button_119mu_152
    document.querySelectorAll('._logo_button_119mu_152 img').forEach(img => {
        img.style.filter = 'invert(54%) sepia(87%) saturate(517%) hue-rotate(149deg) brightness(94%) contrast(90%)';  // Change image color to #dee2e6
    });

    // 8. Apply background color to .que .info if #crowdly_hidden is visible
    const crowdlyHidden = document.getElementById('crowdly_hidden');
    if (crowdlyHidden && !crowdlyHidden.classList.contains('hidden')) {
        document.querySelectorAll('.que .info').forEach(info => {
            info.style.backgroundColor = '#ffffff'; // Set background color to white
        });
    }
}

// Execute modifications immediately
modifyPage();

// Observe DOM changes
const observer = new MutationObserver(modifyPage);
observer.observe(document.body, { childList: true, subtree: true });
