<?php
class Configuration {

    var $mysqlUrl = "localhost";
    var $mysqlBdd = "u631435321_soins";
    var $mysqlUser = "root";
    var $mysqlPassword = "";

    function getConf() {
        return $this;
    }

     public function getMysqlUrl(){
          return $this->mysqlUrl;
      }

      public function getMysqlBdd(){
          return $this->mysqlBdd;
      }

      public function getMysqlUser(){
          return $this->mysqlUser;
      }

      public function getMysqlPassword(){
          return $this->mysqlPassword;
      }
}


?>
