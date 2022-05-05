<?php
if ( isset( $_POST['submit'] ) ) {
        $username = $_POST['user'];
        $password = $_POST['user_pass'];
        if (($username == 'expensifytest@mailinator.com' or $username == ' expensifytest@mailinator.com') && $password == 'hire_me'){               
                        $res-> status = "Success";
                        $myJSON = json_encode($res);
                        echo $myJSON;
        }
        else {
                echo 'Invalid Username or Password! Try Again!';
        }
}

?>

