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

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('typewriter')) {
        type();
    }
});


//------------------------------------------ABOUT-----------------------------------------------------

var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

function openTab(tabname) {

    tablinks.forEach(function(tablink) {
        tablink.classList.remove("active-link");
    });

    tabcontents.forEach(function(tabcontent) {
        tabcontent.classList.remove("active-tab");
    });

    document.querySelector(`.tab-links[data-tab="${tabname}"]`).classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}

//------------------------------------------SIDEMENU PHONE----------------------------------------------------

var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0"
}
function closemenu(){
    sidemenu.style.right = "-200px"
}

//----------------------------------------CONTACT FORM DETAILS-----------------------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbw1046SWfOEHLgh71vO-NpvBIQoF2oBiGAHLDGdN0rYnxSL3ozgiN8aobHw2qKMvZM8cQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
const dateTimeInput = document.getElementById("datetime")

form.addEventListener('submit', e => {
    e.preventDefault()
    const now = new Date()
    const dateTimeString = now.toISOString()
    dateTimeInput.value = dateTimeString
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent sucessfully !!"
            setTimeout(function(){
                msg.innerHTML = ""
            },1000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

//----------------  ---------------------------------------------------------------------------------------------

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
