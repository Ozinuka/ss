<!-- <?php session_start(); ?> -->

<?php 
    include ('head.php');
    include ('menu.php');
?>

<body>
    <?php
        if ($_SESSION['connect'] = true )
            {
    ?>
               <div id="divCanvas">
						<canvas width="800" height="600" id="shinobiSurvivorCanvas"></canvas>
				</div>
					 
				<!-- Import Librairys -->
				<script src="libs/jquery-3.2.1.min.js"></script>
				<script src="libs/easeljs.min.js"></script>
				<!-- Bibliothèque utilitaire -->
				<script src="js/easelJsUtils.js"></script>
				<!-- Script of the game -->
				<script src="js/shinobiGame.js"></script>
    <?php
            }
        else 
        {
            echo ('You must sign up for play !');
            include ('login.php'); 
        }
     
        include('footer.php'); 
    
    ?>

