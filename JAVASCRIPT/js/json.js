document.querySelector("#klik").addEventListener("click", tampil);

function tampil() {
    // console.log("TES");
    let url = 'js/latihan.json';

    fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let output = "<h1>Data Menu</h1> <table> <th>Menu</th> <th>Harga</th> <th>Warna</th>";
        data.forEach(element => {
            output += `<tr>
                <td>${element.menu}</td>
                <td>${element.harga}</td>
                <td>${element.warna[0]}</td>
            </tr>`;
        });
        output += "</table>";
        document.querySelector("#isi").innerHTML= output;
    })
}
// let tblmenu = [
//     {
//     "idmenu" : 1, 
//     "idkategori" : 1,
//     "menu" : "apel manalagi", 
//     "harga" : 3000,
//     "warna" : ["merah", "hijau"],
//     "stok" : true, 
//     "keterangan" : null
//     },
//     {
//         "idmenu" : 2, 
//         "idkategori" : 1,
//         "menu" : "Pisang", 
//         "harga" : 2000,
//         "warna" : ["kuning", "hijau"],
//         "stok" : true, 
//         "keterangan" : null
//     }
// ]

// console.log(tblmenu[0]);