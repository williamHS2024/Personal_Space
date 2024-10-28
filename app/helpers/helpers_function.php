<?php

function view($view_name, $data = []){
    include(str_replace("helpers","",__DIR__)."views/".$view_name.".php");
}

?>