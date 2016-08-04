//Pomul cu merele de aur
//Cei trei purceluși
//Fetița cu chibriturile

//Scufița Roșie
//Jake și Pirații din Țara de Nicăieri
//Frumasa din pădurea adormită

//A fost odată ca niciodată un rege fericit. Acesta trăia pe tărâmul cuvintelor.

// si la sfarsit adaugi obiectivele: doar text
/*
-scrierea unor cuvinte / propoziții cu majusculă
-scrierea cu majusculă a substantivelor proprii
- învățarea, recunoașterea și utilizarea majusculelor și minusculelor}
*/


//exercitiu Andrei(Corect-voce)           andrei(greșit – răspunsul corect era cealaltă variantă)
//buCurești  (greșit – răspunsul corect era cealaltă variantă)          București(Corect)
//Japonia (   corect)     japonia(greșit – răspunsul corect era cealaltă variantă)
//Croitorașul cel viteaz 	(Corect)   croitorașul cel viteaz (greșit – răspunsul corect era cealaltă variantă)
//hainele cele noi ale împăratului (greșit – răspunsul corect era cealaltă variantă)    Hainele cele noi ale împăratului ( corect)
//Am mers la mare. (Corect)      am mers la mare. (greșit – răspunsul corect era cealaltă variantă)
//Astăzi am învățat Ceva Nou. (greșit – răspunsul corect era cealaltă variantă)    Astăzi am învățat ceva nou.(corect)
var stagiu = 0;
$(document).ready(function(){
    $(".part2 h2").css('margin-top', '0vh');
}).on('click', '#play', function(e){
    e.preventDefault();
    if(stagiu == 0){
        start();
        stagiu++;
        $("#play").fadeOut(2000);
    }
});

function start(){
    player.pregateste('bine_ai_venit.mp4');
    player.play(function(){
        $(".part2 h2").css('margin-top', '-20vh');
    });
}
