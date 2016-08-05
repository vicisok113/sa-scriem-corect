var scorc = 0;
var scorg = 0;

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
                        $("#text").fadeOut( 500, function(){
                             $("#text").html("");
                        })
                      setTimeout(step4, 600);
                   })
               })
           }, 100);
        })
    }, 100);
}

function step4(){
    stagiu = 4;
    player.pregateste('de_asemenea.mp4');
    player.play(function(){
        $("#text").html("").fadeIn();
        $("#text").append('<div class="text-inner"><span class="t-red">S</span>cufița <span class="t-red">R</span>oșie</div>');
        $(".text-inner").fadeIn(200);
        setTimeout(function(){
            player.pregateste('Scufita_Rosie.mp4');
            player.play(function(){
               $("#text").append('<div class="text-inner"><span class="t-red">J</span>ake și <span class="t-red">P</span>irații din <span class="t-red">Ț</span>ara de <span class="t-red">N</span>icăieri</div>');
               $(".text-inner").fadeIn(200);
               setTimeout(function(){
                   player.pregateste('Jake_si_piratii.mp4');
                   player.play(function(){
                       $("#text").append('<div class="text-inner"><span class="t-red">F</span>rumoasa din pădurea adormită</div>');
                       $(".text-inner").fadeIn(200);
                       player.pregateste('Frumoasa_din_padurea_adormita.mp4');
                       player.play(function(){
                           $("#text").append('<div class="text-inner">Să nu uităm că orice propoziție începe cu literă mare.</div>');
                           $(".text-inner").fadeIn(200);
                           $($(".text-inner")[0]).slideUp();
                           player.pregateste('orice_prop.mp4');
                           player.play(function(){
                               $("#text").append('<div class="text-ob">A fost odată ca niciodată un rege fericit.<br>Acesta trăia pe tărâmul cuvintelor. </div>');
                               $(".text-ob").fadeIn(200);
                               player.pregateste('A_fost_odata_un_rege_fericit.mp4');
                               player.play(function(){
                                   $("#text").fadeOut( 500, function(){
                                            $("#text").html("");
                                       })
                                     setTimeout(step5, 600);
                               })

                           })
                        //
                       })
                   })
               }, 100);
            })
        }, 100);
    });
}

function step5(){
    stagiu = 5;
    $("#text").fadeOut( 500, function(){
         $("#text").html("");
         setTimeout(function(){
             player.pregateste('acum_e_momentul.mp4');
             player.play(step6);
         }, 600);
    })
}

function step6(repetnr){
    stagiu = 6;

    if(typeof repetnr == 'undefined') repetnr = 5;
    if(repetnr == 0) return step7();
    if(repetnr == 5){
        cuv1 = 'Andrei';
        cuv2 = 'andrei';
        cuv_cor = 1;
    }else if(repetnr == 4){
        cuv1 = 'buCurești';
        cuv2 = 'București';
        cuv_cor = 2;
    }else if(repetnr == 3){
        cuv1 = 'Japonia';
        cuv2 = 'japonia';
        cuv_cor = 1;
    }else if(repetnr == 3){
        cuv1 = 'Japonia';
        cuv2 = 'japonia';
        cuv_cor = 1;
    }else if(repetnr == 2){
        cuv1 = 'Croitorașul cel viteaz';
        cuv2 = 'croitorașul cel viteaz';
        cuv_cor = 1;
    }else if(repetnr == 1){
        cuv1 = 'Astăzi am învățat Ceva Nou.';
        cuv2 = 'Astăzi am învățat ceva nou.';
        cuv_cor = 2;
    }
    $("#text").html('<div class="text-inner innerp2 innp3"> <div id="resp">Alegeți varianta corectă:</div> <a class="btn1 blue">'+cuv1+'</a> <a class="btn2 blue">'+cuv2+'</a> </div>');
    $("#text").fadeIn();
    $(".text-inner").fadeIn();
    $("#text .btn1")[0].onclick = function(){
        if(cuv_cor == 1){
            scorc++;
            $("#resp").html('Corect!').removeClass('error').addClass('success');
            player.pregateste('corect.mp4');
            player.play();
        }else{
            scorg++;
            $("#resp").html('Greșit! Corect era '+(cuv_cor==1?cuv1:cuv2)+'.').removeClass('success').addClass('error');
            player.pregateste('gresit.mp4');
            player.play();
        }
        setTimeout(950, function(){
            $("#text").fadeOut(function(){
                $("#text").html('');
            })
        }, 1000);
        setTimeout(function(){step6(repetnr-1);}, 2000);
    };
    $("#text .btn2")[0].onclick = function(){
        if(cuv_cor == 2){
            scorc++;
            $("#resp").html('Corect!').removeClass('error').addClass('success');
            player.pregateste('corect.mp4');
            player.play();
        }else{
            scorg++;
            $("#resp").html('Greșit! Corect era '+(cuv_cor==1?cuv1:cuv2)+'.').removeClass('success').addClass('error');
            player.pregateste('gresit.mp4');
            player.play();
        }
        setTimeout(950, function(){
            $("#text").fadeOut(function(){
                $("#text").html('');
            })
        }, 1000);
        setTimeout(function(){step6(repetnr-1);}, 2000);
    };

}

function step7(){
    setTimeout(function(){
        window.location.href = 'acasa';
    }, 6000);
    $("#text").fadeOut(function(){
        $("#text").html('<div class="text-ob">Scor: '+calcscor()+'</div>');
        $("#text").fadeIn();
        $(".text-ob").fadeIn();
        $.post('ajax/set_scor', {scor: calcscor(), runda: 1});

    });
}
