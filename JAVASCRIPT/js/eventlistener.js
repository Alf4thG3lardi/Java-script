function coba() {
    a = document.querySelector('.isi');
    a.innerHTML = "EventListener";
    console.log('eventListener');
}
// judul.addEventListener("click", coba);
// judul.onmouseover = coba;

judul.onmouseover = function () {
    console.log("anon");
}