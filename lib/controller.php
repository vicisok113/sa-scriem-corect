<?php

class controller{

    protected $ruta;
    protected $ruta_p;

    function __construct($ruta){
        $this->ruta = $ruta;
        $this->ruta_p = explode('/', $ruta);
    }

    private function ruta($id){
        //Părțile din link de la 1 la n
        return isset($this->ruta_p[$id-1]) ? $this->ruta_p[$id-1] : '';
    }

    public function pagina(){
        //Preluăm prima parte din link
        $pag = $this->ruta(1);

        if($pag == ''){
            //Prima pagină

        }elseif($pag == 'lectie'){
            //Pagina unei lecții
            $lectie = $this->ruta(2);
            
        }
    }
}
