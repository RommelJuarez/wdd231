document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".cards-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.2 }); 

    cards.forEach(card => observer.observe(card));
});
