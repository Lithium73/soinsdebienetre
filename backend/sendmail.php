<?php

  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Content-Type");

  $json = json_decode(file_get_contents('php://input'));

  if($json->message){
    mail('boulanger.colin4@gmail.com', 'Nouveau client !!', $json->message);
  }else{
    echo 'probleme';
  }

?>
