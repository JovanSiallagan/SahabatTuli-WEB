"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Home() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Navigasi */}
      <header className="border-b border-slate-800 bg-[#001F3F] sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Sahabat Tuli */}
          <a
            href="/"
            onClick={scrollToTop}
            className="flex items-center cursor-pointer"
            aria-label="Sahabat Tuli"
          >
            <Image
              src="/sahabattuli%20LOGO%20transparent.png"
              alt="Logo Sahabat Tuli"
              width={229}
              height={106}
              priority
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Menu Link */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
            <button
              type="button"
              onClick={scrollTo("fitur")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Fitur
            </button>
            <button
              type="button"
              onClick={scrollTo("cara-kerja")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cara Kerja
            </button>
            <button
              type="button"
              onClick={scrollTo("download")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Unduh Aplikasi
            </button>
            <button
              type="button"
              onClick={scrollTo("donasi")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Dukungan & Donasi
            </button>
            <button
              type="button"
              onClick={scrollTo("kontak")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Kontak
            </button>
          </nav>

          {/* Tombol Aksi: Unduh Aplikasi */}
          <div>
            <button
              type="button"
              onClick={scrollTo("download")}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg bg-brand-blue hover:bg-brand-blueDark text-white transition-colors shadow-sm cursor-pointer"
            >
              Unduh APK Android
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-brand-lightBlue/40 via-white to-white border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Kolom Kiri: Penjelasan Produk */}
              <div className="lg:col-span-7 space-y-6">
                <Reveal direction="up" delay={0}>
                  <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-tight tracking-tight">
                    Ubah Suara Jadi Teks, dan Teks Jadi Suara.
                  </h1>
                </Reveal>

                <Reveal direction="up" delay={100}>
                  <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                    Sahabat Tuli dirancang agar percakapan sehari-hari antara Teman Tuli dan Teman Dengar mengalir tanpa hambatan. Cukup bicara atau ketik, percakapan langsung terdengar atau terbaca seketika.
                  </p>
                </Reveal>

                {/* CTA Buttons */}
                <Reveal direction="up" delay={200}>
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="button"
                      onClick={scrollTo("download")}
                      className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors shadow-sm cursor-pointer"
                    >
                      <span>Unduh Aplikasi Android</span>
                      <span>↓</span>
                    </button>
                    <button
                      type="button"
                      onClick={scrollTo("donasi")}
                      className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      Salurkan Donasi
                    </button>
                  </div>
                </Reveal>

                {/* Poin Kemudahan */}
                <Reveal direction="up" delay={300}>
                  <div className="pt-6 border-t border-brand-border grid grid-cols-3 max-w-lg gap-4 text-left">
                    <div>
                      <div className="font-heading font-bold text-lg text-brand-navy">
                        Dua Arah
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Suara & Teks Simultan
                      </div>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-lg text-brand-navy">
                        Tersimpan
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Riwayat Tiap Sesi
                      </div>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-lg text-brand-navy">
                        Akun Pribadi
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Sinkronisasi Login
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Kolom Kanan: Foto Mockup HP Asli (Normal) */}
              <Reveal direction="up" delay={200} className="lg:col-span-5 flex items-center justify-center">
                <div className="relative w-full max-w-[290px] sm:max-w-[320px] lg:max-w-[360px]">
                  {/* Efek Cahaya / Glow Halus di Belakang HP */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-navy/15 rounded-full filter blur-2xl opacity-70"></div>

                  {/* Gambar Mockup HP Normal */}
                  <Image
                    src="/mockup%20hp.png"
                    alt="Mockup Aplikasi Sahabat Tuli"
                    width={1080}
                    height={1440}
                    priority
                    className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(5,24,51,0.22)] hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Fitur Utama Sederhana & Terfokus */}
        <section id="fitur" className="scroll-mt-20 py-20 bg-brand-surface border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal direction="up">
              <div className="max-w-2xl mb-12">
                <h2 className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-2">
                  Fokus Utama
                </h2>
                <h3 className="font-heading font-bold text-3xl text-brand-navy tracking-tight">
                  Sederhana, Cepat, dan Tepat Guna
                </h3>
                <p className="text-slate-600 text-sm mt-2">
                  Kami sengaja merancang antarmuka yang bersih tanpa tombol rumit, agar komunikasi tatap muka dapat langsung terjadi tanpa hambatan teknis.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Fitur 1 */}
              <Reveal direction="up" delay={0}>
                <div className="bg-white p-7 rounded-xl border border-brand-border shadow-sm h-full hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-lg bg-brand-lightBlue flex items-center justify-center text-brand-blue mb-5 text-xl font-bold">
                    🎙️
                  </div>
                  <h4 className="font-heading font-bold text-lg text-brand-navy mb-2">
                    Suara ke Teks (Voice to Text)
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Menangkap ucapan Teman Dengar secara akurat dan langsung menampilkannya dalam format teks besar yang mudah dibaca di layar.
                  </p>
                </div>
              </Reveal>

              {/* Fitur 2 */}
              <Reveal direction="up" delay={150}>
                <div className="bg-white p-7 rounded-xl border border-brand-border shadow-sm h-full hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-lg bg-brand-lightBlue flex items-center justify-center text-brand-blue mb-5 text-xl font-bold">
                    🔊
                  </div>
                  <h4 className="font-heading font-bold text-lg text-brand-navy mb-2">
                    Teks ke Suara (Text to Voice)
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Teman Tuli cukup mengetik kalimat yang ingin disampaikan, lalu aplikasi akan membacakannya dengan artikulasi suara yang jelas dan alami.
                  </p>
                </div>
              </Reveal>

              {/* Fitur 3 */}
              <Reveal direction="up" delay={300}>
                <div className="bg-white p-7 rounded-xl border border-brand-border shadow-sm h-full hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-lg bg-brand-lightBlue flex items-center justify-center text-brand-blue mb-5 text-xl font-bold">
                    📑
                  </div>
                  <h4 className="font-heading font-bold text-lg text-brand-navy mb-2">
                    Riwayat Percakapan (History) & Akun
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Semua catatan percakapan otomatis tersimpan ke dalam akun pengguna terdaftar. Anda dapat membuka kembali poin penting kapan saja.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Cara Kerja / Alur Penggunaan */}
        <section id="cara-kerja" className="scroll-mt-20 py-20 bg-white border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal direction="up">
              <div className="text-center max-w-xl mx-auto mb-14">
                <h2 className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-2">
                  Alur Percakapan
                </h2>
                <h3 className="font-heading font-bold text-3xl text-brand-navy tracking-tight">
                  Tiga Langkah Mudah Berinteraksi
                </h3>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Reveal direction="up" delay={0}>
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 h-full hover:bg-white hover:shadow-sm transition-all">
                  <span className="font-heading font-bold text-3xl text-brand-blue">
                    01
                  </span>
                  <h4 className="font-heading font-bold text-base text-brand-navy mt-4 mb-2">
                    Masuk ke Akun Anda
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Login untuk mengamankan data dan menyimpan seluruh histori obrolan penting Anda.
                  </p>
                </div>
              </Reveal>

              <Reveal direction="up" delay={150}>
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 h-full hover:bg-white hover:shadow-sm transition-all">
                  <span className="font-heading font-bold text-3xl text-brand-blue">
                    02
                  </span>
                  <h4 className="font-heading font-bold text-base text-brand-navy mt-4 mb-2">
                    Bicara atau Ketik Langsung
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Gunakan mikrofon untuk menangkap suara, atau gunakan papan ketik untuk merespons dalam bentuk suara.
                  </p>
                </div>
              </Reveal>

              <Reveal direction="up" delay={300}>
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 h-full hover:bg-white hover:shadow-sm transition-all">
                  <span className="font-heading font-bold text-3xl text-brand-blue">
                    03
                  </span>
                  <h4 className="font-heading font-bold text-base text-brand-navy mt-4 mb-2">
                    Tersimpan di Riwayat
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Sesi percakapan tersusun rapi di tab Riwayat sehingga bisa dibaca kembali saat diperlukan.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Bagian Unduh Aplikasi (Sederhana & Bersih) */}
        <section id="download" className="scroll-mt-20 py-20 bg-brand-surface border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal direction="up">
              <div className="bg-white rounded-2xl border border-brand-border p-8 lg:p-12 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Kiri: Penjelasan & Tombol Unduh */}
                  <div className="lg:col-span-7">
                    <h2 className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-2">
                      Aplikasi Mobile
                    </h2>
                    <h3 className="font-heading font-bold text-3xl text-brand-navy tracking-tight mb-4">
                      Unduh Aplikasi Sahabat Tuli
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      Saat ini aplikasi Sahabat Tuli tersedia khusus untuk pengguna smartphone Android (format APK). Cukup pasang aplikasi di ponsel Anda untuk mulai menggunakan fitur konversi suara dan teks.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                      <a
                        href="/sahabattuli.apk"
                        download
                        className="inline-flex items-center gap-2.5 bg-brand-navy hover:bg-brand-blue text-white px-6 py-3.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                        </svg>
                        <span>Unduh APK Android</span>
                      </a>
                      <span className="text-xs text-slate-500">
                        Versi 1.0.0 • Khusus Android 8.0+
                      </span>
                    </div>
                  </div>

                  {/* Kanan: Logo Sahabat Tuli (Diperbesar & Center-Aligned Terhadap Sisi Kanan) */}
                  <div className="lg:col-span-5 flex items-center justify-center">
                    <div className="w-full max-w-[200px] sm:max-w-[250px]">
                      <Image
                        src="/sahabattuli%20LOGO%20transparent%202.png"
                        alt="Logo Sahabat Tuli"
                        width={216}
                        height={100}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Bagian Donasi & Dukungan Komunitas */}
        <section id="donasi" className="scroll-mt-20 py-20 bg-brand-lightBlue/30 border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-2xl border border-brand-border p-8 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <Reveal direction="up" delay={0} className="lg:col-span-7 space-y-4">
                  <h3 className="font-heading font-bold text-3xl text-brand-navy tracking-tight">
                    Bantu Perluas Aksesibilitas Komunikasi
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Dukungan dan donasi Anda membantu kelangsungan infrastruktur server pengenalan suara, pengembangan akurasi sistem, serta penyediaan fasilitas bagi komunitas Teman Tuli di berbagai wilayah.
                  </p>
                  <p className="text-xs text-slate-500">
                    Setiap kontribusi dicatat dan dialokasikan secara transparan untuk keberlanjutan layanan.
                  </p>
                </Reveal>

                <Reveal direction="up" delay={150} className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    Salurkan Donasi atau Dukungan
                  </h4>

                  <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-3">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Untuk saat ini, penyaluran donasi, bantuan operasional, atau kolaborasi terbuka langsung melalui Direct Message (DM) Instagram resmi Sahabat Tuli.
                    </p>

                    <div className="flex items-center gap-3 p-3 bg-brand-lightBlue/50 rounded-lg border border-brand-border/60">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-800">
                          Instagram Resmi
                        </span>
                        <span className="font-mono text-xs text-brand-navy font-semibold">
                          @sahabattuli.id
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-1">
                    <a
                      href="https://www.instagram.com/sahabattuli.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-navy hover:bg-brand-blue text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>Kirim Pesan via DM Instagram</span>
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Kontak & Footer */}
      <footer id="kontak" className="scroll-mt-20 bg-brand-navy text-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center">
                <Image
                  src="/sahabattuli%20LOGO%20transparent.png"
                  alt="Logo Sahabat Tuli"
                  width={229}
                  height={106}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
                Menghubungkan percakapan dua arah antara Teman Tuli dan Teman Dengar melalui teknologi konversi suara dan teks yang praktis dan andal.
              </p>
            </div>

            <div>
              <h5 className="font-heading font-bold text-sm text-white mb-3">
                Navigasi
              </h5>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <button
                    type="button"
                    onClick={scrollTo("fitur")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Fitur Aplikasi
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={scrollTo("cara-kerja")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Cara Kerja
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={scrollTo("download")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Unduh APK Android
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={scrollTo("donasi")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Dukungan & Donasi
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-heading font-bold text-sm text-white mb-3">
                Informasi & Kontak
              </h5>
              <p className="text-sm text-slate-300 mb-1">
                Email:{" "}
                <a
                  href="mailto:kontak@sahabattuli.id"
                  className="hover:text-white transition-colors"
                >
                  kontak@sahabattuli.id
                </a>
              </p>
              <p className="text-sm text-slate-300 mb-1">
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/sahabattuli.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline decoration-slate-500 underline-offset-4 hover:decoration-white"
                >
                  @sahabattuli.id
                </a>
              </p>
              <p className="text-sm text-slate-300">
                Layanan Komunikasi Inklusif Indonesia
              </p>
            </div>
          </div>

          <div className="pt-8 text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 Sahabat Tuli. Seluruh hak cipta dilindungi.</p>
            <p>Aplikasi Komunikasi Suara & Teks Indonesia</p>
          </div>
        </div>
      </footer>
    </>
  );
}
