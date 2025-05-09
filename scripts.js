document.querySelectorAll('a[href^="#"], .indicator').forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href') || this.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;

        if (targetElement) {
            const targetPosition = targetElement.offsetTop - headerHeight; // Adjust for header height
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const indicators = document.querySelectorAll('.indicator');
    const navLinks = document.querySelectorAll('nav ul li a');
    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - section.clientHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    indicators.forEach((indicator) => {
        indicator.classList.remove('active');
        if (indicator.getAttribute('data-target') === `#${currentSection}`) {
            indicator.classList.add('active');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const text = "Hi, I'm Ashton Wong. Welcome To My Site!";
    const typedTextElement = document.getElementById('typed-text');
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typedTextElement.textContent += text[index];
            index++;
            setTimeout(typeText, 75); // Adjust typing speed here
        }
    }

    typeText();

    // Set initial active states for header and side indicators
    const navLinks = document.querySelectorAll('nav ul li a');
    const indicators = document.querySelectorAll('.indicator');

    navLinks.forEach(link => link.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    document.querySelector('nav ul li a[data-section="home"]').classList.add('active');
    document.querySelector('.indicator[data-target="#home"]').classList.add('active');
});
