
   function Calculate(){

    var dvapat = document.getElementById('dvapat').value;
    var nasobok = 25;
    let vysledok = dvapat * nasobok;

    var dvanula = document.getElementById('dvanula').value;
    var nasobok = 20;
    var vysledok2 = dvanula * nasobok;

    var pat = document.getElementById('pat').value;
    var nasobok = 5;
    var vysledok3 = pat * nasobok;

   


    let spolu = document.getElementById('total');
     spolu = vysledok + vysledok2 + vysledok3;

     const input = spolu;
     const log = spolu;
     
     input.addEventListener('change', updateValue);
     
     function updateValue(e) {
       log.textContent = e.target.value;
     }

    console.log(vysledok, vysledok2, vysledok3);

    console.log(spolu);}