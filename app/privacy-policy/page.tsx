import Link from "next/link";
import "./privacy.css";

export const metadata = {
  title: "Kebijakan Privasi - Hast Jaya",
  description: "Kebijakan privasi Hast Jaya Pet Care Hub",
};

export default function PrivacyPolicy() {
  return (
    <section className="privacy-page">
      <div className="container privacy-container">
        <Link href="/" className="back-link">← Kembali ke Beranda</Link>

        <h1>Kebijakan Privasi</h1>
        <p className="updated">Terakhir diperbarui: 23 Juli 2025</p>

        <p>
          Hast Jaya Pet Care Hub ("kami") menghargai privasi pengguna
          website ini. Kebijakan ini menjelaskan data apa saja yang kami
          kumpulkan, untuk apa data tersebut digunakan, dan bagaimana kami
          menjaganya.
        </p>

        <h2>1. Data yang Kami Kumpulkan</h2>
        <p>
          Saat kamu mengisi form kontak di website ini, kami mengumpulkan:
        </p>
        <ul>
          <li>Nama</li>
          <li>Nomor telepon</li>
          <li>Alamat email</li>
          <li>Isi pesan/pertanyaan/keluhan yang kamu tulis</li>
        </ul>

        <h2>2. Bagaimana Data Digunakan</h2>
        <p>
          Data yang kamu kirimkan melalui form kontak semata-mata digunakan
          untuk:
        </p>
        <ul>
          <li>Merespons pertanyaan, keluhan, atau permintaan kerjasama yang kamu ajukan</li>
          <li>Menghubungi kamu kembali terkait layanan yang kamu tanyakan</li>
        </ul>
        <p>
          Kami tidak menggunakan data ini untuk keperluan pemasaran tanpa
          persetujuan tambahan dari kamu.
        </p>

        <h2>3. Pihak Ketiga</h2>
        <p>
          Form kontak di website ini diproses menggunakan layanan pihak
          ketiga (Web3Forms) yang bertugas meneruskan isi form sebagai email
          ke tim kami. Web3Forms hanya bertindak sebagai perantara teknis
          dan tidak menggunakan data kamu untuk kepentingan lain.
        </p>
        <p>
          Kami tidak menjual atau membagikan data pribadimu ke pihak ketiga
          lain untuk tujuan komersial.
        </p>

        <h2>4. Penyimpanan Data</h2>
        <p>
          Data yang kamu kirim melalui form kontak akan tersimpan di inbox
          email tim kami selama diperlukan untuk menindaklanjuti
          permintaanmu, dan dapat dihapus atas permintaan.
        </p>

        <h2>5. Hak Kamu</h2>
        <p>Kamu berhak untuk:</p>
        <ul>
          <li>Meminta salinan data yang sudah kamu kirimkan ke kami</li>
          <li>Meminta data tersebut dihapus dari catatan kami</li>
          <li>Menghubungi kami jika ada pertanyaan terkait penggunaan datamu</li>
        </ul>

        <h2>6. Cookie</h2>
        <p>
          Website ini tidak menggunakan cookie pelacakan pihak ketiga untuk
          keperluan iklan. Preferensi tampilan (mode terang/gelap) disimpan
          sementara di perangkatmu saat kamu menggunakan situs ini.
        </p>

        <h2>7. Kontak</h2>
        <p>
          Jika ada pertanyaan mengenai kebijakan privasi ini, hubungi kami
          melalui halaman{" "}
          <Link href="/#contact-container">Kontak</Link> atau nomor telepon{" "}
          <a href="tel:+(62)821-2822-3596">+(62)821-2822-3596</a>.
        </p>
      </div>
    </section>
  );
}