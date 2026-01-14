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
            nav.style.backgroundColor = '#0e2a47';
            nav.style.position = 'absolute';
            nav.style.top = '70px';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.padding = '20px';
            nav.style.textAlign = 'center';
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
            }
        });
    });
});