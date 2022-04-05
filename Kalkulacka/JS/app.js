const kratko = document.getElementById('kratkodobe');
const dlho = document.getElementById('dlhodobe');
const baldeti = document.getElementById('balik');
const prideti = document.getElementById('pripoistenie')
const btn = document.getElementById('btn');
const datumprec = document.getElementById('datum');

function prepnut() {
    if (kratko.checked === true) {

        baldeti.item(4).style.display = "none",
        baldeti.item(5).style.display = "none",
        baldeti.item(6).style.display = "none",

        prideti.item(3).style.display = "none",
        prideti.item(4).style.display = "none"

    } else if (dlho.checked === true) {
       datumprec.style.display = "none",
       $("input[type=date]").val(""),

        baldeti.item(1).style.display = "none",
        baldeti.item(2).style.display = "none",
        baldeti.item(3).style.display = "none",
        
        prideti.item(1).style.display = "none",
        prideti.item(2).style.display = "none"
    } else {
        datumprec.style.display = "flex"

        baldeti.item(1).style.display = "block",
        baldeti.item(2).style.display = "block",
        baldeti.item(3).style.display = "block",
        baldeti.item(4).style.display = "block",
        baldeti.item(5).style.display = "block",
        baldeti.item(6).style.display = "block",

        prideti.item(1).style.display = "block",
        prideti.item(2).style.display = "block",
        prideti.item(3).style.display = "block",
        prideti.item(4).style.display = "block"
    }
};prepnut();

function Dni() {
        dateI1 = document.getElementById("start").value;  
        dateI2 = document.getElementById("end").value;  
   
        date1 = new Date(dateI1);  
        date2 = new Date(dateI2);  
   
        time_difference = date2.getTime() - date1.getTime();   
        den = time_difference / (1000 * 60 * 60 * 24);    
};Dni(); 

btn.onclick = function displayBalik() {
   if (kratko.checked === true) {
    let balik = Number($("select#balik").val());
    let pripoistenie = Number($("select#pripoistenie").val());
    let osoby = Number($("select#osoby").val());

    let sucet = balik  * osoby * Number(den);
    let percento = (pripoistenie / 100) * sucet;
    let vysledok = sucet + percento;

    document.getElementById('vypocet').innerHTML = vysledok.toFixed(2) + "€";
       
    $("select#balik").change(displayBalik);
    $("select#pripoistenie").change(displayBalik);
    $("select#osoby").change(displayBalik);

   } else if (dlho.checked === true) {

    let balik = Number($("select#balik").val());
    let pripoistenie = Number($("select#pripoistenie").val());
    let osoby = Number($("select#osoby").val());

    let sucet = balik  * osoby;
    let percento = (pripoistenie / 100) * sucet;
    let vysledok = sucet + percento;

    document.getElementById('vypocet').innerHTML = vysledok.toFixed(2) + "€";
       
    $("select#balik").change(displayBalik);
    $("select#pripoistenie").change(displayBalik);
    $("select#osoby").change(displayBalik);
   }
};
