const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    if (!section.classList.contains('hero')) {
        section.classList.add('fade-in-section');
        observer.observe(section);
    }
});
