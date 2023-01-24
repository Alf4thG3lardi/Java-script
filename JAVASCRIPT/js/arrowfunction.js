let fungsi = function (nama) {
    console.log('belajar function ' + nama);
}

fungsi("Roy Roger");

let contoh = (nama)=>{
    console.log('Belajar Function ' + nama);
}

contoh("Budi");

let tambah = function (a, b) {
    return a + b;
}

console.log(tambah(1, 2));

let plus = (a, b) => a + b;

console.log(plus(3, 5));

let hasil = (a) => a + 6;

console.log(hasil(5));

let lagi = () => console.log('coba coba');

lagi();

let belajar = () =>{
    console.log('baris 1');
    console.log('baris 2');
    console.log('baris 3');
    console.log('baris 4');
}

belajar(); 

let nilai = 5;

let uji = (nilai < 7) ? ()=>(predikat = "gagal"):(predikat = 'lulus');
console.log(uji());