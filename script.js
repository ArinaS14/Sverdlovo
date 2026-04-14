// Gallery images array
const galleryImages = [
    'images/glavin.jpg',
    'images/park1.jpg',
    'images/building.jpg',
    'images/interior1.jpg',
    'images/interior2.jpg',
    'images/park1.jpg'
];

let currentImageIndex = 0;
let currentSlide = 0;
let currentPlanSlide = 0;
let slideInterval;

// Hero slider
function changeSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    slides[currentSlide].classList.remove('active');

    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add('active');
}

// Auto slide
function startAutoSlide() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 6000);
}

// Open modal
function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const counter = document.getElementById('modalCounter');

    modal.style.display = 'block';
    modalImg.src = galleryImages[currentImageIndex];
    counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Change image in modal
function changeModalImage(direction) {
    if (isPlanModal) {
        currentImageIndex += direction;
        if (currentImageIndex < 0) {
            currentImageIndex = planImages.length - 1;
        } else if (currentImageIndex >= planImages.length) {
            currentImageIndex = 0;
        }

        const modalImg = document.getElementById('modalImage');
        const counter = document.getElementById('modalCounter');
        modalImg.src = planImages[currentImageIndex];
        counter.textContent = `${currentImageIndex + 1} / ${planImages.length}`;
    } else {
        currentImageIndex += direction;
        if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        } else if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        }

        const modalImg = document.getElementById('modalImage');
        const counter = document.getElementById('modalCounter');
        modalImg.src = galleryImages[currentImageIndex];
        counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    }
}

// Close modal on click outside
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('imageModal');
    if (modal.style.display === 'block') {
        if (event.key === 'Escape') {
            closeModal();
        } else if (event.key === 'ArrowLeft') {
            changeModalImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeModalImage(1);
        }
    }
});

// Plans carousel
function changePlan(direction) {
    const slides = document.querySelectorAll('.plan-slide');
    const dots = document.querySelectorAll('.dot');

    slides[currentPlanSlide].classList.remove('active');
    dots[currentPlanSlide].classList.remove('active');

    currentPlanSlide += direction;
    if (currentPlanSlide < 0) {
        currentPlanSlide = slides.length - 1;
    } else if (currentPlanSlide >= slides.length) {
        currentPlanSlide = 0;
    }

    slides[currentPlanSlide].classList.add('active');
    dots[currentPlanSlide].classList.add('active');
}

function currentPlan(index) {
    const slides = document.querySelectorAll('.plan-slide');
    const dots = document.querySelectorAll('.dot');

    slides[currentPlanSlide].classList.remove('active');
    dots[currentPlanSlide].classList.remove('active');

    currentPlanSlide = index;

    slides[currentPlanSlide].classList.add('active');
    dots[currentPlanSlide].classList.add('active');
}

// Plans modal
const planImages = [
    'images/plan1.jpg',
    'images/plan2.jpg',
    'images/plan3.jpg'
];

let isPlanModal = false;

function openPlanModal(index) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const counter = document.getElementById('modalCounter');

    isPlanModal = true;
    currentImageIndex = index;
    modal.style.display = 'block';
    modalImg.src = planImages[currentImageIndex];
    counter.textContent = `${currentImageIndex + 1} / ${planImages.length}`;
    document.body.style.overflow = 'hidden';
}

// Update changeModalImage to work with plan images
const originalChangeModalImage = changeModalImage;
function changeModalImage(direction) {
    if (isPlanModal) {
        currentImageIndex += direction;
        if (currentImageIndex < 0) {
            currentImageIndex = planImages.length - 1;
        } else if (currentImageIndex >= planImages.length) {
            currentImageIndex = 0;
        }

        const modalImg = document.getElementById('modalImage');
        const counter = document.getElementById('modalCounter');
        modalImg.src = planImages[currentImageIndex];
        counter.textContent = `${currentImageIndex + 1} / ${planImages.length}`;
    } else {
        currentImageIndex += direction;
        if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        } else if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        }

        const modalImg = document.getElementById('modalImage');
        const counter = document.getElementById('modalCounter');
        modalImg.src = galleryImages[currentImageIndex];
        counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    }
}

// Update closeModal to reset flag
const originalCloseModal = closeModal;
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    isPlanModal = false;
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 95;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.background = 'rgba(15, 15, 15, 0.98)';
    } else {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
    }

    lastScroll = currentScroll;
});

// Parallax effect for hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSlides = document.querySelectorAll('.hero-slide');
    heroSlides.forEach(slide => {
        slide.style.transform = `translateY(${scrolled * 0.4}px)`;
    });
});

// Animate on scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease forwards';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Start hero slider
    startAutoSlide();

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.spec-category, .gallery-item, .plan-card, .feature-item, .location-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Add smooth reveal for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}

function closeMobileMenu() {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    nav.classList.remove('active');
    toggle.classList.remove('active');
}
