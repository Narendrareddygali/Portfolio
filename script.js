// ===== THEME TOGGLE =====
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

const setLightMode = () => {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
};

const setDarkMode = () => {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
};

// Check local storage for persistent theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    setDarkMode();
} else {
    // Default to light white mode
    setLightMode();
}

// Simple fast transition click event
themeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        setLightMode();
        localStorage.setItem('theme', 'light');
    } else {
        setDarkMode();
        localStorage.setItem('theme', 'dark');
    }
});

// ===== Scroll Reveal Anim =====
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = { rootMargin: "0px 0px -40px 0px", threshold: 0.05 };

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => revealOnScroll.observe(el));

// ===== Typewriter Effect =====
const roles = ["Full Stack Developer", "MERN Stack Developer", "Responsive Web Developer"];
let roleIndex = 0;
let charIndex = roles[0].length;
let isDeleting = true;
const typingTextElement = document.querySelector('.typing-text');

function typeEffect() {
    if(!typingTextElement) return;

    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; // Pause at the end of typing
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400; // Pause before typing the next phrase
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect firmly after a 2-second initial pause so the hero text holds strong on load
setTimeout(typeEffect, 2000);

// ===== NAVBAR SCROLL BACKGROUND =====
const navbarElement = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbarElement.classList.add('scrolled');
    } else {
        navbarElement.classList.remove('scrolled');
    }
});

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== CONTACT FORM SUBMISSION (FORMSPREE) =====
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // UI Loading State
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> SENDING...';
        formStatus.className = 'form-status';
        formStatus.textContent = '';

        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    formStatus.textContent = data.errors.map(error => error.message).join(', ');
                } else {
                    formStatus.textContent = 'Oops! There was a problem submitting your form.';
                }
                formStatus.className = 'form-status error';
            }
        } catch (error) {
            formStatus.textContent = 'Oops! There was a problem submitting your form.';
            formStatus.className = 'form-status error';
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane" style="margin-right: 8px;"></i> SEND INQUIRY';
        }
    });
}
