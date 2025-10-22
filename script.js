document.addEventListener("DOMContentLoaded", () => {
  // Klik gambar galeri
  const images = document.querySelectorAll(".gallery-grid img");
  images.forEach(img => {
    img.addEventListener("click", () => {
      alert(`Kegiatan: ${img.alt}`);
    });
  });

  // Navbar aktif otomatis
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
// Form kontak
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Terima kasih, pesan Anda telah terkirim!");
    contactForm.reset();
  });
}
