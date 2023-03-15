<?php

require_once('vendor/autoload.php');
require_once("views/form.php");

use Aws\s3\s3Client;
use Aws\Credentials\Credentials;
use Aws\Exception\AwsException;

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {


    $credentials = new Credentials(Access_Key,Secret_Key);

    $s3 = new s3Client([
        'version' => 'latest',
        'region' => Buket_Region,
        'credentials' => $credentials
    ]);

    $file_name = $_FILES["file"]["name"];
    $ext = pathinfo($file_name, PATHINFO_EXTENSION);
    $new_file_name = uniqid() . ".$ext";
    $file_temp = $_FILES['file']['tmp_name'];

    try {
        $result = $s3->putObject([
            'Bucket' => Buket_Name,
            'Key' => $new_file_name,
            'Body' => fopen($file_temp, 'r')
        ]);

        echo ($result['ObjectURL']);
    } catch (AwsException $e) {
        echo $e->getMessage();
    }
}












// require_once("config.php");
// use Aws\S3\S3Client;

// $s3 = S3Client::factory(array(
//     'credentials' => array(
//         'key' => Access_Key,
//         'secret' => Secret_Key,
//     ), 'region' => Buket_Region ,
//     'version' => 'latest'
// ));

// try {
//     $id=uniqid();
//     $s3->upload(Buket_Name,$id,fopen('contacts.txt',"r+"));
// } catch (Aws\S3\Exception\S3Exception $e){
//     echo "There was an error uploading the file . \n";
// }