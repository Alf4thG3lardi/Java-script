<?php

    require_once "koneksi.php";


    $data = stripslashes(file_get_contents("php://input"));
    $dataPelanggan = json_decode($data, true);

    $idpelanggan = $dataPelanggan['idpelanggan'];
    $pelanggan = $dataPelanggan['pelanggan'];
    $alamat = $dataPelanggan['alamat'];
    $telp = $dataPelanggan['telp'];

    if (!empty($pelanggan) && !empty($alamat) && !empty($telp)) {

        $sql = "UPDATE tblpelanggan set pelanggan = '$pelanggan', alamat = '$alamat', telp = '$telp' where idpelanggan = $idpelanggan";

        if ($result = mysqli_query($con, $sql)) {
            echo "Successfully Saved";
        } else {
            echo "Failed Successfully";
        }
    } else {
        echo "As empty as your bank account";
    }
?>