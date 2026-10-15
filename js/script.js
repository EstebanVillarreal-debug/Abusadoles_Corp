const root = document.documentElement;
const btn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

function applyTheme(dark) {
    root.classList.toggle('dark', dark);
    icon.classList.toggle('fa-moon', dark);
    icon.classList.toggle('fa-sun', !dark);
    btn.setAttribute('aria-pressed', dark);
    btn.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}

// Recuerda la última elección al recargar
let guardado = false;
try { guardado = localStorage.getItem('tema') === 'dark'; } catch (e) { }
applyTheme(guardado);

btn.addEventListener('click', () => {
    const dark = !root.classList.contains('dark');
    applyTheme(dark);
    try { localStorage.setItem('tema', dark ? 'dark' : 'light'); } catch (e) { }
});