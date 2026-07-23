const services = [
  { icon: "zoning.svg", title: "Konsultasi (Gratis)", link: "https://wa.link/c5ox4e", even: true },
  { icon: "daycare.svg", title: "Pengiriman Makanan Hewan", link: "https://wa.link/c5ox4e", even: false },
  { icon: "boarding.svg", title: "Penitipan Hewan", link: "https://forms.gle/A3LZHrMpyw18spnL8", even: true },
  { icon: "panggil.svg", title: "Reservasi Pet Sitter", link: "https://forms.gle/ReeMp2h9a5WPT9Di6", even: false },
];

export default function Service() {
  return (
    <section className="service" id="service">
      <div className="container">
        <h2><span>Kategori</span>&nbsp; Layanan</h2>
        <div className="service-card column">
          {services.map((s) => (
            <div className="s-card" id={s.even ? "even" : undefined} key={s.title}>
              <img src={`/images/${s.icon}`} alt={s.title} />
              <h3>{s.title}</h3>
              <div>
                <a href={s.link} target="_blank" rel="noreferrer" className="page-btn action">
                  Order
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="row flex" id="girl">
          <div className="product-content">
            <h4>Konsultasi (Gratis) -- <span>IDR 0,00</span></h4>
            <p>Konsultasikan kebutuhan anda dengan tim kami secara gratis.</p><br />
            <h4>Pengiriman Makanan Hewan -- <span>IDR 10.000,00</span></h4>
            <p>Menerima jasa pengiriman Makanan atau Kebutuhan lain hewan peliharaan anda.</p><br />
            <h4>Penitipan Hewan -- <span>IDR 50.000,00/hari</span></h4>
            <p>Menerima jasa penitipan hewan peliharaan.</p><br />
            <h4>Panggil Care Taker -- <span>IDR 50.000,00 - 150.000,00/hari</span></h4>
            <p>Menerima jasa penjagaan hewan peliharaan anda di rumah.</p>
          </div>
          <div className="product-img row">
            <img src="/images/girl.svg" alt="girl" />
          </div>
        </div>
      </div>
    </section>
  );
}