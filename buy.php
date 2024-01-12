<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $txt = "txt/buy.txt"; 
    if (isset($_POST['user']) && isset($_POST['phone']) && isset($_POST['choice'])) { 
        $fh = fopen($txt, 'a'); 
        $txt=$_POST['user'].' - '.$_POST['phone'].' - '.$_POST['choice'];
        fwrite($fh, $txt . PHP_EOL);
        fclose($fh); 
    }
    $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'prices.html';
    header("Location: $redirect");
    exit();
    ?>
</body>
</html>
