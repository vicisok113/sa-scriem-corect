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
        step2();
        setTimeout(function(){
            $(".part2 h2").css({
                'margin-top': '8vh',
                opacity: 1
            }, 2000);
        }, 1000);
}

function step2(){
    stagiu = 2;
    $("#text").html('<div class="text-ob">Mama mea, regina Ortogramelor, are foarte multă energie și îi place să inventeze ceva nou în fiecare zi. Astăzi s-a gândit să creeze noi cuvinte. Pentru asta a spart cuvinte în două și le-a unit cu o cratimă, numindu-le ortograme, după numele ei. Astfel au apărut grupurile de cuvinte: ne-am, n-ai,  s-ar, v-a, du-ne, ce-l etc.</div>');
    $("#text").fadeIn(0);
    $(".text-ob").fadeIn(200);
    setTimeout(function(){
        step3();
    }, 11100);
}

function step3(){
    stagiu = 3;
    $("#text").html('<div class="text-inner">Exemple:</div>');
    $("#text").fadeIn(0);
    $(".text-inner").fadeIn(200);
    setTimeout(function(){
        $("#text").append('<div class="text-ob"><table class="highlight"> <tbody> <tr> <td>E de <u>neam</u> mare.</td> <td><u>Ne-am</u> înşelat cu toţii.</td> </tr> <tr> <td>Cântă minunat la <u>nai</u>.</td> <td><u>N-ai</u> treabă acasă azi?</td> </tr> <tr> <td>Iezii <u>sar</u> zglobii pe câmp.</td> <td><u>S-ar</u> cuveni să fii mai liniştit.</td> </tr> <tr> <td>Se <u>va</u> duce în curând la piaţă.</td> <td><u>V-a</u> indus în eroare pe toţi.</td> </tr> <tr> <td>În Sahara sunt multe <u>dune</u> de nisip.</td> <td><u>Du-ne</u> spre muzeu.</td> </tr> <tr> <td>E <u>cel</u> mai silitor dintre toţi.</td> <td><u>Ce-l</u> face să nu înveţe?</td> </tr> </tbody> </table></div>');
        $(".text-ob").fadeIn(200);
        setTimeout(function(){
            step4();
        }, 11100);
    }, 1000);
}

function step4(){
    stagiu = 4;
    $("#text").html('<div class="text-inner">Obiective:</div>');
    $("#text").fadeIn(0);
    $(".text-inner").fadeIn(200);
    setTimeout(function(){
        $("#text").append('<div class="text-ob">- elevul să potrivească corect ortogramele în propoziție;<br>- să recunoască ortogramele</div>');
        $(".text-ob").fadeIn(200);
        setTimeout(function(){
            step5();
        }, 8000);
    }, 1000);
}

function step5(){
    stagiu = 5;
    //aplicatie
}
