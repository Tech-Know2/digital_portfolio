function createNavbar() {
    const navbar = document.createElement('ul');
    navbar.className = 'nav-list'; // Add a class to the ul element
    navbar.innerHTML = `
        <li><a class="active" href="/index.html">Home</a></li>
        <li><a href="/aboutme.html">About Me</a></li>
        <li><a href="#contact">Projects</a></li>
        <li><a href="#about">Languages</a></li>
        <li><a href="#about">Certifications</a></li>
    `;
    
    document.body.prepend(navbar);
}

window.addEventListener('DOMContentLoaded', createNavbar);
