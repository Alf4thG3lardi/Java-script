<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <script src="js/jquery.js"></script>
    <script src="js/app.js" defer></script>

    <title>Ajax-Jquery Ft. Bootstrap</title>
</head>
<body>

    <div class="container">
        <div class="row mt-4">
            <h1>Belajar Ajax Jquery Ft Bootstrap</h1>
        </div>
        <div class="row">
            <div class="col-4">
                <!-- Button trigger modal -->
                <button type="button" id="tambah" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Input Pelanggan
                </button>
            </div>
        </div>
        <div class="row mt-4">
            <!-- <div class="col-sm">
                <div class="row">
                    <h2>Input Data Pelanggan</h2>
                </div>
                <div id="msg">
                </div>
            </div> -->
            <div class="col-sm">
                <div class="row">
                    <h2>Data Pelanggan</h2>
                </div>
                <div class="row">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Pelanggan</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Telp</th>
                            <th scope="col">Hapus</th>
                            <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody id="isiData">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">None</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                        <div class="form-group">
                            <input type="text" hidden class="form-control" id="id" required placeholder="">
                            <label for="exampleInputEmail1">Nama Pelanggan</label>
                            <input type="text" class="form-control" id="pelanggan" required placeholder="Enter Any Name(required)">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Alamat</label>
                            <input type="text" class="form-control" id="alamat" required placeholder="Enter Your Address(required)">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Telp</label>
                            <input type="text" class="form-control" id="telp" required placeholder="Enter Your Number(required)">
                        </div>
                        <button type="submit" id="submit" class="btn btn-primary"  data-dismiss="modal">Submit</button>
                </form>
            </div>
            <!-- <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div> -->
            </div>
        </div>
        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>