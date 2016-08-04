<?php

include "config.php";
include "db.php";
include "controller.php";
include "model.php";

session_start();

//inițializare bază de date

$db = new bazadedate($config);

//preluare rută

$ruta = isset($_GET['pg']) ? $_GET['pg']:'';
$ctrl = new controller($ruta, $db);

$ctrl->pagina();
