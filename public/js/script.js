
// Spinner
let preloader =  document.getElementById('spinner');
if (preloader) {
    alert("EROR");
    window.addEventListener('load', () => {
    preloader.remove()
    });
}