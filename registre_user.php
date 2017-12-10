
<?php 
    if ($_SESSION['connect'] != true)
    {
        include('bdd.php'); 
        
        $result = $bdd->query("select login, pass from users where login = '" . $_POST['login'] . "' ;");
        $data = $result->fetch();      
        if ($_POST['login'] == $data['login'])
        {
?>
            <script language="javascript"> alert("This login is already exist, please choose an another login."); </script>
<?php  
            $result->closeCursor();
            $_SESSION['connect'] = false;
            include('register.php');
        }
        else
        {
        /*
            $req="INSERT INTO users('" . $_POST['login'] . "', '" . $_POST['password'] . "', '" . $_POST['mail'] . "', '" . $_POST['birthDate'] . "')";
            echo ($req);
        */
            $bdd->exec('INSERT INTO USERS VALUES (\'' . $_POST['login'] . '\', \'' . $_POST['password'] . '\', \'' . $_POST['mail'] . '\', \'' . $_POST['birthDate'] . '\');') or die(print_r($bdd->errorInfo()));
?>        
            <script language="javascript"> alert("You have been registred succesly."); </script>
<?php
            $_SESSION['connect'] = true;
            $_SESSION['login'] = $_POST['login'];
            include('game.php');
        }
    }
    else if ($_SESSION['connect'] == true)
    {
        include('game.php');
    }
?>

 