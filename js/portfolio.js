const freeGamesImg = document.querySelector('.free-games-img');
const meeurhaApp = document.querySelector('.meeurha-com-img');
const palmerusEs = document.querySelector('.palmerus-es-img');
const calendarAppImg = document.querySelector('.calendar-app-img');
const journalAppImg = document.querySelector('.journal-app-img');
const lazerwebCursoImg = document.querySelector('.lazerweb-curso-img');
const weatherAppImg = document.querySelector('.weather-app-img');
const gifExpertAppImg = document.querySelector('.gif-expert-app-img');
const todoAppImg = document.querySelector('.todo-app-img');

document.addEventListener('DOMContentLoaded', changeImgs);

function changeImgs(){
    if(window.matchMedia('(max-width: 767px)').matches){
        freeGamesImg.src = '../assets/images/free-games-app-responsive.webp';
        meeurhaApp.src = '../assets/images/meeurha-com-responsive.webp';
        palmerusEs.src = '../assets/images/palmerus-es-responsive.webp';
        journalAppImg.src = '../assets/images/journal-app-responsive.webp';
        calendarAppImg.src = '../assets/images/calendar-app-responsive.webp';
        lazerwebCursoImg.src = '../assets/images/lazerweb-curso-responsive.webp';
        weatherAppImg.src = '../assets/images/weather-app-responsive.webp';
        gifExpertAppImg.src = '../assets/images/gif-expert-app-responsive.webp';
        todoAppImg.src = '../assets/images/todo-app-responsive.webp';
    } else {
        freeGamesImg.src = '../assets/images/free-games-app.webp';
        meeurhaApp.src = '../assets/images/meeurha-com.webp';
        palmerusEs.src = '../assets/images/palmerus-es.webp';
        journalAppImg.src = '../assets/images/journal-app.webp';
        calendarAppImg.src = '../assets/images/calendar-app.webp';
        lazerwebCursoImg.src = '../assets/images/lazerweb-curso.webp';
        weatherAppImg.src = '../assets/images/weather-app.webp';
        gifExpertAppImg.src = '../assets/images/gif-expert-app.webp';
        todoAppImg.src = '../assets/images/todo-app.webp';
    }

    const copyrightYear = new Date().getFullYear();
    const copyrightYearText = document.getElementById('copyright-year');
    copyrightYearText.textContent = copyrightYear;
}