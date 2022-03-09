/*function findTotal(){
    var arr = document.getElementsByName('qty');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total').value = tot; }*/

  
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
         document.getElementById("total").innerHTML = spolu;
    
        console.log(vysledok, vysledok2, vysledok3);
    
        console.log(spolu);}
    
   




  

