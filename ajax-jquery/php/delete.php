<?php

    require_once "koneksi.php";


    $data = stripslashes(file_get_contents("php://input"));
    $idPelanggan = json_decode($data, true);

    $idpelanggan = $idPelanggan['idpelanggan'];

    if (!empty($idpelanggan)) {

        $sql = "DELETE FROM tblpelanggan where idpelanggan = $idpelanggan";

        if ($result = mysqli_query($con, $sql)) {
            echo "Successfully Deleted";
        } else {
            echo "Failed Successfully";
        }
    } else {
        echo "Something went wong";
    }
?>