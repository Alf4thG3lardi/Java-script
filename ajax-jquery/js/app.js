$(document).ready(function () {

    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";

    $("#submit").click(function (e) { 
        e.preventDefault();
        id = $("#id").val();;
        pelanggan = $("#pelanggan").val();
        alamat = $("#alamat").val();
        telp = $("#telp").val();

        if (id == "") {
            insertData();
        } else {
            updateData();
        };

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");

    });

    $("#tambah").click(function (e) { 
        e.preventDefault();
        
        $(".modal-title").html("<p>Tambah Data</p>");
        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");

    });

    $("tbody").on("click", ".btn-del", function () {
        let id = $(this).attr("data-id");
        if (confirm("R u sure?")) {
            deleteData(id);
        }
    });

    $("tbody").on("click", ".btn-updt", function () {
        let id = $(this).attr("data-id");
        $("#exampleModalLabel").html("<p>Ubah Data</p>");
        selectUpdate(id);
    });

    function selectUpdate(id) {
        let idPelanggan = {
            idpelanggan : id
        };
        $.ajax({
            type: "post",
            url: "php/selectupdate.php",
            cache: false,
            data: JSON.stringify(idPelanggan),
            // dataType: "dataType",
            success: function (response) {
                let data = JSON.parse(response);

                $("#id").val(data.idpelanggan);
                $("#pelanggan").val(data.pelanggan);
                $("#alamat").val(data.alamat);
                $("#telp").val(data.telp);

            }
        });
    }

    function selectData() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            dataType: "json",
            success: function (response) {
                let output = "";
                let no = 1;
                $.each(response, function (key, value) { 
                    output  += `<tr>
                    <th>${no++}</th>
                    <td>${value.pelanggan}</td>
                    <td>${value.alamat}</td>
                    <td>${value.telp}</td>
                    <td><button type="button" class="btn btn-danger btn-del" data-id="${value.idpelanggan}">DEL</button></td>
                    <td><button type="button" class="btn btn-warning btn-updt" data-toggle="modal" data-target="#exampleModal" data-id="${value.idpelanggan}">UPDT</button></td>
                    </tr>`;
                });

                $("#isiData").html(output);
            }
        });
    }

    function insertData() {
        let dataPelanggan = {
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        };
        $.ajax({
            type: "post",
            url: "php/insert.php",
            cache: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`;
                $("#msg").html(out);
            }
        });

        selectData();
    }

    function updateData() {
        let dataPelanggan = {
            idpelanggan : id,
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        };
        $.ajax({
            type: "post",
            url: "php/update.php",
            cache: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`;
                $("#msg").html(out);
            }
        });

        selectData();
    }
    function deleteData(id) {
        let idPelanggan = {
            idpelanggan : id
        };
        $.ajax({
            type: "post",
            url: "php/delete.php",
            cache: false,
            data: JSON.stringify(idPelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`;
                $("#msg").html(out);
            }
        });

        selectData();
    }

    selectData()
});