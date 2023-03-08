<?php

   function remember_variable($var){
    if(isset($_POST[$var]) && !empty($_POST[$var])){
        return $_POST[$var];
    }
   }

?>