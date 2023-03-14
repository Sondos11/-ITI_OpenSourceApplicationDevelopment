<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Page</title>
</head>
<style>
    @import url("https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@600&display=swap");
    body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(45deg, greenyellow, dodgerblue);
    font-family: "Sansita Swashed", cursive;
}
.center {
    position: relative;
    padding: 50px 50px;
    background: #fff;
    border-radius: 10px;
}
.center h1 {
    font-size: 2em;
    border-left: 5px solid dodgerblue;
    padding: 5px;
    color: #000;
    letter-spacing: 5px;
    margin-bottom: 90px;
    font-weight: bold;
    padding-left: 10px;
}
.center .row {
    position: relative;
    width: 300px;
    height: 80px;
    margin-bottom: 50px;
}
.center .row input {
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    border: 2px solid #000;
    outline: none;
    background: none;
    padding: 5px;
    border-radius: 10px;
    font-size: 1.2em;

}
.center .row textarea{
position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    border: 2px solid #000;
    outline: none;
    background: none;
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;

}
.center .row:last-child {
    margin-bottom: 50px;
}

.center .row label {
    position: absolute;
    top: -55px;
    left: 20px;
    font-size: 1em;
    transition: 0.6s;
    
}
#submit{

    width: 90px;
    height:40px;
    background: dodgerblue;
    color: #fff;
    border: #fff;
     border-radius: 10px;
   
}

#submit:hover {
    background: linear-gradient(45deg, greenyellow, dodgerblue);
}

#clear{

    width: 90px;
    height:40px;
    background: dodgerblue;
    color: #fff;
    border: #fff;
    margin-left:120px;
     border-radius: 10px;
   
}

#clear:hover {
    background: linear-gradient(45deg, greenyellow, dodgerblue);
}
#after_submit{
color:red;
position: relative;
bottom:70px;
}

</style>
<body>
    <div class="center">
    <h1> Contact Form </h1>
    <div id="after_submit">
        <?php echo $error ?? NULL ?>

    </div>
    <form id="contact_form" action="index.php" method="POST" enctype="multipart/form-data">

        <div class="row">
            <label class="required" for="name">Your name:</label><br />
            <input id="name" class="input" name="name" type="text" value="<?php echo remember_variable("name"); ?>" size="30" /><br />

        </div>
        <div class="row">
            <label class="required" for="email">Your email:</label><br />
            <input id="email" class="input" name="email" type="text" value="<?php echo remember_variable("email"); ?>" size="30" /><br />

        </div>
        <div class="row">
            <label class="required" for="message">Your message:</label><br />
            <textarea id="message" class="input" name="message" rows="7" cols="30" ><?php echo remember_variable("message"); ?></textarea><br />

        </div>

        <input id="submit" name="submit"  type="submit" value="Send email" />
        <input id="clear" name="clear" onclick="clearBtn()" type="reset" value="clear form" />
    </form>
</div>
  
</body>
</html>