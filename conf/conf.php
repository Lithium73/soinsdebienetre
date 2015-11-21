<?php
class Configuration {

    var $mysqlUrl = "%1";
    var $mysqlBdd = "%2";
    var $mysqlUser = "%3";
    var $mysqlPassword = "%4";

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
