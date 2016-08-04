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
        return isset($_SESSION['elev_id']) && $_SESSION['elev_id'];
    }

    public function lista_elevi(){
        if(!isset($_SESSION['id']) || !$_SESSION['id']) return [];
        $id = intval($_SESSION['id']);
        $elevi = $this->db->query("SELECT id, nume FROM elevi WHERE prof_id = $id");
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
            unset($_SESSION['id']);
            $_SESSION['elev_id'] = $chk['elev_id'];
            $_SESSION['email'] = $chk['email'];
            $_SESSION['nume'] = $chk['nume'];
            return 1;
        }

    }

}
