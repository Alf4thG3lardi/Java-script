<?php

    require_once "koneksi.php";


    $data = stripslashes(file_get_contents("php://input"));
    $dataPelanggan = json_decode($data, true);

    $pelanggan = $dataPelanggan['pelanggan'];
    $alamat = $dataPelanggan['alamat'];
    $telp = $dataPelanggan['telp'];

    if (!empty($pelanggan) && !empty($alamat) && !empty($telp)) {

        $sql = "INSERT INTO tblpelanggan VALUES(null,'$pelanggan','$telp','$alamat')";

        if ($result = mysqli_query($con, $sql)) {
            echo "Successfully Saved";
        } else {
            echo "Failed Successfully";
        }
    } else {
        echo "As empty as your bank account";
    }
?>