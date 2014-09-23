<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title></title>
    <link href="css/style.css" media="screen" rel="stylesheet" type="text/css"/>
</head>
<body>

<a href="index.html">zurück</a>
<br>
<br>


<form action="formular.php" method="get" >
 
<p>Was ich kann:
<input type="text" name="faehigkeit" />
</p>
 
<p>
<input type="submit" value="absenden" />
</p>
 
</form>


<?php
echo  $_GET['faehigkeit'];
?>

 
</body>
</html>