<?php
require("conf.php");

//oaout : BDD : u631435321_soins  / u631435321_lith est asustek73


class MysqlData{

    private $db;

    public function connect(){
        $conf = new Configuration();
        if ($this->db = mysqli_connect($conf->getMysqlUrl(), $conf->getMysqlUser() , $conf->getMysqlPassword(), $conf->getMysqlBdd())){

        }else{
            echo "error";
        }
    }

    public function close(){
      mysqli_close($this->db);
    }

    private function select($query){
      $arr = array();
      if ($result = $this->db->query($query)) {
        while($obj = $result->fetch_object()){
          array_push($arr,$obj);
        }
        /* Libération du jeu de résultats */
        $result->close();
      }
      return $arr;
    }

    public function getBill($id=null,$idActivity=null){

      if($id != null && $idActivity != null){
        $query = "select * from line_bill where id = '".$id." and id_activity = '".$idActivity."'";
      }else if($id != null && $idActivity == null){
        $query = "select * from line_bill where id = '".$id."'";
      }else if($id == null && $idActivity != null){
        $query = "select * from line_bill where id_activity = '".$idActivity."'";
      }
      else{
        $query = "select * from line_bill";
      }

      $billsRaw = $this->select($query);
      for($i=0;$i<count($billsRaw);$i++){
          $bill = new Bill();
          $bill->setId($billsRaw[$i]->id);
          $bill->setPrice($billsRaw[$i]->price);
          $bill->setText($billsRaw[$i]->title);
          $bill->setIdActivity($billsRaw[$i]->id_activity);
          $billsRaw[$i] = $bill;
      }
      return json_encode($billsRaw);

    }

    public function setBill($bills){

      //check existence
      $billfrombd = $this->getBill($bills->id);
      if(count($billfrombd) > 0){
        //update
        if (!($request = $this->db->prepare("update line_bill set title = ?, price = ? where id = ?"))) {
            echo "Echec de la préparation : (" . $this->db->errno . ") " . $this->db->error;
        }

        $text = $bills->getText();
        $price = $bills->getPrice();
        $id = $bills->getId();
        if (!$request->bind_param("sss", $text, $price, $id)) {
            echo "Echec lors du liage des paramètres : (" . $request->errno . ") " . $request->error;
        }

        if (!$request->execute()) {
            echo "Echec lors de l'exécution : (" . $request->errno . ") " . $request->error;
        }else{
          return $bills;
        }

      }else{
        //insert
        if (!($request = $this->db->prepare("INSERT INTO line_bill(title,price,id_activity) VALUES (?,?,?)"))) {
            echo "Echec de la préparation : (" . $this->db->errno . ") " . $this->db->error;
        }

        $text = $bills->getText();
        $price = $bills->getPrice();
        $idActivity = $bills->getIdActivity();
        if (!$request->bind_param("sss", $text, $price, $idActivity)) {
            echo "Echec lors du liage des paramètres : (" . $request->errno . ") " . $request->error;
        }

        if (!$request->execute()) {
            echo "Echec lors de l'exécution : (" . $request->errno . ") " . $request->error;
        }else{
          return $bills;
        }
      }
    }

    public function removeBill($id){
      $billfrombd = $this->getBill($id);
        if(count($billfrombd) > 0){
          //update
          if (!($request = $this->db->prepare("delete from line_bill where id = ?"))) {
              echo "Echec de la préparation : (" . $this->db->errno . ") " . $this->db->error;
          }

          if (!$request->bind_param("s", $id)) {
              echo "Echec lors du liage des paramètres : (" . $request->errno . ") " . $request->error;
          }

          if (!$request->execute()) {
              echo "Echec lors de l'exécution : (" . $request->errno . ") " . $request->error;
          }
        }
    }

    public function getPhotos(){

    }

    public function setPhotos(){

    }

    public function removePhotos(){

    }

    public function getPromo(){

    }

    public function setPromo(){

    }

    public function removePromo(){

    }

}



?>
