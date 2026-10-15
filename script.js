// 1. Dark Mode Theme tohirgoo
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// hereglegchiin umnuh songoltiig LocalStorage- aas shalgah
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark'); // sanah
    } else {
        themeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// 2. Veb achaalj duusah uyd Loader ustaj, Stagger Animation ehluulen
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const container = document.querySelector('.container');

    // baga zereg huleelt uusgej loader-iig goyor alga bolgoh
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            // .loaded class nemegdseneer CSS-iin daraalj garch ireh animation ajilan
            container.classList.add('loaded');
        }, 500);
    }, 500);
});