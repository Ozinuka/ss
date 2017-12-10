 <?php session_start(); ?>

<?php 
    if ($_SESSION['connect'] != true)
    {
        include('bdd.php'); 

        $result = $bdd->query("select login, pass from users where login = '" . $_POST['login'] . "' and pass = '" . $_POST['password'] . "' ;");
        $data = $result->fetch();      
        if ($_POST['login'] == $data['login'] && $_POST['password'] == $data['pass'])
        {
            $_SESSION['connect'] = true ;
            $_SESSION['login'] = $data['login'] ;
            include('game.php') ;
        }
        else
        {
            echo ('Erreur');
        }
        $result->closeCursor(); // Termine le traitement de la requête
    }
    else if ($_SESSION['connect'] == true)
    {
        include('game.php');
    }
?>