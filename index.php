<?php

require_once("vendor/autoload.php");

use EasyProjects\SimpleRouter\Router as Router;
use App\Controllers\homeController;

$router = new Router();

$router -> autoload();

$router -> get("/", [homeController::class,"home"]);
$router -> get("/home", [homeController::class,"home"]);


$router -> start();

?>