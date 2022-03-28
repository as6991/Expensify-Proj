<?php
if ( isset( $_POST['submit'] ) ) {
        $username = $_POST['user'];
        $password = $_POST['user_pass'];
        if ($username == 'expensifytest@mailinator.com' && $password == 'hire_me'){
        echo 'Your name is ' . $username ;
        echo "<br>";
        echo  'Your password is ' . $password;
        }
        else {
                echo 'Invalid Username or Password! Try Again!';
        }
}
?>
