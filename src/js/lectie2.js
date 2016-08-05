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
    player.pregateste('bravo_lectia2.mp4');
    player.play(function(){
        player.stop();
        step2();
    });
}

function step2(){
    stagiu = 2;
    $("#text").fadeIn();
    $("#text").html('<div class="text-inner innerp">Este momentul să afli câte ceva despre aventura mea cu Marchizul și Baronul. Pentru a comunica mai ușor vom folosi câteva porecle. Marchizului îi vom spune M , Baronului îi vom spune B, iar eu voi fi P.</div>');
    $(".text-inner").fadeIn();
    setTimeout(function(){
        $(".text-inner").fadeOut(function(){
            $("#text").html('<div class="text-inner innerp">Noi trei suntem  foarte buni prieteni și mergem foarte des la festivaluri în ținuturile vecine. Însă într-o zi, dragul nostru amic M mergea foarte repede în fața noastră și ne-a lăsat în urmă.</div>');
            $(".text-inner").fadeIn();
        })
    }, 13000);
    setTimeout(function(){
        $(".text-inner").fadeOut(function(){
            $("#text").html('<div class="text-inner innerp">Nu am reușit să-l mai găsim. Și asta a început să se întâmple de fiecare dată când mergeam împreună undeva. De aceea l-am rugat pe tatăl meu să dea o lege prin care să hotărască poziția prietenului nostru când este cu noi.</div>');
            $(".text-inner").fadeIn();
        })
    }, 26000);
    setTimeout(function(){
        $(".text-inner").fadeOut(function(){
            $("#text").html('<div class="text-inner innerp">Legea sună cam așa: ”Amicul nostru M va sta mereu înainte de P sau B și asta se va aplica și în cazul literelor!”. Și de atunci, această lege este mereu aplicată, M fiind înaine lui P sau B orice s-ar întâmpla.<br>Exemple: <b>imparţial, îmbătat, împroşcat, amputat, împodobit</b>.</div>');
            setTimeout(function(){
                $("#text").append('<div class="text-inner innerp">Acum să trecem la niște teste.</div>');
                $(".text-inner").fadeIn();
            }, 5000)
            $(".text-inner").fadeIn();
        })
    }, 38000);
    setTimeout(function(){
        $(".text-inner").fadeOut(step3);
    }, 50000)
}

function corect(){

}

function step3(){
    stagiu = 3;
    $("#text").fadeIn();
    $("#text").html('<div class="text-inner innerp2"> <b>î...ărțire</b> <div id="resp">Alegeți varianta corectă</div> <a class="btn1 deep-purple">MP</a> <a class="btn2 deep-purple">PM</a> </div>');
    $(".text-inner").fadeIn();
    $("#text .btn1")[0].onclick = function(){
        if(stagiu != 3) return;
        scorc++;
        player.stop();
        $("#resp").html('Corect!').removeClass('error').addClass('success');
        player.pregateste('corect.mp4');
        player.play();
        stagiu = 4;
        setTimeout(950, function(){
            $("#text").fadeOut(function(){
                $("#text").html('');
            })
        }, 1000);
        setTimeout(step4, 2000);
    };
    $("#text .btn2")[0].onclick = function(){
        if(stagiu != 3) return;
        scorg++;
        player.stop();
        $("#resp").html('Greșit! Corect era: ÎMPĂRȚIRE').removeClass('success').addClass('error');
        player.pregateste('gresit.mp4');
        player.play();
        stagiu = 4;
        setTimeout(950, function(){
            $("#text").fadeOut(function(){
                $("#text").html('');
            })
        }, 1000);
        setTimeout(step4, 2000);
    };
}

function step4(){
    stagiu = 4;
    $("#text").fadeIn();
    $("#text").html('<div class="text-inner innerp2"> <b>u...ră</b> <div id="resp">Alegeți varianta corectă</div> <a class="btn1 deep-purple">BM</a> <a class="btn2 deep-purple">MB</a> </div>');
    $(".text-inner").fadeIn();
    $("#text .btn2")[0].onclick = function(){
        if(stagiu != 4) return;
        scorc++;
        player.stop();
        $("#resp").html('Corect!').removeClass('error').addClass('success');
        player.pregateste('corect.mp4');
        player.play();
        stagiu = 5;
        setTimeout(950, function(){
            $("#text").fadeOut(function(){
                $("#text").html('');
            })
        }, 1000);
        setTimeout(step5, 2000);
    };
    $("#text .btn1")[0].onclick = function(){
        if(stagiu != 4) return;
        scorg++;
        player.stop();
        $("#resp").html('Greșit! Corect era: UMBRĂ').removeClass('success').addClass('error');
        player.pregateste('gresit.mp4');
        player.play();
        stagiu = 5;
        setTimeout(950, function(){
            $("#text").fadeOut(function(){
                $("#text").html('');
            })
        }, 1000);
        setTimeout(step5, 2000);
    };
}

