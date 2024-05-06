// Belajar JS Revou

// function replaceName() {
// let name = prompt("Siapa nama Anda?", "");
// document.getElementById("name").innerHTML = name;
// }

// document.getElementById("gantinama").addEventListener("click", function() {
//     replaceName();
// })


document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan elemen-elemen yang diperlukan
    var form = document.forms["message-form"];
    var nameInput = form.elements["name-input"];
    var errorName = document.getElementById("error-name");
    var nameSpan = document.getElementById("name");

    // Menyembunyikan pesan kesalahan awal
    errorName.style.display = "none";

    // Menambahkan event listener untuk saat form disubmit
    form.addEventListener("submit", function(event) {
        // Menghentikan aksi default dari form (pengiriman)
        event.preventDefault();

        // Validasi input
        if (nameInput.value === "") {
            // Jika input kosong, tampilkan pesan kesalahan
            errorName.style.display = "block";
        } else {
            // Jika input tidak kosong, sembunyikan pesan kesalahan
            errorName.style.display = "none";

            // Ubah teks pada elemen span menjadi nilai input
            nameSpan.textContent = nameInput.value;
        }
    });
});
