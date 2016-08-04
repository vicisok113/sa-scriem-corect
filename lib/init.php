<?php

include "config.php";
include "db.php";

//initializare baza de date

db_init();

//preluare rută

$ruta = isset($_GET['pg']) ? $_GET['pg']:'';
