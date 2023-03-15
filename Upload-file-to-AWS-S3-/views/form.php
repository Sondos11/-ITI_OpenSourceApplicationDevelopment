<html>
  <head>
    <title>Upload file to AWS-S3</title>
    <style>

          @import url("https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@600&display=swap");
         body {
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           min-height: 80vh;  
           background: linear-gradient(45deg, greenyellow, dodgerblue);
           font-family: "Sansita Swashed", cursive;
         }
         
      h2 {
        padding-right: 120px;
        color:purple;
      }
      .container input{
        box-shadow: 2px 2px #818a84;
        border: 2px solid #818a84;
        padding: 20px;
        margin: 5px;
        font-size: 1.2em;

      }
      .container button {
        border-radius: 5px;
        border: none;
        padding: 22px;
        margin: 10px;
        background: dodgerblue;
        color: #fff;
        border: #fff;
        border-radius: 10px;
        cursor: pointer;
      }
      .container button:hover{
         background: linear-gradient(45deg, greenyellow, dodgerblue);
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Upload file</h2>
      <form method="post" enctype="multipart/form-data" action="../index.php">
        <input type="file" name="file" required />
        <button type="submit" name="submit">Upload file</button>
      </form>
    </div>
  </body>
</html>