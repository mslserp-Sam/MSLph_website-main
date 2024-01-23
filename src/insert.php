<?php 
if(isset($_POST['createAccount'])){
    $playerGivenName     = mysqli_real_escape_string($connection, $_POST['mlPlayerName']);
    $playerSurname       = mysqli_real_escape_string($connection, $_POST['mlPlayerSurname']);
    $playerImage         = mysqli_real_escape_string($connection, '');
    $playerBday          = mysqli_real_escape_string($connection, $_POST['mlPlayerBday']);
    $playerAge           = mysqli_real_escape_string($connection, $_POST['mlPlayerAge']);
    $playerGender        = mysqli_real_escape_string($connection, $_POST['mlPlayerGender']);
    $playerContact       = mysqli_real_escape_string($connection, $_POST['mlPlayerContact']);
    $playerEmail         = mysqli_real_escape_string($connection, $_POST['mlPlayerEmail']);
    $playerFacebook      = mysqli_real_escape_string($connection, '');
    $playerDiscord       = mysqli_real_escape_string($connection, '');

    
    $playerSY            = mysqli_real_escape_string($connection, $_POST['mlPlayerSY']);
    $playerArea          = mysqli_real_escape_string($connection, $_POST['mlPlayerArea']);
    $playerSchool        = mysqli_real_escape_string($connection, $_POST['mlPlayerSchool']);
    $playerForm          = mysqli_real_escape_string($connection, '');
    $playerStuID         = mysqli_real_escape_string($connection, $_POST['mlPlayerStuID']);
    $playerCourse        = mysqli_real_escape_string($connection, $_POST['mlPlayerCourse']);

    $playerIGN           = mysqli_real_escape_string($connection, $_POST['mlPlayerIGN']);
    $playerServer        = mysqli_real_escape_string($connection, $_POST['mlPlayerServer']);
    $playerUserID        = mysqli_real_escape_string($connection, $_POST['mlPlayerID']);
    $playerSquad         = mysqli_real_escape_string($connection, $_POST['mlPlayerSquad']);
    $playerRank          = mysqli_real_escape_string($connection, $_POST['mlPlayerRank']);
    $playerRole          = mysqli_real_escape_string($connection, $_POST['mlPlayerRole']);


    $playerHero1         = mysqli_real_escape_string($connection, $_POST['mlPlayerHero1']);
    $playerHero2         = mysqli_real_escape_string($connection, $_POST['mlPlayerHero2']);
    $playerHero3         = mysqli_real_escape_string($connection, $_POST['mlPlayerHero3']);



    $username            = mysqli_real_escape_string($connection,$_POST['username']);
    $password            = mysqli_real_escape_string($connection,$_POST['password']);
    
    

    $playerStatus        = mysqli_real_escape_string($connection, 'Idle');
    $playerSLRole        = mysqli_real_escape_string($connection, 'Member');
    $playerVerified      = mysqli_real_escape_string($connection, '');
    $playerPoints        = mysqli_real_escape_string($connection, '0');

    
    

    if(empty($username) || empty($username) || empty($password)){
        header ("location:http://localhost:3000/RegistrationError");
        exit ();
    }elseif(mysqli_num_rows(mysqli_query($connection, "SELECT * FROM msl_login WHERE username = '$username'"))>0){
        header ("location:http://localhost:3000/RegistrationError");
        exit ();
    }else{
        $password   = password_hash($password, PASSWORD_DEFAULT);

        $userLogin          = "INSERT INTO msl_login (username, password) VALUES ('$username', '$password')";
        $userCredentials    = "INSERT INTO msl_user (username, givenname, surname, userimg, birthday, age, gender, contact, ign, squad, rank, role, mlserver, mlid, status, slrole, verified, points) 
        VALUES ('$username', '$playerGivenName', '$playerSurname', '$playerImage', '$playerBday', '$playerAge', '$playerGender', '$playerContact', '$playerIGN', '$playerSquad', '$playerRank', '$playerRole', '$playerServer', '$playerUserID', '$playerStatus', '$playerSLRole', '$playerVerified', '$playerPoints')";
        $userSchool         = "INSERT INTO msl_school (username, area, university, schoolyear, course, studentid, regform) 
        VALUES ('$username', '$playerArea', '$playerSchool', '$playerSY', '$playerCourse', '$playerStuID', '$playerForm')";
        $userHero           = "INSERT INTO msl_hero (username, hero1, hero2, hero3) 
        VALUES ('$username', '$playerHero1', '$playerHero2', '$playerHero3')";
        $userSocials        = "INSERT INTO msl_socials (username, gmail, facebook, discord) VALUES ('$username', '$playerEmail', '$playerFacebook', '$playerDiscord')";


        mysqli_query($connection, $userLogin);
        mysqli_query($connection, $userCredentials);
        mysqli_query($connection, $userSocials);
        mysqli_query($connection, $userSchool);
        mysqli_query($connection, $userHero);


        header ("location:http://localhost:3000/");
        exit ();
    }
}
?>