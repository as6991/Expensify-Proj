<?php
function init () {
if ( isset( $_POST['submit'] ) ) {
        $firstname = $_REQUEST['user'];
        $lastname = $_REQUEST['user_pass'];
        echo 'Your name is ' . $lastname .' ' . $firstname;
}
}
init();
echo 'bruh';
?>
