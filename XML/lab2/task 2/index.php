<?php
session_start();


$dom = new DOMDocument();
$filename = 'employees.xml';
$xmlDocument = file_get_contents($filename);
$dom->preserveWhiteSpace = false;
$dom->loadXML($xmlDocument);


if($_GET["action"] === "next"){

  $_SESSION["index"] += 1;

}


if($_GET["action"] === "prev" && $_SESSION["index"] > 0){

  $_SESSION["index"] -= 1;

}

if($_GET["action"] === "insert"){
  $employees = $dom->documentElement;

  var_dump($employees);
}

$index = $_SESSION["index"] ?? 0;





$employees = $dom->documentElement;

$employee = $employees->childNodes[$index];

$name = $employee->childNodes[0]->nodeValue;


$phones = $employee->childNodes[1];

$phone = $phones->childNodes[0]->nodeValue;


$addresses = $employee->childNodes[2];

$address = $addresses->childNodes[0];

$country = $address->childNodes[0]->nodeValue;
$city = $address->childNodes[1]->nodeValue;
$region = $address->childNodes[2]->nodeValue;
$buildingNumber = $address->childNodes[3]->nodeValue;
$street = $address->childNodes[4]->nodeValue;


$email = $employee->childNodes[3]->nodeValue;

var_dump($index);



?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

</head>
<body>
  
  <div class="container">
  <form action="index.php">

<div class="mb-3">
  <label for="name" class="form-label">name</label>
  <input type="text" class="form-control" name="name" id="name" value="<?php echo $name?>">
</div>

<div class="mb-3">
  <label for="phone" class="form-label">phone</label>
  <input type="text" class="form-control" name="phone" id="phone" value="<?php echo $phone?>">
</div>

<div class="mb-3">
  <label for="address" class="form-label">address</label>
  <input type="text" class="form-control" name="address" id="address" value="<?php echo "$country - $city - $region - $buildingNumber - $street "  ?>">
</div>

<div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input type="email" class="form-control" name="email" id="email" value="<?php echo $email?>">
</div>


<div class="mb-3">
  <input type="submit" class="btn btn-primary" name="action" value="prev">
  <input type="submit" class="btn btn-primary" name="action" value="next">
  <input type="submit" class="btn btn-primary" name="action" value="insert">
  <input type="submit" class="btn btn-primary" name="action" value="update">
  <input type="submit" class="btn btn-primary" name="action" value="delete">
  <input type="submit" class="btn btn-primary" name="action" value="save">
</div>


</form>

  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

</body>
</html>