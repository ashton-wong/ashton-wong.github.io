document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.indicator').forEach(indicator => {
    indicator.addEventListener('click', function () {
        document.querySelector(this.getAttribute('data-target')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const indicators = document.querySelectorAll('.indicator');
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
});
