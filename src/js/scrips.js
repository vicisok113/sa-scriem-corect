$(document).ready(function(){
    $('select').material_select();
    $('.modal-trigger').leanModal();
})

player = {
    rulare: 0,
    pregateste: function(nume){
        this.audio = new Audio('src/audio/'+nume);
    },
    play: function(cb){
        this.rulare = 1;
        this.audio.play();
        this.audio.onended = function(){
            player.rulare = 0;
            player.audio = null;
            if(typeof cb == 'function') cb();
        };
    },
    stop: function(){
        if(player.rulare) this.audio.pause();
        this.audio = null;
        this.rulare = 0;
    }
}

function compare(str1, str2){
    var data = JsDiff.diffChars(str1, str2);
    var diff = 0;
    $.each(data, function(i, el){
        if(el.added==true)diff+=el.count;
        else if(el.removed==true)diff+=el.count;
    });
    return diff;
}

function dstr(str1, str2){
    var data = JsDiff.diffChars(str2, str1);
    var str = '';
    $.each(data, function(i, el){
        if(el.added == true){
            str+='<u>'+el.value+'</u>';
        }else if(el.removed == true){
            str+='<s>'+el.value+'</s>';
        }else{
            str+=el.value;
        }
    });
    return str;
}
function calcscor(){
    var tot = scorc + scorg;
    var rap = (scorc / tot)*10;
    return Math.round(rap*100)/100;
}
