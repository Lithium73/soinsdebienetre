<?php
class Configuration {

    var $mysqlUrl = "%1";
    var $mysqlBdd = "%2";
    var $mysqlUser = "%3";
    var $mysqlPassword = "%4";

    function getConf() {
        return $this;
    }
}


?>
