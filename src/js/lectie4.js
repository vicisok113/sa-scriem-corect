var stagiu = 0;
var scorc = 0;
var scorg = 0;
$(document).ready(function(){
    $("#text").fadeOut(0);
}).on('click', '#play', function(e){
    e.preventDefault();
    if(stagiu == 0){
        start();
        stagiu++;
        $("#play").animate({
            opacity: 0,
        }, 300, function() {
            $("#play").slideUp(0);
        });
    }
});

function start(){
    setTimeout(function(){
        $(".part2 h2").css({
            'margin-top': '8vh',
            opacity: 1
        });
    }, 300);
    setTimeout(function(){
        step2();
    }, 1000);
}

function step2(){
    stagiu = 2;
    setTimeout(function(){
        $("#text").fadeOut(function(){
            $("#text").html('<div class="text-inner innerp">Iată-ne ajunși la antrenamentul cavaleriei casei regale. În orice luptă armele lor sunt cuvintele , iar astăzi se pregătesc pentru un viitor război. Pentru a câștiga ei trebuie să știe să vorbească cât mai corect. La acest antrenament ei învață să articuleze cuvinte și să formeze pluralul acestora. Haideți să luăm parte la antrenament.</div>');
            $("#text").fadeIn();
            $(".text-inner").fadeIn();
        })
    }, 20);
    setTimeout(function(){
        $("#text").fadeOut(function(){
            $("#text").html('<div class="text-inner innerp">De cele mai multe ori, dublarea lui "i" apare la formele articulate de plural ale substantivelor masculine:<br>pui - pui: puii<br>perete - pereţi: pereţii<br>băiat - băieţi: băieţii<br>părinte - părinţi: părinţii</div>');
            $("#text").fadeIn();
            $(".text-inner").fadeIn();
        })
    }, 8000);
    setTimeout(function(){
        $(".text-inner").fadeOut(function(){
            $("#text").html('<div class="text-inner innerp">Exemple: <br>corect - Băieţii aceia au fost acolo.<br>greşit - Băieţi aceia au fost acolo.<br>corect - Am văzut doi băieţi.<br>greşit - Am văzut doi băieţii.</div>');
            $("#text").fadeIn();
            $(".text-inner").fadeIn();
        })
    }, 14000);
    setTimeout(function(){
        $(".text-inner").fadeOut(function(){
            $("#text").fadeIn();
            $("#text").html('<div class="text-inner innerp">De asemenea, există substantive feminine care au doi "i" la plural, în cazul în care există unul urmat de "e" la singular:<br>manie - manii<br>situaţie - situaţii<br>mantie - mantii<br>soţie – soţii</div>');
            $(".text-inner").fadeIn();
        })
    }, 22000);
    setTimeout(function(){
        $(".text-inner").fadeOut(function(){
            $("#text").html('<div class="text-inner innerp">Acum este momentul să îți testezi abilitățile de scriere învățate :).</div>');
            $("#text").fadeIn();
            $(".text-inner").fadeIn();
        })
    }, 30000);
    setTimeout(function(){
        player.pregateste("dictare.mp4");
        player.play();
        $(".text-inner").fadeOut(function(){
            setTimeout(function(){
                    $("#text").html('<div class="text-inner innerp2 innp3"><div id="resp">Introduceți textul auzit</div><div class="input-field col s12"> <textarea id="textarea1" class="materialize-textarea"></textarea> <label for="textarea1">Textarea</label> </div><a class="findict blue">Finalizare</a></div>');
                    $("#text").fadeIn();
                    $(".text-inner").fadeIn(function(){
                        $("#textarea1").focus();
                    });
                    player.pregateste("intr-o_zi_alina.mp4");
                    player.play(function(){
                        setTimeout(function(){
                            finaliz();
                        }, 2000);
                    })
            }, 2000);
        })
    }, 32000);
}

finaliz = function(){
    var text_corect = 'Într-o zi Alina s-a hotărât să plece în vacanță cu copiii și soțul său. Destinația aleasă a fost Mexic. Între timp, aceasta și-a schimbat alegerea deoarece mașina s-a stricat. După ce au reparat-o, nici un obstacol nu le-a mai stat în calea vacanței mult dorite. Cu toate acestea, la plecare, Alina și-a aminti că a uitat copiile vizelor de călătorie acasă. Astfel, vacanța  a fost amânată.';
    var text_introdus = $("#textarea1").val();
    var text = dstr(text_corect, text_introdus);
    var diffs = compare(text_corect, text_introdus);
    scor = (100-diffs)/10;
    if(scor<0) scor=0;
    player.stop();
    $(".text-inner").fadeOut(function(){
        $("#text").html('<div class="text-inner innerp">Textul tău:<br>'+text+'<br><br>Scor: '+scor+'</div>');
        $("#text").fadeIn();
        $(".text-inner").fadeIn();
        $.post('ajax/set_scor', {scor: scor, runda: 4});
            setTimeout(function(){
                window.location.href = 'acasa';
            }, 20000);
    })

};

$(document).on('click', '.findict', finaliz);

function step13(){
    $("#text").fadeOut(function(){
        $("#text").html('<div class="text-ob">Scor: '+calcscor()+'</div>');
        $("#text").fadeIn();
        $(".text-ob").fadeIn();
        $.post('ajax/set_scor', {scor: calcscor(), runda: 2});
    });
}
