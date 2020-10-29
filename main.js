const suma = document.querySelector('.row1').innerText;
const procentas = document.querySelector('.row2').innerText;
const arbatpinigiai = document.querySelector('.row3').innerText;
const bendra = document.querySelector('.row4').innerText;
const button = document.querySelector('.button');

button.addEventListener("click", function () {

    if (suma === "" && procentas === "") {
        alert('ėėė kū čia dara, trūkst duomenū')
    } else {
        arbatpinigiai = (suma * procentas) / 100;
        bendra = arbatpinigiai + suma;
        document.querySelectorAll('.row3').disabled = false;
        document.querySelectorAll('.row4').disabled = false;

    }

})