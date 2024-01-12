<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $txt = "txt/application.txt"; 
    if (isset($_POST['user']) && isset($_POST['phone'])) { 
        $fh = fopen($txt, 'a'); 
        $txt=$_POST['user'].' - '.$_POST['phone'];
        fwrite($fh, $txt . PHP_EOL);
        fclose($fh); 
    }
    $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
    header("Location: $redirect");
    exit();
    ?>
</body>
</html>
