import Link from "next/link";
import "./thank-you.css";

export const metadata = {
  title: "Terima Kasih - Hast Jaya",
  description: "Pesan kamu sudah berhasil terkirim ke tim Hast Jaya",
};

export default function ThankYou() {
  return (
    <section className="thank-you-page">
      <div className="container thank-you-container">
        <div className="check-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1>Pesan Kamu Sudah Terkirim!</h1>
        <p>
          Terima kasih sudah menghubungi Hast Jaya Pet Care Hub. Tim kami
          akan segera meninjau pesanmu dan menghubungi kamu kembali melalui
          email atau nomor telepon yang sudah kamu cantumkan.
        </p>

        <div className="thank-you-actions">
          <Link href="/" className="btn-home">
            Kembali ke Beranda
          </Link>
          
          <a // <-- INI YANG DITAMBAHKAN
            href="https://wa.link/c5ox4e"
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}