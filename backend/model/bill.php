<?php

  class Bill{

      public $id;

      public $price;

      public $text;

      public $idActivity;



/**

GETTER

*/

      public function getId(){
        return $this->id;
      }

      public function getPrice(){
         return $this->price;
      }

      public function getText(){
        return $this->text;
      }

      public function getIdActivity(){
        return $this->idActivity;
      }

/**

SETTER

*/

      public function setText($text){
        $this->text = $text;
      }

      public function setPrice($price){
        $this->price = $price;
      }

      public function setIdActivity($idActivity){
        $this->idActivity = $idActivity;
      }

      public function setId($id){
        $this->id = $id;
      }

  }

?>
