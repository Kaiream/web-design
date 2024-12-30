// ---------- Ovládání hamburger menu ----------
// Získání DOM elementů pro menu
const burgerMenu = document.querySelector('.burger-menu'); // Tlačítko hamburger menu
const navLinks = document.querySelector('.nav-links'); // Kontejner s navigačními odkazy
const headerLine = document.querySelector('.lines-header'); // Header element pro posun při otevření menu
const highContrast = document.querySelector('.contrast-toggle'); // Tlačítko pro změnu kontrastu

// Přidání click event listeneru na hamburger menu
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Přepne třídu active pro zobrazení/skrytí menu
    burgerMenu.classList.toggle('open'); // Přepne vzhled hamburger ikony
    headerLine.classList.toggle('shifted-menu'); // Posune header při otevřeném menu
    highContrast.classList.toggle('active'); // Zobrazí tlačítko pro změnu kontrastu
});

// ---------- Ovládání vyhledávacího pole na mobilech ----------
const searchToggle = document.querySelector('.search-toggle');
const searchMobile = document.querySelector('.search-mobile');

searchToggle.addEventListener('click', () => { // Přidání event listeneru na tlačítko pro zobrazení vyhledávacího pole
    searchMobile.classList.toggle('active'); // Přepne třídu active pro zobrazení/skrytí vyhledávacího pole
    headerLine.classList.toggle('shifted-search');  // Posune čáru při otevření vyhledávacího pole
});

highContrast.addEventListener('click', () => { // Přidání event listeneru na tlačítko pro změnu kontrastu
    document.body.classList.toggle('high-contrast'); // Přepne třídu high-contrast pro změnu kontrastu
});
// ********************************************************************************************************************
// ---------- Následuje pop-up objednání předplatného. Jedná se o funkci spíše pro zábavu, která může být ignorována ----------
let hasShownSubscription = false;
// Listener even, který sleduje scroll na stránce a zobrazí pop-up předplatného, pokud uživatel dosáhne 80% stránky
window.addEventListener('scroll', () => { 
    // Deklarace proměnných pro výpočet procentuálního scrollu
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight; // Výška okna prohlížeče
    const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100; // Výpočet procentuálního scrollu, 
    // vzorec vypočítá procento posouvání vydělením aktuální pozice posuování (scrollTop)
    // rozdílem mezi výškou dokumentu a výškou okna (docHeight - windowHeight)

    // Pokud uživatel dosáhne 80% stránky a pop-up ještě nebyl zobrazen, tak zobrazí popup
    if (scrollPercent >= 80 && !hasShownSubscription) {
        const subscriptionContainer = document.querySelector('.subscription-container');
        subscriptionContainer.style.display = 'block'; 
        hasShownSubscription = true;
    }
});
// Podobné zobrazení popupu při stiknutí tlačítek premium
const premiumButtons = document.querySelectorAll('.premium, .premium-button-footer'); // Tlačítko v navigaci a v patičce
premiumButtons.forEach(button => { // Přidání event listeneru na každé tlačítko
    button.addEventListener('click', (event) => { // Při kliknutí na tlačítko zobrazí popup
        event.preventDefault();
        showSubscriptionPopup();
    });
});

function showSubscriptionPopup() { // Funkce pro zobrazení popupu (stejná jako v ifu nahoře)
    const subscriptionContainer = document.querySelector('.subscription-container');
    subscriptionContainer.style.display = 'block';
    hasShownSubscription = true;
}

document.querySelector('.close-button').addEventListener('click', () => { // Přidání event listeneru na tlačítko zavření
    document.querySelector('.subscription-container').style.display = 'none'; // Při kliknutí na tlačítko zavře popup
});