// Generate random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = document.getElementById("guess").value;
    const resultElement = document.getElementById("result");
    const surpriseElement = document.getElementById("surprise");

    if (guess == secretNumber) {
        resultElement.innerHTML = `Selamat! Anda berhasil menebak angka ${secretNumber} dalam ${attempts} percobaan.`;
        resultElement.style.color = "#5bc0de";
        surpriseElement.innerHTML = "Happy Anniversary 2 Tahun, Jarabul! 🌹";
        surpriseElement.style.display = "block"; // Menampilkan kejutan

        // Menambahkan gambar bunga sebagai hadiah
        const flowerImage = document.createElement("img");
        flowerImage.src = "Foto1.jpg"; // Ganti dengan path gambar bunga Anda
        flowerImage.alt = "Bunga Hadiah";
        flowerImage.style.width = "150px";
        flowerImage.style.marginTop = "20px";

        document.body.appendChild(flowerImage); // Menambahkan gambar ke body
    } else {
        attempts++;
        if (guess < secretNumber) {
            resultElement.innerHTML = "Tebakan terlalu rendah. Coba lagi!";
            resultElement.style.color = "#d9534f";
        } else {
            resultElement.innerHTML = "Tebakan terlalu tinggi. Coba lagi!";
            resultElement.style.color = "#d9534f";
        }
    }
}

