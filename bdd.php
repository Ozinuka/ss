<?php
try
{
    // Sous WAMP (Windows)
    $bdd = new PDO('mysql:host=localhost;dbname=shinobi;charset=utf8', 'root', '');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
?>