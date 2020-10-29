const suma = document.querySelector('.row1');
const procentas = document.querySelector('.row2');
const arbatpinigiai = document.querySelector('.row3');
const bendra = document.querySelector('.row4');
const button = document.querySelector('.button');

button.addEventListener("click", function () {

    if (suma.value === "" && procentas.value === "") {
        alert('ėėė kū čia dara, trūkst duomenū')
    } else {
        arbatpinigiai.value = (suma.value * procentas.value) / 100;
        bendra.value = parseInt(arbatpinigiai.value) + parseInt(suma.value);
        document.querySelectorAll('.row3').disabled = false;
        document.querySelectorAll('.row4').disabled = false;

    }

})