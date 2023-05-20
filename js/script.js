var i = 0;
var txt = 'Rian Hendra Saputra'
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text-position").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);

    }

}


typeWriter()

var sticky = document.getElementById('nav-sticky')
window.addEventListener('scroll', (e) => {
    let h = e.currentTarget.scrollY;
    console.log(h)
    if (h > 100) {
        sticky.style.top = '0px'
    } else if (h < 10) {
        sticky.style.top = '-150px'
    }

    muncul()
});




let elements = document.querySelectorAll('.elemen')

function muncul() {
    for (let i = 0; i < elements.length; i++) {
        let tinggiLayar = window.innerHeight;

        let jarakAtasElemen = elements[i].getBoundingClientRect().top;
        let ukuranScroll = 150;

        if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
            elements[i].classList.add('tampil');
        } else {
            elements[i].classList.remove('tampil');
        }
    }
}