const freeGamesImg = document.querySelector('.free-games-img');
const meeurhaApp = document.querySelector('.meeurha-com-img');
const palmerusEs = document.querySelector('.palmerus-es-img');
const calendarAppImg = document.querySelector('.calendar-app-img');
const journalAppImg = document.querySelector('.journal-app-img');
const lazerwebCursoImg = document.querySelector('.lazerweb-curso-img');
const weatherAppImg = document.querySelector('.weather-app-img');
const gifExpertAppImg = document.querySelector('.gif-expert-app-img');
const todoAppImg = document.querySelector('.todo-app-img');
const redmondLawImg = document.querySelector('.redmond-law-img');
const fontanBalestraImg = document.querySelector('.fontan-balestra-img');
const legaldocImg = document.querySelector('.legaldoc-img');
const emiumiAppImg = document.querySelector('.emiumi-app-img');
const ialfinanzasImg = document.querySelector('.ialfinanzas-img');
const apartamentoslapalmaImg = document.querySelector('.apartamentoslapalma-img');
const densoTechnologyImg = document.querySelector('.denso-technology-img');


document.addEventListener('DOMContentLoaded', () => {
    changeImgs();
    initProjectImageTilt();
});

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
        redmondLawImg.src = '../assets/images/redmond-law-responsive.webp';
        fontanBalestraImg.src = '../assets/images/fontan-balestra-responsive.webp';
        legaldocImg.src = '../assets/images/legaldoc-responsive.webp';
        emiumiAppImg.src = '../assets/images/emiumi-app-responsive.webp';
        ialfinanzasImg.src = '../assets/images/ialfinanzas-responsive.webp';
        apartamentoslapalmaImg.src = '../assets/images/apartamentoslapalma-responsive.webp';
        densoTechnologyImg.src = '../assets/images/denso-technology-responsive.webp';
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
        redmondLawImg.src = '../assets/images/redmond-law.webp';
        fontanBalestraImg.src = '../assets/images/fontan-balestra.webp';
        legaldocImg.src = '../assets/images/legaldoc.webp';
        emiumiAppImg.src = '../assets/images/emiumi-app.webp';
        ialfinanzasImg.src = '../assets/images/ialfinanzas.webp';
        apartamentoslapalmaImg.src = '../assets/images/apartamentoslapalma.webp';
        densoTechnologyImg.src = '../assets/images/denso-technology.webp';
    }

    const copyrightYear = new Date().getFullYear();
    const copyrightYearText = document.getElementById('copyright-year');
    copyrightYearText.textContent = copyrightYear;
}

// Tilt effect for .project .project-img (same as home)
function initProjectImageTilt(){
    if(!window.matchMedia('(hover: hover) and (pointer: fine)').matches){
        return;
    }

    const projectImages = document.querySelectorAll('.project .project-img');
    projectImages.forEach((img) => {
        img.style.transformStyle = 'preserve-3d';
        img.style.willChange = 'transform';
        img.style.transition = 'transform 300ms ease-out';

        img.addEventListener('mousemove', (e) => {
            const el = e.currentTarget;
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xRotation = ((y - rect.height / 2) / rect.height) * -10;
            const yRotation = ((x - rect.width / 2) / rect.width) * 10;

            el.style.transform = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });

        img.addEventListener('mouseleave', (e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}