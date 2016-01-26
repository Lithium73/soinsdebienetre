<?php

  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Content-Type");
  $method = $_SERVER['REQUEST_METHOD'];
  if($method == "GET"){
    get();
  }else if($method == "POST"){
    post();
  }else if($method == "DELETE"){
    delete();
  }

  /**
   *
   * Get with GET_METHOD
   *
  */
  function get(){
    $files1 = scandir(".");
    $finalArr = array();
    for($i=0;$i<sizeof($files1);$i++){
      if(strpos($files1[$i],".jpg") != false ||strpos($files1[$i],".png") != false){
        array_push($finalArr,"/backend/".$files1[$i]);
      }
    }
    echo json_encode($finalArr);
  }

  /**
    *
    * Insert / modify with POST_METHOD
    *
    */

  /**
    *
    * Delete with DELETE_METHOD
    *
    */


?>
