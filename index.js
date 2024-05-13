document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector('.cards-container');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const sortBtn = document.getElementById('sortBtn');


    function shuffleCards() {
        for (let i = cardsContainer.children.length; i >= 0; i--) {
            cardsContainer.appendChild(cardsContainer.children[Math.random() * i | 0]);
        }
    }

    function sortCards() {
        Array.from(cardsContainer.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(card => cardsContainer.appendChild(card));
    }

    shuffleBtn.addEventListener('click', shuffleCards);
    sortBtn.addEventListener('click', sortCards);
});
