// -----------------------------------------------HOME----------------------------------------------

const words = [
    "Artificial Intelligence", 
    "Machine Learning", 
    "Deep Learning", 
    "Natural Language Processing", 
    "Computer Vision", 
    "Data Science"
];

let wordIndex = 0;
let charIndex = 0;
let isRemoving = false;
let currentWord = '';
const typingSpeed = 150;
const delayBetweenWords = 1000;

function type() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;
    
    if (!isRemoving) {
        currentWord = words[wordIndex].substring(0, charIndex + 1);
        typewriterElement.textContent = currentWord;
        charIndex++;
        
        if (charIndex === words[wordIndex].length) {
            isRemoving = true;
            setTimeout(() => { type(); }, delayBetweenWords);
            return;
        }
    } else {
        typewriterElement.textContent = '';
        isRemoving = false;
        wordIndex++;
        if (wordIndex === words.length) {
            wordIndex = 0;
        }
        charIndex = 0;
        setTimeout(() => { type(); }, typingSpeed);
        return;
    }
    
    setTimeout(type, typingSpeed);
}

//------------------------------------------ABOUT-----------------------------------------------------

var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

function openTab(tabname) {
    if (!tabname) return;

    tablinks.forEach(function(tablink) {
        tablink.classList.remove("active-link");
    });

    tabcontents.forEach(function(tabcontent) {
        tabcontent.classList.remove("active-tab");
    });

    const activeTabLink = document.querySelector(`.tab-links[data-tab="${tabname}"]`);
    const activeTabContent = document.getElementById(tabname);

    if (activeTabLink) activeTabLink.classList.add("active-link");
    if (activeTabContent) activeTabContent.classList.add("active-tab");
}

//----------------------------------------CONTACT FORM DETAILS-----------------------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbw1046SWfOEHLgh71vO-NpvBIQoF2oBiGAHLDGdN0rYnxSL3ozgiN8aobHw2qKMvZM8cQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const dateTimeInput = document.getElementById("datetime");

// Navigation Variables
let lastScrollTop = 0;
const scrollThreshold = 100;

// Initialize all event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize typing animation
    if (document.getElementById('typewriter')) {
        type();
    }

    // Initialize form
    if (form) {
        // Clear form on page load
        form.reset();
        if (msg) msg.innerHTML = "";

        form.addEventListener('submit', handleFormSubmit);
    }

    // Initialize navigation
    const navRibbon = document.querySelector('.nav-ribbon');
    const navWrapper = document.querySelector('.nav-wrapper');
    const menuIcon = document.querySelector('.menu-icon');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelectorAll('.nav-links li');
    const scrollThreshold = 20;
    let lastScrollTop = 0;

    // Add animation delay to nav links
    navLinks.forEach((link, index) => {
        link.style.setProperty('--i', index);
    });

    // Menu toggle functionality
    if (menuIcon && navRibbon && closeBtn) {
        menuIcon.addEventListener('click', () => {
            navRibbon.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            navRibbon.classList.remove('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navRibbon.contains(e.target) && !menuIcon.contains(e.target)) {
                navRibbon.classList.remove('active');
            }
        });

        // Close menu when clicking a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navRibbon.classList.remove('active');
            });
        });
    }

    // Scroll behavior
    if (navRibbon && navWrapper) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            if (currentScroll > scrollThreshold) {
                if (currentScroll > lastScrollTop) {
                    // Scrolling down
                    navRibbon.classList.add('hidden');
                    navWrapper.classList.add('hidden');
                } else {
                    // Scrolling up
                    navRibbon.classList.add('hidden');
                    navWrapper.classList.add('hidden');
                }
            } else {
                // At the top
                navRibbon.classList.remove('hidden');
                navWrapper.classList.remove('hidden');
            }
            
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }, { passive: true });
    }

    // Initialize accordion if present
    const accordionButtons = document.querySelectorAll(".accordion-button");
    accordionButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");
            const content = button.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 15px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px 15px";
            }
        });
    });

    // Initialize accomplishment typewriter effect
    if (document.getElementById('accomplishment-typewriter')) {
        typeAccomplishment();
    }
});

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();

    const submitButton = form.querySelector('button');
    if (!submitButton) return;

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Capture current date and time
    if (dateTimeInput) {
        const now = new Date();
        dateTimeInput.value = now.toISOString();
    }

    // Submit form data
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            if (msg) {
                msg.innerHTML = "Message sent successfully!";
                msg.style.color = "#61b752";
                msg.classList.add("show");
            }
            form.reset();
        })
        .catch(error => {
            if (msg) {
                msg.innerHTML = "Error sending message. Please try again.";
                msg.style.color = "#ff0000";
                msg.classList.add("show");
            }
            console.error('Error!', error.message);
        })
        .finally(() => {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }
            if (msg) {
                setTimeout(() => {
                    msg.classList.remove("show");
                }, 3000);
            }
        });
}

// Accomplishment Page Typewriter Effect
const accomplishmentWords = [
    "Certifications",
    "Achievements"
];

let accomplishmentWordIndex = 0;
let accomplishmentCharIndex = 0;
let isRemovingAccomplishment = false;
let currentAccomplishmentWord = '';

function typeAccomplishment() {
    const typewriterElement = document.getElementById('accomplishment-typewriter');
    if (!typewriterElement) return;
    
    if (!isRemovingAccomplishment) {
        currentAccomplishmentWord = accomplishmentWords[accomplishmentWordIndex].substring(0, accomplishmentCharIndex + 1);
        typewriterElement.textContent = currentAccomplishmentWord;
        accomplishmentCharIndex++;
        
        if (accomplishmentCharIndex === accomplishmentWords[accomplishmentWordIndex].length) {
            isRemovingAccomplishment = true;
            setTimeout(() => { typeAccomplishment(); }, delayBetweenWords);
            return;
        }
    } else {
        currentAccomplishmentWord = accomplishmentWords[accomplishmentWordIndex].substring(0, accomplishmentCharIndex - 1);
        typewriterElement.textContent = currentAccomplishmentWord;
        accomplishmentCharIndex--;
        
        if (accomplishmentCharIndex === 0) {
            isRemovingAccomplishment = false;
            accomplishmentWordIndex++;
            if (accomplishmentWordIndex === accomplishmentWords.length) {
                accomplishmentWordIndex = 0;
            }
            setTimeout(() => { typeAccomplishment(); }, typingSpeed);
            return;
        }
    }
    
    setTimeout(typeAccomplishment, typingSpeed);
}
