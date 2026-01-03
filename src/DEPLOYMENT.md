# 🚀 Moovly - Movie Catalog Deployment

Dokumen ini berisi detail publikasi aplikasi **Moovly** sebagai bagian dari pemenuhan tugas akhir mata kuliah Front End.

## 📱 Informasi Aplikasi
- **Nama Aplikasi**: Moovly
- **Deskripsi**: Aplikasi katalog film modern yang responsif, dilengkapi fitur pencarian, kategori genre, serta dukungan Mode Gelap (Dark Mode) dan Mode Terang (Light Mode).
- **Framework**: React.js (Vite)
- **API Source**: The Movie Database (TMDB)

## 🌍 URL Publik
Aplikasi telah berhasil dideploy dan dapat diakses secara publik melalui tautan berikut:
👉 **[TULIS_URL_VERCEL_KAMU_DISINI]**
*(Contoh: https://moovly-project.vercel.app)*

## 📸 Screenshot Tampilan

### 🖥️ Tampilan Desktop (Web)
![Desktop View](./public/screenshots/desktop-view.png)
*Keterangan: Layout grid simetris dan terpusat (center) untuk pengalaman pengguna desktop yang maksimal.*

### 📱 Tampilan Mobile
![Mobile View](./public/screenshots/mobile-view.png)
*Keterangan: Desain responsif yang menyesuaikan ukuran layar smartphone dengan navigasi yang ringkas.*

---

## 🛠️ Alasan Pemilihan Platform Deployment

Saya memilih untuk melakukan deploy menggunakan **Vercel** karena alasan teknis berikut:

1. **Optimasi Native Vite**: Vercel dikembangkan oleh tim yang sangat memahami ekosistem frontend modern, sehingga proses *build* aplikasi berbasis Vite berjalan lebih stabil dan cepat.
2. **CI/CD (Continuous Integration/Deployment)**: Vercel terhubung langsung dengan repository GitHub saya. Setiap kali saya melakukan *push* kode, Vercel secara otomatis melakukan pembaharuan pada URL publik.
3. **Global Edge Network**: Memungkinkan aplikasi dimuat dengan sangat cepat karena server Vercel tersebar di berbagai lokasi geografis (Edge Runtime).
4. **Environment Variables Security**: Vercel memudahkan pengelolaan API Key TMDB secara aman melalui pengaturan *Environment Variables*, sehingga kunci API tidak terekspos langsung di kode publik.

---
**Disusun oleh:** Marcellino  
**Tahun:** 2026