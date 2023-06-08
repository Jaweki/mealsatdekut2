function rotateFrontCard() {
    const card = document.querySelector('.card');
    card.classList.add('rotateFront');
}

function rotateBackCard() {
    const card = document.querySelector('.card');
    // card.style.transform = 'rotateY(180deg)';
    card.classList.add('rotateBack');
}

function shift() { 
    const card = document.querySelector('.card');
    card.classList.remove('rotateFront');
}

function unshift() {
    const card = document.querySelector('.card');
    card.classList.remove('rotateBack');
}