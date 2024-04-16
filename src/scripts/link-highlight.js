const navLinks = document.querySelectorAll('.nav-menu a');
const highlight = document.createElement('div');
highlight.classList.add('highlight');
document.body.append(highlight);
function highlightLink() {
    const linkCoords = document.querySelector(this.getAttribute('href')).getBoundingClientRect();
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX,
    };
    highlight.style.opacity = 1;
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.top = `${coords.top}px`;
    highlight.style.left = `${coords.left}px`;
    this.addEventListener('mouseleave', () => highlight.style.opacity = 0.7);
}
navLinks.forEach((a) => a.addEventListener('mouseenter', highlightLink));