<?php
    $host="localhost";
    $username="root";
    $password="";
    $database="users_database";

if($_SERVER["REQUEST_METHOD"]=="POST")
{ 
    $user = $_POST["user"];
    $parola = $_POST["parola"];
    $nume = $_POST["nume"];
    $prenume = $_POST["prenume"];
    $email = $_POST["email"];
    $telefon =$_POST["telefon"];
    
    if (isset($_FILES["pozaDeProfil"]) && $_FILES["pozaDeProfil"]["error"] == 0) {
    $pozaDeProfil = file_get_contents($_FILES["pozaDeProfil"]["tmp_name"]);
    } 
    else 
    {
        $pozaDeProfil = null;
    }
    $gen = $_POST["genul"];
    $copil = $_POST["copil"];
    $data_nasterii = $_POST["data_nasterii"];
    $textArea =$_POST["textArea"];


$con=mysqli_connect($host,$username,$password);
if(!$con)
{
    die("Conex nu a putut fi realizata! ".mysqli_connect_error()."<br>");
}
    $sql="CREATE DATABASE IF NOT EXISTS $database";
    if(mysqli_query($con,$sql)){
        echo "A fost creata baza de date!"."<br>";
    }
    else
    {
        echo "Eroare!Baza de date nu a fost creata:".mysqli_error($con)."<br>";
    }

    mysqli_select_db($con,$database);

    $sql="CREATE TABLE IF NOT EXISTS inregistrare_user
    (
        ID int AUTO_INCREMENT,
        PRIMARY KEY(ID),
        Nume_utilizator varchar(50),
        Parola varchar(20),
        Nume varchar(50),
        Prenume varchar(50),
        Email varchar(50),
        Telefon varchar(10),
        PozaDeProfil LONGBLOB,
        Genul varchar(8),
        Copil varchar(2),
        DataNasterii DATE,
        Descriere varchar(200)
    )
    ";


    if(!mysqli_query($con,$sql))
    {
        die("Eroare la crearea tabelului:".mysqli_error($con)."<br>");
    }
    else{
        echo "Succes!Tabelul a fost creat"."<br>";
    }

    $sql="INSERT INTO inregistrare_user(Nume_utilizator,Parola,Nume,Prenume,Email,Telefon,PozaDeProfil,Genul,Copil,DataNasterii,Descriere) 
    VALUES ('$user','$parola','$nume','$prenume','$email','$telefon','$pozaDeProfil','$gen','$copil','$data_nasterii','$textArea')";
    if(mysqli_query($con,$sql))
    {
        echo "Succes!Am inserat in baza de date"."<br>";
    }
    else{
        echo "Eroare!Nu s-a inserat in baza de date:".mysqli_error($con)."<br>";
    }

    mysqli_close($con);
}

?>