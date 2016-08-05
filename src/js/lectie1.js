//
//
//

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
    $("#text").fadeOut(0);
}).on('click', '#play', function(e){
    e.preventDefault();
    if(stagiu == 0){
        start();
        stagiu++;
        $("#play").animate({
            opacity: 0,
        }, 1000, function() {
            $("#play").slideUp();
        });
    }
});

function start(){
    player.pregateste('bine_ai_venit.mp4');
    player.play(function(){
        player.stop();
        step2();
        setTimeout(function(){
            $(".part2 h2").css({
                'margin-top': '8vh',
                opacity: 1
            }, 2000);
        }, 1000);
    });
}

function step2(){
    stagiu = 2;
    player.pregateste('primii_ani.mp4');
    player.play(function(){
        player.stop();
        setTimeout(function(){
            player.pregateste('de_exemplu.mp4');
            player.play(function(){
                step3();
            })
        }, 500);
    });
}

function step3(){
    stagiu = 3;
    $("#text").html('<div class="text-inner"><span class="t-red">P</span>omul cu merele de aur</div>');
    $("#text").fadeIn(0);
    $(".text-inner").fadeIn(200);
    setTimeout(function(){
        player.pregateste('pomul_cu_merele.mp4');
        player.play(function(){
           $("#text").append('<div class="text-inner"><span class="t-red">C</span>ei trei purceluși</div>');
           $(".text-inner").fadeIn(200);
           setTimeout(function(){
               player.pregateste('cei_3_purcelusi.mp4');
               player.play(function(){
                   $("#text").append('<div class="text-inner"><span class="t-red">F</span>etița cu chibriturile</div>');
                   $(".text-inner").fadeIn(200);
                   player.pregateste('fetita_cu_chibriturie.mp4');
                   player.play(function(){
                      setTimeout(step4, 300);
                   })
               })
           }, 100);
        })
    }, 100);
}

function step4(){
    stagiu = 4;
    
}
