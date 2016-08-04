<?php

class model{
    function __construct($dbcon){
        $this->db = $dbcon;
    }

    public function verif_login(){

    }
    
    public function conectat(){
        return isset($_SESSION['id']) && $_SESSION['id'];
    }

}
