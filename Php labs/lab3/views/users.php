<?php
require_once ("functions.php");

 $users = read_from_file() ;

 foreach($users as $user){
    $user_details=explode(",",$user);
    echo "<div style=font-size:30px;font-family: Sansita Swashed, cursive;>";
    echo "New User <br/>";
    echo str_repeat("*",20);
    foreach($user_details as $value){
        echo "<h3> $value </h3> ";
        
    }
    echo "</div>";
 }

?>