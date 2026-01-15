document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', () => {
        // Alterna a exibição do menu
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
            // Atualizei para verde escuro com transparência
            nav.style.backgroundColor = 'rgba(0, 95, 86, 0.95)'; 
            nav.style.position = 'absolute';
            nav.style.top = '70px';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.padding = '20px';
            nav.style.textAlign = 'center';
            nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        }
    });

    // Rolagem Suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Fecha o menu mobile se estiver aberto ao clicar
                if (window.innerWidth <= 768) {
                    nav.style.display = 'none';
                }
            }
        });
    });
});