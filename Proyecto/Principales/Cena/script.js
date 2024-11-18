function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}


document.addEventListener('click', (event) => {
    const menu = document.getElementById('dropdown-menu');
    if (!event.target.closest('.menu-container') && menu.style.display === 'block') {
        menu.style.display = 'none';
    }
});