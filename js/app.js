const navbar = document.querySelector('.navbar');
const navbarContainer = document.querySelector('.navbar-container');
const freeGamesImg = document.querySelector('.free-games-img');
const weatherAppImg = document.querySelector('.weather-app-img');
const todoAppImg = document.querySelector('.todo-app-img');
const gifExpertAppImg = document.querySelector('.gif-expert-app-generator-img');

document.addEventListener('DOMContentLoaded', () => {
    responsiveValidation();
    scrollValidation();
    const copyrightYear = new Date().getFullYear();
    const copyrightYearText = document.getElementById('copyright-year');
    copyrightYearText.textContent = copyrightYear;
});

document.addEventListener('scroll', scrollValidation);


function scrollValidation(){
    if(window.matchMedia('(max-width: 991px)').matches){
        return;
    }

    if(window.scrollY > 99){
        navbar.style.backgroundColor = '#1B1B1B';
    } else if(window.scrollY < 99){
        navbar.style.backgroundColor = 'transparent';
    }
}

function responsiveValidation(){
    if(window.matchMedia('(max-width: 1400px)').matches){
        navbarContainer.classList.replace('container', 'container-fluid');
        navbarContainer.classList.add('px-3');
    }
    
    if(window.matchMedia('(max-width: 991px)').matches){
        const links = document.querySelectorAll('.navbar a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.navbar-toggler').click();
            })
        })
        navbar.style.backgroundColor = '#1B1B1B';
    }

    changeImgs();
}

function changeImgs(){
    if(window.matchMedia('(max-width: 767px)').matches){
        freeGamesImg.src = '../assets/images/free-games-app-responsive.webp';
        weatherAppImg.src = '../assets/images/weather-app-responsive.webp';
        todoAppImg.src = '../assets/images/todo-app-responsive.webp';
        gifExpertAppImg.src = '../assets/images/gif-expert-app-responsive.webp';
    } else {
        freeGamesImg.src = '../assets/images/free-games-app.webp';
        weatherAppImg.src = '../assets/images/weather-app.webp';
        todoAppImg.src = '../assets/images/todo-app.webp';
        gifExpertAppImg.src = '../assets/images/gif-expert-app.webp';
    }
}

// CONTACT FORM (EMAIL JS);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '#4062bb';
    })
    input.addEventListener('blur', () => {
        if(input.value !== ''){
            input.style.borderColor = '#4062bb';
        } else {
            input.style.borderColor = 'rgb(111, 111, 111)';
        }
    })
})

const textarea = document.querySelector('textarea');
textarea.addEventListener('focus', () => {
    textarea.style.borderColor = '#4062bb';
})
textarea.addEventListener('blur', () => {
    if(textarea.value !== ''){
        textarea.style.borderColor = '#4062bb';
    } else{
        textarea.style.borderColor = 'rgb(111, 111, 111)';
    }
})

const select = document.querySelector('select');
select.addEventListener('focus', () => {
    select.style.borderColor = '#4062bb';
})
select.addEventListener('blur', () => {
    if(select.value !== ''){
        select.style.borderColor = '#4062bb';
    } else{
        select.style.borderColor = 'rgb(111, 111, 111)';
    }
})

function throwAlert(type, msg){
    const alertsContainer = document.querySelector('.alerts-container');
    const isAlert = document.querySelector('.alert');
    const wspBtn = document.getElementById('whatsapp-fixed-btn');

    if(isAlert){
        return;
    }

    wspBtn.style.visibility = 'hidden';
    const alert = document.createElement('div');
    alert.classList.add('alert', `alert-${type}`, 'fade', 'show');
    const p = document.createElement('p');
    p.classList.add('text-center', 'container', 'poppins-font');
    p.textContent = msg;
    alert.appendChild(p);
    alertsContainer.appendChild(alert);
    setTimeout(() => {
        alert.classList.add('animation-eliminate-alert');
        setTimeout(() => {
            alert.remove();
            wspBtn.style.visibility = 'visible';
        }, 400)
    }, 3000)
}

const submitFormBtn = document.querySelector('.contact-form input[type=submit]');
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const htmlTag = document.querySelector('html');

    htmlTag.lang === 'es' ? submitFormBtn.value = 'Enviando...' : submitFormBtn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_2sg6jsj';

    emailjs.sendForm(serviceID, templateID, e.target)
    .then(() => {
        let msg;
        htmlTag.lang === 'es' ? msg = 'Mail enviado correctamente, te responderé a la brevedad!' : msg = 'Email sent successfully, I will answer you as soon as possible!';
        htmlTag.lang === 'es' ? submitFormBtn.value = 'Enviar Mail' : submitFormBtn.value = 'Send Email';
        throwAlert('success', msg);
        form.reset();
        inputs.forEach(input => {
            input.style.borderColor = 'rgb(111, 111, 111)';
        })
        textarea.style.borderColor = 'rgb(111, 111, 111)';
        select.style.borderColor = 'rgb(111, 111, 111)';
    }, () => {
        let errorMsg;
        htmlTag.lang === 'es' ? errorMsg = 'No se pudo enviar el mail, intenta contactarme por otro medio!' : errorMsg = 'Email could not be sent, try to contact me by another means!'
        htmlTag.lang === 'es' ? submitFormBtn.value = 'Enviar Mail' : submitFormBtn.value = 'Send Email';
        throwAlert('danger', errorMsg);
    })
})

