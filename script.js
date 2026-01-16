document.addEventListener('DOMContentLoaded', () => {
    
    // Rolagem Suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if(target){
                // Calcula a posição para rolar
                // 150px é a compensação aproximada do Header Fixo no Mobile que agora é mais alto
                const headerOffset = window.innerWidth <= 768 ? 150 : 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});