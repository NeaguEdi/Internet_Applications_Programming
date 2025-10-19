<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "users_database";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST["uname"];

    $con = mysqli_connect($host, $username, $password, $database);
    if (!$con) {
        die("Conexiunea a eșuat: " . mysqli_connect_error());
    }

    $query = "SELECT Parola FROM inregistrare_user WHERE Nume_utilizator='$user'";
    $result = mysqli_query($con, $query);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $parola = $row["Parola"];
        echo "<h3>Parola ta este: <span style='color: red;'>$parola</span></h3>";
    } else {
        echo "Utilizatorul nu a fost găsit!";
    }

    mysqli_close($con);
} else {
    echo "Formularul nu a fost trimis corect.";
}
?>