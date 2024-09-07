/* Funcion que lo que hace es que cuando la imagen de la section3_right_bottom aparece en el viewport se rote 180º*/

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
            } else {
                entry.target.classList.remove('in-viewport');
            }
        });
    });

    const img = document.querySelector('.section3_right_bottom img');
    if (img) {
        observer.observe(img);
    }
});

/*Funcion que nos permite aumentar el tamaño de una clase cuando pulsamos sobre ella*/

document.addEventListener('DOMContentLoaded', function () {
    const expandableDivs = document.querySelectorAll('.div-expandable');


    function handleClick(event) {
        expandableDivs.forEach(div => div.classList.remove('div-expanded'));
        event.currentTarget.classList.add('div-expanded');
    }

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.classList.remove('div-expanded');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
    });

    expandableDivs.forEach(div => {
        div.addEventListener('click', handleClick);
        observer.observe(div);
    });
});