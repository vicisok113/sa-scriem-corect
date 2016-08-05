<?php

class model{
    function __construct($dbcon){
        $this->db = $dbcon;
    }

    public function verif_login(){
        //Verifică dacă au fost trimise date pentru conectare
        if(isset($_POST['email'], $_POST['parola'])){
            //Verifică dacă datele sunt corecte
            $chk = $this->db->verif_date($_POST['email'], $_POST['parola']);
            if(!$chk) return 1;
            //Dacă sunt greșite se iese din funcție
            //Dacă sunt corecte se inițializează sesiunea
            $_SESSION['id'] = $chk['id'];
            $_SESSION['email'] = $chk['email'];
            return 0;
        }
        return 0;
    }

    public function conectat(){
        //Verifică dacă utilizatorul este conectat
        return isset($_SESSION['id']) && $_SESSION['id'];
    }

    public function conectat_elev(){
        //Verifică dacă utilizatorul este conectat
        return isset($_SESSION['elev_id']) && $_SESSION['elev_id'] ? $_SESSION['elev_id'] : 0;
    }

    public function lista_elevi(){
        if(!isset($_SESSION['id']) || !$_SESSION['id']) return [];
        $id = intval($_SESSION['id']);
        $elevi = $this->db->query("SELECT id, nume, nivel FROM elevi WHERE prof_id = $id");
        return $elevi->fetch_all(MYSQLI_ASSOC);
    }

    public function verif_selectelev(){
        //Verificăm dacă a fost selectat un elevi
        if(isset($_POST['selectare_elev'])){
            //Verifică dacă există elevul
            $chk = $this->db->elev($_POST['selectare_elev']);
            if(!$chk) return 0;
            //Dacă nu, se iese din funcție
            //Dacă sunt corecte se inițializează sesiunea
            //Și este delogat profesorul pentru securitate
            $profid = $_SESSION['id'];
            unset($_SESSION['id']);
            $_SESSION['prof_id'] = $profid;
            $_SESSION['elev_id'] = $chk['id'];
            $_SESSION['nivel'] = $chk['nivel'];
            $_SESSION['nume'] = $chk['nume'];
            return 1;
        }

    }

    public function verif_inreg(){
        //Verifică dacă au fost trimise date pentru înregistrare
        if(isset($_POST['email'], $_POST['parola'])){
            if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) === false) return 1;
            if(strlen($_POST['parola']) < 6) return 2;
            if($this->db->email_exista($_POST['email'])) return 3;
            $data['email'] = $_POST['email'];
            $data['parola'] = password_hash($_POST['parola'], PASSWORD_DEFAULT);
            $this->db->insert('profesori', $data);
            return 4;
        }
        return 0;
    }

    public function verif_elev(){
        //Verifică dacă au fost trimise date pentru înregistrare
        if(isset($_POST['nume'])){
            $data['nume'] = $_POST['nume'];
            $data['prof_id'] = (int)$this->conectat();
            $data['nivel'] = $data['scor1'] = $data['scor2'] = $data['scor3'] = $data['scor4'] = 0;
            $this->db->insert('elevi', $data);
            return 1;
        }
        return 0;
    }

    public function set_scor($runda, $scor){
        $scor = $this->db->escape($scor);
        $runda = intval($runda);
        $id = $this->conectat_elev();
        if(!$id) return;
        $this->db->query("UPDATE elevi SET scor{$runda} = $scor, nivel = $runda WHERE id = $id LIMIT 1");
    }

}
