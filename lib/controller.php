<?php

class controller{

    protected $ruta;
    protected $ruta_p;

    function __construct($ruta, $dbcon){
        $this->ruta = $ruta;
        $this->ruta_p = explode('/', $ruta);
        $this->model = new model($dbcon);
    }

    private function ruta($id){
        //Părțile din link de la 1 la n
        return isset($this->ruta_p[$id-1]) ? $this->ruta_p[$id-1] : '';
    }

    private function fisier_tpl($nume, $data = []){
        global $config;
        $baza_url = $config['url'];
        include 'pag/'.$nume.'.php';
    }

    public function pagina(){
        global $conf;
        //Preluăm prima parte din link
        $pag = $this->ruta(1);

        if($pag == ''){
            //Prima pagină
            $data['eroare_conectare'] = $this->model->verif_login();
            $data['selectare_elev'] = $this->model->verif_selectelev();
            if($data['selectare_elev']){
                //A fost ales un elev, redirecționăm spre hartă
                header("Location: ".$conf['url']."acasa");
                return;
            }
            $data['logat'] = $this->model->conectat();
            if($data['logat']){
                $data['elevi'] = $this->model->lista_elevi();
            }
            $this->fisier_tpl('index', $data);
        } elseif($pag == 'lectie'){
            //Pagina unei lecții
            $lectie = $this->ruta(2);

        } elseif($pag == 'acasa'){
            //Pagina hartii
            $this->fisier_tpl('acasa');

        } elseif($pag == 'inregistrare'){
            //Pagina inregistrare invatator
            $verif = $this->model->verif_inreg();
            $data['eroare_inreg'] = $verif==1 || $verif==2 || $verif==3 ? $verif : 0;
            $data['succes_inreg'] = $verif==4 ? 1 : 0;
            $this->fisier_tpl('inregistrare', $data);
        }
    }
}
