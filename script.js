// Sneaker Color Switcher
const colorDots = document.querySelectorAll('.color-dot');
const sneakerImg = document.getElementById('sneaker-img');

colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const color = dot.dataset.color;
        sneakerImg.style.filter = `drop-shadow(0 20px 30px ${color}30)`;
        document.documentElement.style.setProperty('--secondary', color);
    });
});

// Scroll Animation
const featureCards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});