function step5(){
    stagiu = 5;
    $("#text").fadeIn();
    $("#text").html('<div class="text-inner innerp2"> <b>co...liment</b> <div id="resp">Alegeți varianta corectă</div> <a class="btn1 deep-purple">PM</a> <a class="btn2 deep-purple">MP</a> </div>');
    $(".text-inner").fadeIn();
    $("#text .btn2")[0].onclick = function(){
        if(stagiu != 5) return;
        scorc++;
        player.stop();
        $("#resp").html('Corect!').removeClass('error').addClass('success');
        player.pregateste('corect.mp4');
        player.play();
        stagiu = 6;
        setTimeout(950, function(){
            $("#text").fadeOut(function(){
                $("#text").html('');
            })
        }, 1000);
        setTimeout(step6, 2000);
    };
    $("#text .btn1")[0].onclick = function(){
        if(stagiu != 5) return;
        scorg++;
        player.stop();
        $("#resp").html('Greșit! Corect era: COMPLIMENT').removeClass('success').addClass('error');
        player.pregateste('gresit.mp4');
        player.play();
        stagiu = 6;
        setTimeout(950, function(){
            $("#text").fadeOut(function(){
                $("#text").html('');
            })
        }, 1000);
        setTimeout(step6, 2000);
    };
}
function step6(){
    stagiu = 6;
    $("#text").fadeIn();
    $("#text").html('<div class="text-inner innerp2"> <b>î...obocit</b> <div id="resp">Alegeți varianta corectă</div> <a class="btn1 deep-purple">BM</a> <a class="btn2 deep-purple">MB</a> </div>');
    $(".text-inner").fadeIn();
    $("#text .btn2")[0].onclick = function(){
        if(stagiu != 6) return;
        scorc++;
        player.stop();
        $("#resp").html('Corect!').removeClass('error').addClass('success');
        player.pregateste('corect.mp4');
        player.play();
        stagiu = 7;
        setTimeout(950, function(){
            $("#text").fadeOut(function(){
                $("#text").html('');
            })
        }, 1000);
        setTimeout(step7, 2000);
    };
    $("#text .btn1")[0].onclick = function(){
        if(stagiu != 6) return;
        scorg++;
        player.stop();
        $("#resp").html('Greșit! Corect era: ÎMBOBOCIT').removeClass('success').addClass('error');
        player.pregateste('gresit.mp4');
        player.play();
        stagiu = 7;
        setTimeout(950, function(){
            $("#text").fadeOut(function(){
                $("#text").html('');
            })
        }, 1000);
        setTimeout(step7, 2000);
    };
}

function step7(){
    $("#text").html('<div class="text-inner innerp">Acum este momentul să verificăm dacă ești destul de curajos să mergi mai departe.</div>').fadeIn();
    $(".text-inner").fadeIn();
    setTimeout(function(){
        $("#text").append('<div class="text-inner innerp">Vei primi o listă de cuvinte greșite, iar tu va trebui să scrii valoarea corectă.</div>');
        $(".text-inner").fadeIn();
    }, 3000);
    setTimeout(function(){
        $("#text").fadeOut(function(){
            $("#text").html('');
            step8();
        });
    }, 13000)
}

function chck_n_score(w1, w2){
    var diffs = compare(w1, w2);
    if(diffs == 0){
        scorc+=3;
        return 1;
    }else{
        scorg+=Math.round(diffs*0.6);
        return 0;
    }
}

