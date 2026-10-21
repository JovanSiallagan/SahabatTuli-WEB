# Sahabat Tuli — Website Resmi

Landing page resmi untuk **Sahabat Tuli**, aplikasi mobile penghubung percakapan langsung antara Teman Tuli dan Teman Dengar melalui teknologi konversi Suara ke Teks (*Voice to Text*) dan Teks ke Suara (*Text to Voice*) secara real-time.

---

## 🚀 Teknologi yang Digunakan

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library UI**: [React](https://react.dev/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Tipografi**: [Google Fonts](https://fonts.google.com/) (*Plus Jakarta Sans* & *Inter* via `next/font/google`)
- **Animasi**: Native Scroll Reveal dengan `IntersectionObserver` & Tailwind CSS Transitions

---

## 📂 Struktur Direktori

```text
├── app/
│   ├── globals.css      # Konfigurasi Tailwind CSS v4, tema brand, scroll behavior
│   ├── icon.png         # Favicon aplikasi (format PNG)
│   ├── layout.tsx       # Root layout, konfigurasi Google Font, SEO metadata
│   └── page.tsx         # Komponen halaman landing page utama
├── components/
│   └── Reveal.tsx       # Komponen animasi transisi saat elemen di-scroll
├── public/              # Aset gambar, mockup ponsel, dan logo transparan
├── package.json
└── tsconfig.json
```

---

## 💻 Menjalankan Proyek Secara Lokal

1. **Clone repository ini**:
   ```bash
   git clone https://github.com/JovanSiallagan/SahabatTuli-WEB.git
   cd SahabatTuli-WEB
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 📦 Membangun untuk Produksi

```bash
npm run build
npm run start
```

---

## 📱 Kontak & Dukungan

- **Email**: [kontak@sahabattuli.id](mailto:kontak@sahabattuli.id)
- **Instagram**: [@sahabattuli.id](https://www.instagram.com/sahabattuli.id/)
- **Hak Cipta**: © 2026 Sahabat Tuli. Seluruh hak cipta dilindungi.
