<?php

class bazadedate{

    protected $db;

    function __construct($conf){
        $this->db = new mysqli($conf['db.host'], $conf['db.user'], $conf['db.pass'], $conf['db.name']);
        if(!$this->db) return;
        $this->db->query("SET NAMES UTF8");
    }

    private function verif_eroare(){
        if(!empty($db->error)){
            $this->eroare();
            return true;
        }
        return false;
    }

    private function eroare(){
        die("Eroare bază de date: ".$this->db->error);
    }

    public function insert($tabel, $valori){
        if(!is_array($valori)) return false;
        $coloane = [];
        $date = [];
        foreach($valori as $key => &$val){
            $val = $db->real_escape_string($val);
            $coloane[] = '`'.$key.'`';
            $date[] = is_numeric($val) ? $val : '"'.$val.'"';
        }
        $coloane = implode(', ', $coloane);
        $date = implode(', ', $date);
        $res = $this->db->query("INSERT INTO `$tabel` ($coloane) VALUES ($date)");

        $this->verif_eroare();
        return $res;
    }

    public function query($query){
        $res = $this->db->query($query);

        $this->verif_eroare();
        return $res;
    }

}
