export default function Contact() {
  return (
    <section className="contact-container" id="contact-container">
      <div className="contact-container">
        <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
          <div className="contact-left-title">
            <h2>Kontak</h2>
            <hr />
            <p className="contact-desc">
              Punya pertanyaan seputar layanan, ingin menyampaikan keluhan,
              atau butuh bantuan lain? Isi form di bawah ini dan tim kami
              akan merespons melalui email atau nomor telepon yang kamu
              cantumkan.
            </p>
          </div>

          <input type="hidden" name="access_key" value="d5403ce6-6783-4eed-9780-0d59b32e0748" />

          <select name="kategori" className="contact-inputs" required defaultValue="">
            <option value="" disabled>Pilih kategori pesan</option>
            <option value="Pertanyaan">Pertanyaan Umum</option>
            <option value="Keluhan">Keluhan / Komplain</option>
            <option value="Order">Pertanyaan Order</option>
            <option value="Kerjasama">Kerjasama / Mitra</option>
            <option value="Lainnya">Lainnya</option>
          </select>

          <input type="text" name="nama" placeholder="Nama" className="contact-inputs" required />
          <input type="text" name="No. Telepon" placeholder="No. Telepon" className="contact-inputs" required />
          <input type="email" name="email" placeholder="Email" className="contact-inputs" required />
          <textarea name="massage" placeholder="Tulis pesan, pertanyaan, atau keluhan kamu di sini" className="contact-inputs" required />

          <p className="privacy-note">
            Dengan mengirim form ini, kamu menyetujui bahwa data (nama, nomor
            telepon, email, dan pesan) akan digunakan tim Hast Jaya semata-mata
            untuk merespons pertanyaan/keluhanmu, dan tidak akan dibagikan ke
            pihak ketiga di luar kebutuhan tersebut.
          </p>

          <button type="submit">
            Submit <img src="/images/arrow_icon.png" alt="submit" />
          </button>
        </form>
      </div>
    </section>
  );
}