function step8(){
    stagiu = 8;
    var word = 'egzersare';
    var correct_word = 'exersare'
    var diffstr = dstr(correct_word, word);
    $("#text").html('<div class="text-inner innerp2"> <b>'+word+'</b> <div id="resp"></div> <div class="input-field col l8 offset-l2"> <input id="el1" type="text" required autocomplete="off"> <label for="el1">Scrieți varianta corectă</label> </div><a class="btn1 green">Este corect</a> <a class="btn2 red">Corectare</a> </div>').fadeIn();
    $(".text-inner").fadeIn();
    $("#text .btn1")[0].onclick = function(){
        if(stagiu != 8) return;
        if(chck_n_score(correct_word, word)){
            player.pregateste('corect.mp4');
            $("#resp").html('Corect!').removeClass('items').addClass('success');
        }else{
            player.pregateste('gresit.mp4');
            $("#resp").html('Greșit! Corect era: '+diffstr).removeClass('success').addClass('items');
        }
        player.play();
        setTimeout(950, function(){ $("#text").fadeOut(function(){ $("#text").html(''); }) }, 1000);
        setTimeout(step9, 2000);
    };
    $("#text .btn2")[0].onclick = function(){
        if(stagiu != 8) return;
        if(chck_n_score(correct_word, $("#el1").val().toLowerCase())){
            player.pregateste('corect.mp4');
            $("#resp").html('Corect!').removeClass('items').addClass('success');
        }else{
            player.pregateste('gresit.mp4');
            $("#resp").html('Greșit! Corect era: '+diffstr).removeClass('success').addClass('items');
        }
        player.play();
        setTimeout(950, function(){ $("#text").fadeOut(function(){ $("#text").html(''); }) }, 1000);
        setTimeout(step9, 2000);
    };
}

function step9(){
    stagiu = 9;
    var word = 'fi bun';
    var correct_word = 'fii bun'
    var diffstr = dstr(correct_word, word);
    $("#text").html('<div class="text-inner innerp2"> <b>'+word+'</b> <div id="resp"></div> <div class="input-field col l8 offset-l2"> <input id="el1" type="text" required autocomplete="off"> <label for="el1">Scrieți varianta corectă</label> </div><a class="btn1 green">Este corect</a> <a class="btn2 red">Corectare</a> </div>').fadeIn();
    $(".text-inner").fadeIn();
    $("#text .btn1")[0].onclick = function(){
        if(stagiu != 9) return;
        if(chck_n_score(correct_word, word)){
            player.pregateste('corect.mp4');
            $("#resp").html('Corect!').removeClass('items').addClass('success');
        }else{
            player.pregateste('gresit.mp4');
            $("#resp").html('Greșit! Corect era: '+diffstr).removeClass('success').addClass('items');
        }
        player.play();
        setTimeout(950, function(){ $("#text").fadeOut(function(){ $("#text").html(''); }) }, 1000);
        setTimeout(step10, 2000);
    };
    $("#text .btn2")[0].onclick = function(){
        if(stagiu != 9) return;
        if(chck_n_score(correct_word, $("#el1").val().toLowerCase())){
            player.pregateste('corect.mp4');
            $("#resp").html('Corect!').removeClass('items').addClass('success');
        }else{
            player.pregateste('gresit.mp4');
            $("#resp").html('Greșit! Corect era: '+diffstr).removeClass('success').addClass('items');
        }
        player.play();
        setTimeout(950, function(){ $("#text").fadeOut(function(){ $("#text").html(''); }) }, 1000);
        setTimeout(step10, 2000);
    };
}

function step10(){
    stagiu = 10;
    var word = 'dintrun';
    var correct_word = 'dintr-un'
    var diffstr = dstr(correct_word, word);
    $("#text").html('<div class="text-inner innerp2"> <b>'+word+'</b> <div id="resp"></div> <div class="input-field col l8 offset-l2"> <input id="el1" type="text" required autocomplete="off"> <label for="el1">Scrieți varianta corectă</label> </div><a class="btn1 green">Este corect</a> <a class="btn2 red">Corectare</a> </div>').fadeIn();
    $(".text-inner").fadeIn();
    $("#text .btn1")[0].onclick = function(){
        if(stagiu != 10) return;
        if(chck_n_score(correct_word, word)){
            player.pregateste('corect.mp4');
            $("#resp").html('Corect!').removeClass('items').addClass('success');
        }else{
            player.pregateste('gresit.mp4');
            $("#resp").html('Greșit! Corect era: '+diffstr).removeClass('success').addClass('items');
        }
        player.play();
        setTimeout(950, function(){ $("#text").fadeOut(function(){ $("#text").html(''); }) }, 1000);
        setTimeout(step11, 2000);
    };
    $("#text .btn2")[0].onclick = function(){
        if(stagiu != 10) return;
        if(chck_n_score(correct_word, $("#el1").val().toLowerCase())){
            player.pregateste('corect.mp4');
            $("#resp").html('Corect!').removeClass('items').addClass('success');
        }else{
            player.pregateste('gresit.mp4');
            $("#resp").html('Greșit! Corect era: '+diffstr).removeClass('success').addClass('items');
        }
        player.play();
        setTimeout(950, function(){ $("#text").fadeOut(function(){ $("#text").html(''); }) }, 1000);
        setTimeout(step11, 2000);
    };
}

