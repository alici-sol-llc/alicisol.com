// Dynamically set navigation margin based on header height
function setNavMargin() {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
    document.body.classList.add('header-measured');
}

// Set on load and resize
window.addEventListener('load', setNavMargin);
window.addEventListener('resize', setNavMargin);