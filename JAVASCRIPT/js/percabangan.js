if (false) {
    console.log('dijalankan jika benar');
}else {
    console.log('dijalankan ketika salah');
}
let nilai = 120, kkm = 60, lulus = "LULUS", gagal = "GK LULUS";
let batasatas = 100, batasbawah = 0;
let alert = 'invalid';
if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= kkm) {
        console.log(lulus);
    } else {
        console.log(gagal);
    }
} else {
    console.log(alert);
}

