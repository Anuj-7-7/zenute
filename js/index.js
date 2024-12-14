document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.4
    });

    const animElements = document.querySelectorAll('.leftanim, .rightanim, .forwardanim, .etxt, .etxtn, .etxtne, .etxtnex');
    animElements.forEach(element => observer.observe(element));

    // Show products section by default on page load
    showSection('prods'); // Default to products section    
    
});

// Function to show the correct section and hide others
function showSection(sectionId) {
    // Hide all sections by setting their display to 'none'
    const sections = document.querySelectorAll('.servicon, .prodscon, .cliencon');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section by setting its display to 'flex'
    const targetSection = document.querySelector(`.${sectionId}con`);
    if (targetSection) {
        targetSection.style.display = 'flex';
    }

    // Highlight the active navbar item
    const navItems = document.querySelectorAll('.okay .tt');
    navItems.forEach(item => item.classList.remove('active'));
    const activeSection = document.querySelector(`.okay .${sectionId} .tt`);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}
