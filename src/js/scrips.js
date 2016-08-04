$(document).ready(function(){
    $('select').material_select();
})

player = {
    rulare: 0,
    pregateste: function(nume){
        this.audio = new Audio('src/audio/bine_ai_venit.mp3');
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
        this.audio.pause();
        this.audio = null;
        this.rulare = 0;
    }
}
