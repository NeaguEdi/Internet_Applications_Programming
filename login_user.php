<!DOCTYPE html>
<html>
    <head>
    <meta http-equiv="Content-type" value="text/html" charset="UTF-8" />
    </head>
<body>

<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "users_database";

$user = $_POST["uname"];
$parola = $_POST["psw"];

if ($_SERVER["REQUEST_METHOD"]=="POST") 
{
    $con = mysqli_connect($host, $username, $password, $database);

    if (!$con) {
        die("Conexiunea a esuat: " . mysqli_connect_error());
    }
    echo "Conectare reusita!<br>";
    $query = "SELECT * FROM inregistrare_user WHERE Nume_utilizator='$user' AND Parola='$parola'";
    $result = mysqli_query($con, $query);
        if (mysqli_num_rows($result) > 0) {
            echo "Autentificare reușită!<br>";
            echo "Numele: " .$user."<br>";
            echo "Parola: " .$parola;
        } 
        else 
        {
            echo "Nume de utilizator sau parolă incorecte.";
        }
    mysqli_close($con);
}   
 else 
{
echo "Vă rugăm să completați numele de utilizator și parola.";
}

?>

</body>
</html>
