<?php

  class Promo{

      public $id;

      public $message;

      public $idActivity;


      public function setId($id){
        $this->id = $id;
      }

      public function setMessage($message){
        $this->message = $message;
      }

      public function setIdActivity($idActivity){
        $this->idActivity = $idActivity;
      }

      public function getId(){
        return $this->id;
      }

      public function getMessage(){
        return $this->message;
      }

      public function getIdActivity(){
        return $this->idActivity;
      }

  }

?>
