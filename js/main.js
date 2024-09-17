var h1 = document.querySelector('h1');
h1.addEventListener('click', function () {
    //alert('Hiiiiiiiiiii');
    SayingHello('Ghala');
})


function SayingHello(name) {
    alert('hello' + name);
}
var img = document.querySelector('img');

document.addEventListener('mousemove', function (e) {


    img.style.left = e.clientX + 'px';
    img.style.top = e.clientY + 'px';
});


var body = document.querySelector('body');
body.addEventListener('click', function () {

    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);

    body.style.backgroundColor = `rgb(${r},${g},${b})`;
});