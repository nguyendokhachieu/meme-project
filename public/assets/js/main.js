const navBtn = document.getElementById('icon-bar');
const headerGroup = document.querySelector('.header-group');

let isToggled = false;
navBtn.addEventListener('click', () => {
    isToggled = !isToggled;
    if (isToggled) {
        headerGroup.setAttribute('style', 'display: flex');
    } else {
        headerGroup.setAttribute('style', 'display: none');
    }
});