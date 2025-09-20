function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav-links a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

/* ให้หัวข้อ section ค่อยๆ เฟดขึ้น */
sr.reveal('.section-title, .title, .title-certificate', { 
    origin: 'bottom', 
    distance: '40px', 
    delay: 100 
});

/* Profile */
sr.reveal('.section__pic-container', {});
sr.reveal('.section__text', { delay: 300 });

/* About */
sr.reveal('#about .experience-details-container', { interval: 200 });

/* Skills */
sr.reveal('#experience .experience-details-container', { interval: 200 });

/* Projects */
sr.reveal('#projects .details-container', { interval: 200 });

/* Activity */
sr.reveal('.activity-wrapper', { delay: 200 });

/* Certificate */
sr.reveal('.certificate-item', { interval: 200 });

/* Contact */
sr.reveal('.contact-info-upper-container', { delay: 200 });