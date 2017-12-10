<?php 
    include ('head.php');
?>

<body onload="startGame()">
    
               <canvas id="canvas" >
                <p>Désolé, votre navigateur ne supporte pas Canvas. Mettez-vous à jour</p>
                </canvas>

                <script src="js/test.js"></script>  

<br>
<button onmousedown="accelerate(-0.2)" onmouseup="accelerate(0.05)">ACCELERATE</button>
<p>Use the ACCELERATE button to stay in the air</p>
<p>How long can you stay alive?</p>
     
<?php    include('footer.php');  ?>
    
