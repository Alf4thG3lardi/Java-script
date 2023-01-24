function tampil(b) {
    let a = document.querySelector("p");
    a.innerText="Belajar " + b;
    console.log('KNTL');
}

judul.onclick = function () {
    console.log('Event with id')
    document.querySelector('.isi').innerHTML="--"
}