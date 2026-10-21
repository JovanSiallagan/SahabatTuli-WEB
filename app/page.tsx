import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* Navigasi */}
      <header className="border-b border-slate-800 bg-[#001F3F] sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Sahabat Tuli */}
          <a href="#" className="flex items-center" aria-label="Sahabat Tuli">
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
            <a href="#fitur" className="hover:text-white transition-colors">
              Fitur
            </a>
            <a href="#cara-kerja" className="hover:text-white transition-colors">
              Cara Kerja
            </a>
            <a href="#download" className="hover:text-white transition-colors">
              Unduh Aplikasi
            </a>
            <a href="#donasi" className="hover:text-white transition-colors">
              Dukungan & Donasi
            </a>
            <a href="#kontak" className="hover:text-white transition-colors">
              Kontak
            </a>
          </nav>

          {/* Tombol Aksi: Unduh Aplikasi */}
          <div>
            <a
              href="#download"
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg bg-brand-blue hover:bg-brand-blueDark text-white transition-colors shadow-sm"
            >
              Unduh APK Android
            </a>
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
                    <a
                      href="#download"
                      className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-brand-blue transition-colors shadow-sm"
                    >
                      <span>Unduh Aplikasi Android</span>
                      <span>↓</span>
                    </a>
                    <a
                      href="#donasi"
                      className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors"
                    >
                      Salurkan Donasi
                    </a>
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
                        href="#"
                        className="inline-flex items-center gap-2.5 bg-brand-navy hover:bg-brand-blue text-white px-6 py-3.5 rounded-lg text-sm font-semibold transition-colors"
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

                  <div className="space-y-2">
                    <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="block text-xs font-semibold text-slate-800">
                          Transfer Bank Mandiri
                        </span>
                        <span className="font-mono text-sm text-brand-navy">
                          123-00-9876543-1
                        </span>
                      </div>
                      <span className="text-xs text-slate-500">
                        a.n. Sahabat Tuli
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="block text-xs font-semibold text-slate-800">
                          Transfer Bank BCA
                        </span>
                        <span className="font-mono text-sm text-brand-navy">
                          882-0192-334
                        </span>
                      </div>
                      <span className="text-xs text-slate-500">
                        a.n. Sahabat Tuli
                      </span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <a
                      href="#kontak"
                      className="w-full inline-flex items-center justify-center py-2.5 rounded-lg bg-brand-navy hover:bg-brand-blue text-white text-xs font-semibold transition-colors"
                    >
                      Konfirmasi Donasi / Hubungi Tim
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
                  <a href="#fitur" className="hover:text-white transition-colors">
                    Fitur Aplikasi
                  </a>
                </li>
                <li>
                  <a href="#cara-kerja" className="hover:text-white transition-colors">
                    Cara Kerja
                  </a>
                </li>
                <li>
                  <a href="#download" className="hover:text-white transition-colors">
                    Unduh APK Android
                  </a>
                </li>
                <li>
                  <a href="#donasi" className="hover:text-white transition-colors">
                    Dukungan & Donasi
                  </a>
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
