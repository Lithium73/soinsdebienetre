<?php
require("utils/mysql.php");
require("model/promo.php");

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
   * Get bills with GET_METHOD
   *
  */
  function get(){
    $db = new MysqlData();
    $db->connect();

    $id = null;
    $idActivity = null;

    if(isset($_GET['id'])){
      $id = $_GET["id"];
    }

    if(isset($_GET['idActivity'])){
      $idActivity = $_GET["idActivity"];
    }


    $promos = $db->getPromo($id,$idActivity);
    echo json_encode($promos);
  }
  /**
    *
    * Insert / modify with POST_METHOD
    *
    */

  function post(){
    $json = json_decode(file_get_contents('php://input'));

    $promo = new Promo();
    $promo->setId($json->id);
    $promo->setMessage($json->message);
    $promo->setIdActivity($_GET["idActivity"]);

    $db = new MysqlData();
    $db->connect();

    $db->setPromo($promo);

    $db->close();
  }
  /**
    *
    * Delete with DELETE_METHOD
    *
    */
  function delete(){
    $id = file_get_contents('php://input');

    $db = new MysqlData();
    $db->connect();

    $db->removePromo($id);

    $db->close();
  }

?>
