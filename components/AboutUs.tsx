export default function AboutUs() {
  return (
    <section className="about-us" id="about-us">
      <div className="flex row container">
        <div className="service-img row">
          <img src="/images/service.svg" alt="service" />
        </div>
        <div className="service-content row">
          <div className="about" id="about">
            <h2>Tentang</h2>
            <br />
            <h5>
              Hast Jaya adalah perusahaan teknologi yang menyediakan suatu
              platform bagi para pemilik hewan peliharaan untuk mendapat
              solusi penitipan hewan yang diberikan oleh mitra dan berbagai
              jenis layanan lainnya.
            </h5>
            <hr />
            <p>
              Visi kami adalah menjadi mitra terpercaya bagi pemilik hewan
              peliharaan, dengan menyediakan layanan yang memudahkan mereka
              dalam merawat dan memanjakan hewan peliharaan kesayangan.
              <br />
              Misi kami adalah untuk menyediakan layanan pemeliharaan hewan
              peliharaan yang tidak hanya memenuhi, tetapi melampaui harapan
              pelanggan kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}