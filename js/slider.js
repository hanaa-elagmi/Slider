var imgs = Array.from(document.querySelectorAll('.item img'));
var backgroundlight = document.querySelector('.background-light');
var boxItem = document.querySelector('.box-item');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var close = document.getElementById('close');
var currentIndex = 0;


for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', OpenSlider);

}
close.addEventListener('click', CloseSlider);
next.addEventListener('click', nextSlider);
prev.addEventListener('click', prevSlider);

function OpenSlider(e) {
    backgroundlight.style.display = 'flex';
    var currentsrc = e.target.src;
    boxItem.style.backgroundImage = `url(${currentsrc})`;
    currentIndex = imgs.indexOf(e.target);

}


function CloseSlider() {
    backgroundlight.style.display = 'none';
}


function nextSlider(e) {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }

    currentsrc = imgs[currentIndex].src;
    boxItem.style.backgroundImage = `url(${currentsrc})`;


}

function prevSlider(e) {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }

    currentsrc = imgs[currentIndex].src;
    boxItem.style.backgroundImage = `url(${currentsrc})`;


}

//3shan a4ghal elkeyboard

document.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowRight') {
        nextSlider();
    }
    else if (e.key == 'ArrowLeft') {
        prevSlider();
    }
    else if (e.key == 'Escape') {
        CloseSlider();
    }
})