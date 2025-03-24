// Lista de eventos
const eventos = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '12/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '12/01',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '18/05',
        time: '19:00',
        location: 'Área Esportiva do Inatel',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '04/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

// Função para renderizar os cards de eventos
function renderCards() {
    const container = document.querySelector('.noticias');
    container.innerHTML = '';

    eventos.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p><span class="material-icons-outlined">event</span> ${event.date} às ${event.time}
                <span class="material-icons-outlined">pin_drop</span> ${event.location}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função para criar os cards do carrossel
const carousel = document.querySelector('.carousel');

function createCarouselCards() {
    eventos.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p><span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}</p>
            </div>
        `;
        carousel.appendChild(card);
    });
}

// Controle do carrossel
let index = 0;

function nextCard() {
    index = (index + 1) % eventos.length;
    updateCarousel();
}

function prevCard() {
    index = (index - 1 + eventos.length) % eventos.length;
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Adicionando interatividade ao carrossel
document.getElementById('nextBtn').addEventListener('click', nextCard);
document.getElementById('prevBtn').addEventListener('click', prevCard);

// Arrastar no celular
let startX;
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextCard();
    if (endX - startX > 50) prevCard();
});

// Inicializando o carrossel e os cards de eventos
createCarouselCards();

// Inicialização do menu de temas e controle
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeMenu = document.getElementById("themeMenu");
    const themeButtons = document.querySelectorAll(".theme-btn");

    // Carregar tema salvo
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.setAttribute("data-theme", savedTheme);
    }

    // Mostrar/esconder menu de temas
    themeToggle.addEventListener("click", () => {
        themeMenu.classList.toggle("hidden");
    });

    // Alterar tema e salvar no localStorage
    themeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const selectedTheme = e.target.getAttribute("data-theme");
            document.body.setAttribute("data-theme", selectedTheme);
            localStorage.setItem("theme", selectedTheme);
            themeMenu.classList.add("hidden");
        });
    });
});

// Renderiza os cards na área de notícias
renderCards();

// Controle do menu hamburguer
const hamburgerMenu = document.getElementById("hamburgerMenu");
const menu = document.getElementById("menu");

hamburgerMenu.addEventListener("click", function() {
    menu.classList.toggle("show");
});
