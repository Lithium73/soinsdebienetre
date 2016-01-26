<?php
class Configuration {

    var $mysqlUrl = "mysql.hostinger.fr";
    var $mysqlBdd = "u631435321_soins";
    var $mysqlUser = "u631435321_lith";
    var $mysqlPassword = "asustek73";

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
