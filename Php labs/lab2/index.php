
       <!DOCTYPE html>
       <html lang="en">
       <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Information</title>
       </head>
    
       <body style="font-family: Sansita Swashed, cursive; background: linear-gradient(45deg, greenyellow, dodgerblue);
       text-align: center;">

        <?php 
    require_once ("config.php");
    require_once ("functions.php");
    
    

    if(!empty($_POST)){

        if(empty($_POST["name"])&& !empty($_POST["email"])&& !empty($_POST["message"])){
           $error= "*Name is required";
        }else  if(!empty($_POST["name"])&& empty($_POST["email"])&& !empty($_POST["message"])){
            $error= "*Email is required";
        }else if(!empty($_POST["name"])&& !empty($_POST["email"])&& empty($_POST["message"])){
            $error= "*Message is required";
        } else if(empty($_POST["name"])&& empty($_POST["email"])&& !empty($_POST["message"])){
            $error= "*Name and Email are required";
        }else if(empty($_POST["name"])&& !empty($_POST["email"])&& empty($_POST["message"])){
            $error= "*Name and Message are required";
        } else if(!empty($_POST["name"])&& empty($_POST["email"])&& empty($_POST["message"])){
            $error= "*Email and Message are required";
        } else if(empty($_POST["name"])&& empty($_POST["email"])&& empty($_POST["message"])){
            $error= "*Name,Email and Message are required";
        } else{
            if(strlen($_POST["name"]) > MAX_NAME_LENGTH && filter_var($_POST["email"],FILTER_VALIDATE_EMAIL) && strlen($_POST["message"]) <= MAX_MESSAGE_LENGTH){
                $error= "*Name is not vaild,must be less than 100 character";
            } else if(strlen($_POST["name"]) <= MAX_NAME_LENGTH && !filter_var($_POST["email"],FILTER_VALIDATE_EMAIL) && strlen($_POST["message"]) <= MAX_MESSAGE_LENGTH){
                $error= "*Email is not vaild.";
            } else if(strlen($_POST["name"]) <= MAX_NAME_LENGTH && filter_var($_POST["email"],FILTER_VALIDATE_EMAIL) && strlen($_POST["message"]) > MAX_MESSAGE_LENGTH){
                 $error= "*Message legenth has to be less 225.";
            } else if(strlen($_POST["name"]) > MAX_NAME_LENGTH && filter_var($_POST["email"],FILTER_VALIDATE_EMAIL) && strlen($_POST["message"]) > MAX_MESSAGE_LENGTH){
                 $error= "*Message legenth has to be less 225 and Name legenth has to be less 100.";
            } else if(strlen($_POST["name"]) > MAX_NAME_LENGTH && !filter_var($_POST["email"],FILTER_VALIDATE_EMAIL) && strlen($_POST["message"]) <= MAX_MESSAGE_LENGTH){
                 $error= "*Name legenth has to be less 100 and Email must be valid.";
            } else if(strlen($_POST["name"]) <= MAX_NAME_LENGTH && !filter_var($_POST["email"],FILTER_VALIDATE_EMAIL) && strlen($_POST["message"]) > MAX_MESSAGE_LENGTH){
                 $error= "*Message legenth has to be less 255 and Email must be valid.";
            }else if(strlen($_POST["name"]) > MAX_NAME_LENGTH && !filter_var($_POST["email"],FILTER_VALIDATE_EMAIL) && strlen($_POST["message"]) > MAX_MESSAGE_LENGTH){
                 $error= "*Message legenth has to be less 255 and Email must be valid.";
            }else{
                 save_to_file();

                 $error = print_confirmation_page();
                 
               
                  die($error);
            }
        }
     
    }

    // require_once("views/form.php");

 $parameter = isset($_GET["page"]) ? $_GET["page"] : "";
  if ($parameter === "contact")
      require_once("views/form.php");
  else
      require_once("views/users.php");
       ?>
       </body>
       </html>


