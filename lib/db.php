<?php

class bazadedate{

    protected $db;

    function __construct($conf){
        $this->db = new mysqli($conf['db.host'], $conf['db.user'], $conf['db.pass'], $conf['db.name']);
        if(!$this->db) return;
        $this->db->query("SET NAMES UTF8");
    }

    private function verif_eroare(){
        //Verifică dacă există vreo eroare
        if(!empty($db->error)){
            $this->eroare();
            return true;
        }
        return false;
    }

    private function eroare(){
        die("Eroare bază de date: ".$this->db->error);
    }

    public function escape($str){
        return $this->db->real_escape_string($str);
    }

    public function insert($tabel, $valori){
        //Generează și introduce în tabelul $tabel valorile din vectorul $valori
        if(!is_array($valori)) return false;
        $coloane = [];
        $date = [];
        foreach($valori as $key => &$val){
            $val = $this->escape($val);
            $coloane[] = '`'.$key.'`';
            $date[] = is_numeric($val) ? $val : '"'.$val.'"';
        }
        $coloane = implode(', ', $coloane);
        $date = implode(', ', $date);
        $res = $this->db->query("INSERT INTO `$tabel` ($coloane) VALUES ($date)");

        $this->verif_eroare();
        return $res;
    }

    public function verif_date($email, $parola){
        //Verifică dacă datele trimise prin parametri sunt corecte
        $email = $this->escape($email);
        $parola = $this->escape($parola);

        $date = $this->db->query("SELECT id, email, parola FROM profesori WHERE email = '$email' LIMIT 1");
        $date = $date->fetch_array();

        if($date == false || sizeof($date) == 0 || !password_verify($parola, $date['parola'])){
            return false;
        }
        return $date;

    }

    public function query($query){
        $res = $this->db->query($query);

        $this->verif_eroare();
        return $res;
    }

    public function elev($id_elev){
        $date = $this->db->query("SELECT id, nume FROM elevi WHERE id = '$id_elev' LIMIT 1");
        return $date->fetch_array();
    }

}
