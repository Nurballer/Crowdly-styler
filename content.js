// Function to modify the page
function modifyPage() {
    // 1. Remove specific elements
    document.querySelectorAll('.success_status_axy06_46, .success_status_axy06_41, .question-status, ._logo_button_119mu_152, #crowdvns-menu').forEach(el => el.remove());

    // 2. Modify the text content of all elements containing '•'
    document.querySelectorAll('*').forEach(el => {
        if (el.childNodes.length) {
            el.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('•')) {
                    node.textContent = node.textContent.replace(/•/g, '•');
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
        answer.style.animation = '';
        answer.style.color = '#ffffff';
    });

    // 5. Apply styles to div elements with class 'rl' and 'progress'
    document.querySelectorAll('div.rl.progress').forEach(div => {
        div.style.opacity = '0%';
    });

    // 6. Remove emoji '' and '' throughout the page
    document.querySelectorAll('*').forEach(el => {
        if (el.childNodes.length) {
            el.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.textContent = node.textContent.replace(//g, '').replace(//g, '');
                }
            });
        }
    });

    // 7. Modify Shadow DOM if present
    document.querySelectorAll('*').forEach(el => {
        if (el.shadowRoot) {
            el.shadowRoot.querySelectorAll('.success_status_axy06_46, .success_status_axy06_41, .question-status, ._logo_button_119mu_152, #crowdvns-menu').forEach(div => div.remove());

            el.shadowRoot.querySelectorAll('._button_axy06_1').forEach(button => {
                button.style.background = '#ffffff';
                button.style.color = '#ffffff';
                button.style.width = '51%';
            });

            el.shadowRoot.querySelectorAll('.ai-answer').forEach(answer => {
                answer.style.background = '#e7f3f5';
                answer.style.animation = '';
                answer.style.color = '#ffffff';
            });

            el.shadowRoot.querySelectorAll('*').forEach(shadowEl => {
                if (shadowEl.childNodes.length) {
                    shadowEl.childNodes.forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE) {
                            node.textContent = node.textContent.replace(//g, '').replace(//g, '');
                        }
                    });
                }
            });
        }
    });

    // 8. Modify the color of images inside _logo_button_119mu_152
    document.querySelectorAll('._logo_button_119mu_152 img').forEach(img => {
        img.style.filter = 'invert(54%) sepia(87%) saturate(517%) hue-rotate(149deg) brightness(94%) contrast(90%)';
    });

    // 9. Apply background color to .que .info if #crowdly_hidden is visible
    const crowdlyHidden = document.getElementById('crowdly_hidden');
    if (crowdlyHidden && !crowdlyHidden.classList.contains('hidden')) {
        document.querySelectorAll('.que .info').forEach(info => {
            info.style.backgroundColor = '#ffffff';
        });
    }

    // 10. Comment out '--progress:' style properties
    const elements = document.querySelectorAll('[class^="r"]');
    elements.forEach(element => {
        let style = element.getAttribute('style');
        if (style && style.includes('--progress:')) {
            if (!style.includes('/* --progress:')) {
                const regex = /(--progress:\s*[^;]+)/;
                const match = style.match(regex);
                if (match) {
                    const progressStyle = match[1];
                    style = style.replace(progressStyle, `/* ${progressStyle} */`);
                    element.setAttribute('style', style);
                }
            }
        }
    });

    // Set opacity of #crowdvns-logo to 0 and z-index of ._wrapper_ckrc5_20 to -9999
    const crowdvnsLogo = document.getElementById('crowdvns-logo');
    if (crowdvnsLogo) {
        crowdvnsLogo.style.opacity = '0';
    }
    document.querySelectorAll('._wrapper_ckrc5_20').forEach(wrapper => {
        wrapper.style.zIndex = '-9999';
    });
}

// Execute modifications after the page has fully loaded
window.onload = function() {
    modifyPage();

    // Observe DOM changes
    const observer = new MutationObserver(modifyPage);
    observer.observe(document.body, { childList: true, subtree: true });
};
