// ---------- Ovládání hamburger menu ----------
// Získání DOM elementů pro menu
const burgerMenu = document.querySelector('.burger-menu'); // Tlačítko hamburger menu
const navLinks = document.querySelector('.nav-links'); // Kontejner s navigačními odkazy
const headerLine = document.querySelector('.lines-header'); // Header element pro posun při otevření menu

// Přidání click event listeneru na hamburger menu
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Přepne třídu 'active' pro zobrazení/skrytí menu
    burgerMenu.classList.toggle('open'); // Přepne vzhled hamburger ikony
    headerLine.classList.toggle('shifted-menu'); // Posune header při otevřeném menu
});

// ---------- Ovládání vyhledávacího pole na mobilech ----------
const searchToggle = document.querySelector('.search-toggle');
const searchMobile = document.querySelector('.search-mobile');

searchToggle.addEventListener('click', () => {
    searchMobile.classList.toggle('active');
    headerLine.classList.toggle('shifted-search');
});

// ---------- Komentáře ----------
const commentForm = document.querySelector('.comment-form');
const commentsList = document.querySelector('.comments-list');

// Přidání event listeneru na odeslání formuláře - spustí se pouze pokud existují oba elementy
if (commentForm && commentsList) {
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Zabrání výchozímu chování formuláře (přesměrování stránky)
        
        // Získání vstupního pole a jeho hodnoty (text komentáře)
        const commentInput = commentForm.querySelector('.comment-input');
        const commentText = commentInput.value.trim(); // Odstranění mezer na začátku a konci
        
        // Pokud není komentář prázdný, vytvoří nový HTML element a vloží ho na začátek seznamu komentářů
        if (commentText) {
            const newComment = `
                <article class="comment">
                    <div class="comment-avatar">
                        <img src="https://picsum.photos/50/50?random=${Math.random()}" alt="User avatar">
                    </div>
                    <div class="comment-body">
                        <div class="comment-header">
                            <h3>Anonymous</h3>
                            <span class="comment-date">Právě teď</span>
                        </div>
                        <p>${commentText}</p>
                    </div>
                </article>
            `;
            
            // Vložení nového komentáře na začátek seznamu
            commentsList.insertAdjacentHTML('afterbegin', newComment);
            commentInput.value = ''; // Vyčištění vstupního pole
        }
    });
}