function step11(substep){
    stagiu = 11;
    if(typeof substep == 'undefined') substep=3;
    else if(substep==0) return step12();
    if(substep == 3){
        var word = 'poiezie';
        var correct_word = 'poezie';
    }else if(substep == 2){
        var word = 'împodobit';
        var correct_word = 'împodobit';
    }else if(substep == 1){
        var word = 'înpărat';
        var correct_word = 'împărat';
    }
    var diffstr = dstr(correct_word, word);
    $("#text").html('<div class="text-inner innerp2"> <b>'+word+'</b> <div id="resp"></div> <div class="input-field col l8 offset-l2"> <input id="el1" type="text" required autocomplete="off"> <label for="el1">Scrieți varianta corectă</label> </div><a class="btn1 green">Este corect</a> <a class="btn2 red">Corectare</a> </div>').fadeIn();
    $(".text-inner").fadeIn();
    $("#text .btn1")[0].onclick = function(){
        if(stagiu != 11) return;
        if(chck_n_score(correct_word, word)){
            player.pregateste('corect.mp4');
            $("#resp").html('Corect!').removeClass('items').addClass('success');
        }else{
            player.pregateste('gresit.mp4');
            $("#resp").html('Greșit! Corect era: '+diffstr).removeClass('success').addClass('items');
        }
        player.play();
        setTimeout(950, function(){ $("#text").fadeOut(function(){ $("#text").html(''); }) }, 1000);
        setTimeout(function(){step11(substep-1);}, 2000);
    };
    $("#text .btn2")[0].onclick = function(){
        if(stagiu != 11) return;
        if(chck_n_score(correct_word, $("#el1").val().toLowerCase())){
            player.pregateste('corect.mp4');
            $("#resp").html('Corect!').removeClass('items').addClass('success');
        }else{
            player.pregateste('gresit.mp4');
            $("#resp").html('Greșit! Corect era: '+diffstr).removeClass('success').addClass('items');
        }
        player.play();
        setTimeout(950, function(){ $("#text").fadeOut(function(){ $("#text").html(''); }) }, 1000);
        setTimeout(function(){step11(substep-1);}, 2000);
    };
}

function step12(){
    stagiu = 12;
    var word = 'înpreună';
    var correct_word = 'împreună'
    var diffstr = dstr(correct_word, word);
    $("#text").html('<div class="text-inner innerp2"> <b>'+word+'</b> <div id="resp"></div> <div class="input-field col l8 offset-l2"> <input id="el1" type="text" required autocomplete="off"> <label for="el1">Scrieți varianta corectă</label> </div><a class="btn1 green">Este corect</a> <a class="btn2 red">Corectare</a> </div>').fadeIn();
    $(".text-inner").fadeIn();
    $("#text .btn1")[0].onclick = function(){
        if(stagiu != 12) return;
        if(chck_n_score(correct_word, word)){
            player.pregateste('corect.mp4');
            $("#resp").html('Corect!').removeClass('items').addClass('success');
        }else{
            player.pregateste('gresit.mp4');
            $("#resp").html('Greșit! Corect era: '+diffstr).removeClass('success').addClass('items');
        }
        player.play();
        setTimeout(950, function(){ $("#text").fadeOut(function(){ $("#text").html(''); }) }, 1000);
        setTimeout(step13, 2000);
    };
    $("#text .btn2")[0].onclick = function(){
        if(stagiu != 12) return;
        if(chck_n_score(correct_word, $("#el1").val().toLowerCase())){
            player.pregateste('corect.mp4');
            $("#resp").html('Corect!').removeClass('items').addClass('success');
        }else{
            player.pregateste('gresit.mp4');
            $("#resp").html('Greșit! Corect era: '+diffstr).removeClass('success').addClass('items');
        }
        player.play();
        setTimeout(950, function(){ $("#text").fadeOut(function(){ $("#text").html(''); }) }, 1000);
        setTimeout(step13, 2000);
    };
}


function step13(){
    setTimeout(function(){
        window.location.href = 'acasa';
    }, 6000);
    $("#text").fadeOut(function(){
        $("#text").html('<div class="text-ob">Scor: '+calcscor()+'</div>');
        $("#text").fadeIn();
        $(".text-ob").fadeIn();
        $.post('ajax/set_scor', {scor: calcscor(), runda: 2});
    });
}
