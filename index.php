<?php
if ( isset( $_POST['submit'] ) ) {
        $firstname = $_POST['user'];
        $lastname = $_POST['user_pass'];
        echo 'Your name is ' . $lastname .' ' . $firstname;
}
echo 'bruh';
?>
