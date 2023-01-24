let tblmenu = [
    {idmenu: 1, idkategori: 1, menu: "Apple", gambar: "apel.jpg", harga:3000 },
    {idmenu: 2, idkategori: 1, menu: "Apple Pie", gambar: "pie.jpg", harga: 25000 },
    {idmenu: 3, idkategori: 2, menu: "Hot Chocolate", gambar: "coklat.jpg", harga:8000 },
    {idmenu: 4, idkategori: 2, menu: "The Milk", gambar: "milk.jpg", harga:15000 },
];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
                <div class="image">
                    <img src="img/${kolom.gambar}" height="200px" alt="" srcset="">
                </div>
                <div class="title">
                    <h1>${kolom.menu}</h1>
                </div>
                <div class="harga">
                    <h2>${kolom.harga}</h2>
                </div>
                <div class="btn-beli">
                    <button data-idmenu="${kolom.idmenu}">Beli</button>
                </div>
            </div>`;
});
let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

console.log(tampil);

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"])
        // car  t.push(btnbeli[index].dataset["idmenu"]);
        tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    }
}

console.log(cart);
