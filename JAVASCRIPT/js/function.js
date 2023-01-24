function coba() {
    let belajar = 'saya belajar js';
    console.log(belajar); 
    console.log('js itu gampang'); 
}

for (let i = 0; i < 10; i++) {
    coba();
}

function luasPersegi(l, p) {
    let hasil = l * p;

    console.log(hasil);
}

luasPersegi(2, 5);

function lingkaran(r) {
    let luas = 3.14 * r * r;
    return luas
}

const tinggi = 5;
let tabung = lingkaran(7) * tinggi;

function output(a) {
    return a;
}

// console.log(tabung);
console.log(output(109));