<?php session_start(); ?>

<?php    
    if($_SESSION['connect'] != true)
    {

        include('head.php');  
?>
    <body>
<?php 
        include('menu.php'); 
?>        
        <div class="container">
          <form class="form-register" method="post" action="registre_user.php" >
                <h2 class="form-signin-heading">Register</h2>
                  <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="inputLogin" class="sr-only">Login</label>
                            <input type="text" name="login" id="inputLogin" class="form-control" placeholder="User Login" required autofocus>
                        </div>
                      </div>                   
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="inputPassword" class="sr-only">Password</label>
                            <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="inputEmail" class="sr-only">Email address</label>
                            <input type="email" name="mail" id="inputEmail" class="form-control" placeholder="Email address" required>
                        </div>
                     </div>
                  <div class="form-group row">
                      <div class="col-md-6 mb-3">
                        <label for="date-input">Birth Date</label>
                        <input class="form-control" name="birthDate" type="date" value="1991-06-08" id="date-input">
                      </div>
                  </div>
                      <button class="btn btn-primary" type="submit">Register</button>
          </form> 
        </div> <!-- /container -->
        
<?php 
        include('scripts.php'); 
        include('footer.php'); 
    }
else if($_SESSION['connect'] == true)
{
    include('game.php') ;
}



