const root = document.documentElement;
const btn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

function aplicarTema(oscuro) {
    root.classList.toggle('dark', oscuro);
    icon.classList.toggle('fa-moon', oscuro);
    icon.classList.toggle('fa-sun', !oscuro);
    btn.setAttribute('aria-pressed', oscuro);
    btn.setAttribute('aria-label', oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}

let guardado = false;
try { guardado = localStorage.getItem('tema') === 'dark'; } catch (e) {}
aplicarTema(guardado);

btn.addEventListener('click', () => {
    const oscuro = !root.classList.contains('dark');
    aplicarTema(oscuro);
    try { localStorage.setItem('tema', oscuro ? 'dark' : 'light'); } catch (e) {}
});