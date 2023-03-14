<?php

   function remember_variable($var){
    if(isset($_POST[$var]) && !empty($_POST[$var])){
        return $_POST[$var];
    }
   }

    function clearBtn() {
        $_POST["name"] = "";
        $_POST["email"] = "";
        $_POST["message"] = "";
    }

    function save_to_file(){
        $fp = fopen(__Saving_File__,"a+");
        $date = date("F j Y g:i a");
        $ip = $_SERVER['REMOTE_ADDR'];
        $name = $_POST["name"];
        $email = $_POST["email"];
   
    fwrite($fp, "$date,$ip,$email,$name".PHP_EOL);
    fclose($fp);
    }

     function read_from_file() {

       return file(__Saving_File__);
    } 

    function print_confirmation_page()
  {
      return  
      "<strong style=font-size:50px>". WELCOME_MESSAGE ."</strong> </br></br>
                  <strong style=font-size:30px>Name: </strong>"."<p style=font-size:35px>" .$_POST["name"] ."</p>"."</br>".
                  "<strong style=font-size:30px> Email: </strong>"."<p style=font-size:35px>" .$_POST["email"] ."</p>"."</br>".
                  "<strong style=font-size:30px>Message: </strong>"."<p style=font-size:35px>" .$_POST["message"]."</p>";
  }



?>
