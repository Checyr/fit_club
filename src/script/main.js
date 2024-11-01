// Função para aplicar a animação de deslizamento e escala aos elementos <p> ao carregar e ao rolar
function animateOnScroll() {
    const elements = document.querySelectorAll('p');
    
    elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Verifica se o elemento <p> está visível na área de visualização
        if (elementPosition < windowHeight - 50) {
            element.classList.add('visible'); // Adiciona a classe para animar
        }
    });
}

// Executa a função uma vez na carga da página, aplicando o efeito sem rolagem
window.addEventListener('load', animateOnScroll);

// Adiciona o event listener para a rolagem
window.addEventListener('scroll', animateOnScroll);