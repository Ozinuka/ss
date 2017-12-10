<!-- <?php session_start() ?> -->
  
    <?php include('head.php');  ?>
    
    <body>
        <?php include('menu.php'); ?>
        
        <div class="container">

          <form class="form-signin" method="post" action="log_user.php">
                
                <h2 class="form-signin-heading">Please sign in</h2>
              
                <label for="inputLogin" class="sr-only">Your login</label>
                <input type="text" name="login" id="inputLogin" class="form-control" placeholder="User Login" required autofocus>
                
                <label for="inputPassword" class="sr-only">Your password</label>
                <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>

        </div> <!-- /container -->
        
        <?php include('scripts.php'); ?>
      
     <?php include('footer.php'); ?>   