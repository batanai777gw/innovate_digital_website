let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');

function moveNext() {
    let items = document.querySelectorAll('.item');
    slide.appendChild(items[0]); // Move first to the end
}

function movePrev() {
    let items = document.querySelectorAll('.item');
    slide.prepend(items[items.length - 1]); // Move last to the start
}

// Button click events
next.addEventListener('click', moveNext);
prev.addEventListener('click', movePrev);

// Auto slide every 8 seconds
setInterval(moveNext, 8000);
