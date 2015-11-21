<?php
require("utils/mysql.php");
require("model/bill.php");

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


    $bills = $db->getBill($id,$idActivity);
    echo json_encode($bills);
  }
  /**
    *
    * Insert / modify with POST_METHOD
    *
    */

  function post(){
    $json = json_decode(file_get_contents('php://input'));

    $bill = new Bill();
    $bill->setId($json->id);
    $bill->setPrice($json->price);
    $bill->setText($json->text);
    $bill->setIdActivity($json->idActivity);

    $db = new MysqlData();
    $db->connect();

    $db->setBill($bill);

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

    $db->removeBill($id);

    $db->close();
  }

?>
