document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({ duration: 800, once: true });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animated counters
    function animateCounter(id, end, duration) {
        let start = 0;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        const element = document.getElementById(id);
        let timer = setInterval(() => {
            start += increment;
            element.textContent = start;
            if (start === end) clearInterval(timer);
        }, stepTime);
    }
    animateCounter('pdf-count', 1000, 2000);
    animateCounter('hours-count', 100, 2000);
    animateCounter('templates-count', 10, 2000);

    // FAQ toggle functionality
    document.querySelectorAll('.faq-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            answer.classList.toggle('hidden');
        });
    });

    // Sticky CTA banner close functionality
    document.querySelector('.cta-close').addEventListener('click', () => {
        document.querySelector('.cta-banner').style.display = 'none';
    });
});