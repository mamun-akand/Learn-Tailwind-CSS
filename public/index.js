const menuBar = document.querySelector("#menuBar");
const menuItems = document.querySelector("#menuItems");

menuBar.addEventListener('click', () => {
    if (menuItems.classList.contains('hidden')) {
        menuItems.classList.remove('hidden');
    } else {
        menuItems.classList.add('hidden');
    }
});