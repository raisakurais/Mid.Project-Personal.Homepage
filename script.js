/* 
   Tugas Pemrograman Web - IFN512
   Nama: Raisa Kurais
*/

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // AJAX: Mengambil data artikel (Bahasa Indonesia)
    // ==========================================
    function loadArtikel() {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                var blogContainer = document.getElementById("blog-container");
                if (!blogContainer) return;

                // Daftar judul dan isi artikel buatan sendiri agar tidak "aneh"
                var judulLokal = [
                    "Perkembangan Artificial Intelligence di 2026",
                    "Pentingnya Responsible AI dalam Pengembangan Software"
                ];
                var isiLokal = [
                    "AI kini tidak hanya mengolah data, tapi juga memahami konteks emosi manusia dengan lebih baik.",
                    "Sebagai mahasiswa informatika, kita harus memastikan AI yang dibangun menjunjung tinggi etika."
                ];

                var htmlContent = "<br><center><font face='Georgia' size='5' color='#3C2113'>Artikel Informatika Terbaru (AJAX)</font></center><br>";

                for (var i = 0; i < 2; i++) {
                    htmlContent += `
                        <table width="100%" bgcolor="#D1C5B8" cellpadding="30" border="1" bordercolor="#AA8668" style="margin-bottom:20px;">
                            <tr>
                                <td>
                                    <font face="Arial" size="4" color="#785036"><b>0${i + 4}. ${judulLokal[i]}</b></font><br><br>
                                    <p align="justify">
                                        <font face="Verdana" size="2">${isiLokal[i]}</font>
                                    </p>
                                    <button onclick="bacaArtikel('${judulLokal[i]}')" style="background:#3C2113; color:#D1C5B8; border:none; padding:8px 15px; cursor:pointer;">
                                        Baca Selengkapnya
                                    </button>
                                </td>
                            </tr>
                        </table>`;
                }
                blogContainer.innerHTML += htmlContent;
            }
        };

        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?_limit=2", true);
        xhr.send();
    }

    // ==========================================
    // EVENT: Klik gambar galeri (Muncul Nama Kegiatan)
    // ==========================================
    var images = document.querySelectorAll(".gallery-grid img");

    for (var i = 0; i < images.length; i++) {
        images[i].style.cursor = "pointer";
        images[i].style.transition = "0.3s";

        images[i].onclick = function () {
            this.style.border = "5px solid #3C2113";
            // Mengambil teks dari elemen <b> yang ada di bawah gambar
            var namaKegiatan = this.parentNode.querySelector("b").innerText; 
            alert("Detail Kegiatan: " + namaKegiatan);
        };

        images[i].onmouseover = function () { this.style.opacity = "0.7"; };
        images[i].onmouseout = function () { this.style.opacity = "1"; };
    }

    // ============================
    // EVENT: Smooth Scroll & Nav
    // ============================
    window.bacaArtikel = function (judul) { alert("Membaca artikel: " + judul); };

    var links = document.querySelectorAll("nav a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function (e) {
            var target = this.getAttribute("href");
            if (target.includes("#")) {
                var id = target.split("#")[1];
                var tujuan = document.getElementsByName(id)[0];
                if (tujuan) {
                    e.preventDefault();
                    window.scrollTo({ top: tujuan.offsetTop, behavior: "smooth" });
                }
            }
        };
    }

    loadArtikel();
});