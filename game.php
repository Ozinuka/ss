<!-- <?php session_start(); ?> -->

<?php 
    include ('head.php');
    include ('menu.php');

/*
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Shinobi Survivor</title>
    <link rel="stylesheet" type="text/css" href="bootstrap/dist/css/bootstrap.css">
    
</head>
*/
?>

<body>
    <?php
        if ($_SESSION['connect'] = true )
            {
    ?>
               <canvas id="canvas">
                <p>Désolé, votre navigateur ne supporte pas Canvas. Mettez-vous à jour</p>
                </canvas>

                <script src="js/game.js"></script>  
    <?php
            }
        else 
        {
            echo ('You must sign up for play !');
            include ('login.php'); 
        }
     
        include('footer.php'); 
    
    ?>

