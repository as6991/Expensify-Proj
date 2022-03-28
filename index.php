<?php
if ( isset( $_POST['submit'] ) ) {
        $username = $_POST['user'];
        $password = $_POST['user_pass'];
        echo 'Your name is ' . $username .' ' . 'Your password is ' . $password;
}
?>
