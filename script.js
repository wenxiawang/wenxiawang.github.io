// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Update active link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (navToggle && navLinksContainer) {
        navToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Initialize charts
    initializePublicationsChart();
    initializeSkillsChart();

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactFormSubmission(this);
        });
    }

    // Add animation on scroll
    initializeScrollAnimations();
});

function initializePublicationsChart() {
    const ctx = document.getElementById('publicationsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Journal Articles', 'Conference Papers', 'Book Chapters', 'Under Review'],
            datasets: [{
                data: [8, 5, 2, 3],
                backgroundColor: [
                    '#3498db',
                    '#2ecc71',
                    '#e74c3c',
                    '#f39c12'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + ' publications';
                        }
                    }
                }
            },
            cutout: '60%'
        }
    });
}

function initializeSkillsChart() {
    const ctx = document.getElementById('skillsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Nursing Research',
                'Data Analysis',
                'Elderly Care',
                'Clinical Practice',
                'Technology Integration',
                'Academic Writing',
                'Project Management'
            ],
            datasets: [{
                label: 'Skill Level',
                data: [95, 85, 90, 88, 80, 92, 78],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: '#3498db',
                borderWidth: 2,
                pointBackgroundColor: '#3498db',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#3498db'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        stepSize: 20,
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function handleContactFormSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Simple validation
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all fields.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.research-card, .project-item, .publication-item, .timeline-item');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .research-card,
    .project-item,
    .publication-item,
    .timeline-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .research-card.animate-in,
    .project-item.animate-in,
    .publication-item.animate-in,
    .timeline-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-toggle {
        display: none;
        flex-direction: column;
        cursor: pointer;
    }

    .nav-toggle span {
        width: 25px;
        height: 3px;
        background: #333;
        margin: 3px 0;
        transition: 0.3s;
    }

    @media (max-width: 768px) {
        .nav-toggle {
            display: flex;
        }

        .nav-links {
            display: none;
            flex-direction: column;
            width: 100%;
            text-align: center;
            margin-top: 20px;
        }

        .nav-links.active {
            display: flex;
        }
    }
`;
document.head.appendChild(style);

// Typing animation for hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing animation on page load
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    setTimeout(() => {
        typeWriter(heroSubtitle, originalText, 150);
    }, 1000);
}
