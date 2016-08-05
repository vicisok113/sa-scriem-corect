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
            $lectie = intval($this->ruta(2));
            if($lectie >= 1 && $lectie <= 4){
                $this->fisier_tpl("lectia".$lectie);
            }
        } elseif($pag == 'acasa'){
            //Pagina hartii
            $this->fisier_tpl('acasa');

        } elseif($pag == 'inregistrare'){
            //Pagina inregistrare invatator
            $verif = $this->model->verif_inreg();
            $data['eroare_inreg'] = $verif==1 || $verif==2 || $verif==3 ? $verif : 0;
            $data['succes_inreg'] = $verif==4 ? 1 : 0;
            $this->fisier_tpl('inregistrare', $data);
        } elseif($pag == 'ajax'){
            //Routerul pentru ajax
            $ajx = intval($this->ruta(2));
            if($ajx == 'set_scor' && $this->model->conectat_elev() && isset($_POST['scor'], $_POST['runda'])){
                $this->model->set_scor($_POST['runda'], $_POST['scor']);
            } elseif($ajx == 'del_elev' && $this->model->conectat() && isset($_POST['id_elev'])){
                $this->model->del_elev($_POST['id_elev']);
            }
        } elseif($pag == 'invatator'){
            $data['logat'] = $this->model->conectat();
            if($data['logat']){
                $verif = $this->model->verif_elev();
                $data['elevi'] = $this->model->lista_elevi();
            }
            $this->fisier_tpl('invatator', $data);
        }
    }
}
