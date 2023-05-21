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
