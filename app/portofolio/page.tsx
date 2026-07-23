import "./portofolio.css";

export const metadata = { title: "Portofolio - Hast Jaya" };

type Member = {
  img: string;
  role: string;
  name: string;
  desc: string;
  cv: string;
  wa: string;
  fb?: string;
  ig?: string;
};

const team: Member[] = [
  {
    img: "virzan.jpeg",
    role: "CEO",
    name: "Virzan Pasa Nugraha",
    desc: "Saya adalah seorang intelektual muda yang berdedikasi tinggi untuk mencapai tujuan. Saya selalu belajar untuk mencoba hal-hal baru dan memperluas wawasan saya. Saya percaya bahwa kunci kesuksesan adalah konsistensi, disiplin, kerja keras, kerja cerdas, pantang menyerah, tanggung jawab dan berdoa.",
    cv: "virzan.pdf",
    wa: "https://wa.link/unr5yk",
    fb: "https://www.facebook.com/profile.php?id=100091334442750",
    ig: "https://www.instagram.com/virzanpn/",
  },
  {
    img: "siti.jpeg",
    role: "PROGRAMMER",
    name: "Siti Rachmaniah Putri",
    desc: "Saya seorang mahasiswa Teknologi Informasi tahun kedua dengan hasrat untuk menciptakan solusi inovatif dan efisien. Saya mencari peluang untuk lebih mengembangkan keterampilan saya dan mendapatkan pengalaman langsung di industri teknologi.",
    cv: "siti.pdf",
    wa: "https://wa.link/mdt71t",
    fb: "https://www.facebook.com/profile.php?id=100010903982636&mibextid=ZbWKwL",
  },
  {
    img: "farida.jpeg",
    role: "CMO",
    name: "Farida Arindra Zahra",
    desc: "Seorang mahasiswa Fakultas Informatika di Universitas Sebelas April. Saya punya minat di bidang editing dan coding dan sedang berusaha mengembangkan keterampilan di bidang tersebut. Selain kuliah, saya suka mengeksplorasi hal-hal baru dan mencari peluang untuk belajar lebih banyak.",
    cv: "farida.pdf",
    wa: "https://wa.link/b9415u",
  },
  {
    img: "kemal.jpeg",
    role: "CSO",
    name: "Kemal Hapidz Prastiawan",
    desc: "Mahasiswa dari Universitas Sebelas April Fakultas Teknologi Informasi Program Studi Informatika dengan harapan dapat berkontribusi sekaligus mengembangkan keterampilan saya dalam lingkungan profesional yang dinamis dan inovatif.",
    cv: "kemal.pdf",
    wa: "https://wa.link/ptps8z",
  },
  {
    img: "agung.png",
    role: "CTO",
    name: "Agung Febrian",
    desc: "Sebagai seorang mahasiswa, saya terpesona oleh keajaiban musik dari vokal yang menggugah hingga ritme yang memukau. Ora FLAC kuping ora enak.",
    cv: "agung.pdf",
    wa: "https://wa.link/xz2e6b",
  },
  {
    img: "dede.jpeg",
    role: "CFO",
    name: "Dede Yayan Suciyana",
    desc: "Saya adalah mahasiswa di Universitas Sebelas April jurusan Informatika. Saya aktif dalam berbagai kegiatan kampus. Saya senang belajar dan terus mengembangkan diri melalui seminar dan workshop untuk mencapai tujuan karir saya.",
    cv: "dede.pdf",
    wa: "https://wa.link/b8zjmt",
  },
];

export default function Portofolio() {
  return (
    <div className="hero-header">
      <div className="wrapper">
        {team.map((m) => (
          <div className="container" key={m.name}>
            <div className="hero-pic">
              <img src={`/images/${m.img}`} alt={m.name} />
            </div>
            <div className="hero-text">
              <h1>{m.role}</h1>
              <h5>Hi I'm <span>&nbsp;{m.name}</span></h5>
              <p>{m.desc}</p>
              <div className="btn-group">
                <a target="_blank" href={`/images/${m.cv}`} className="btn active">
                  Download CV
                </a>
                <a target="_blank" href={m.wa} className="btn">
                  Contact
                </a>
              </div>
              {(m.fb || m.ig) && (
                <div className="social">
                  {m.fb && (
                    <a target="_blank" href={m.fb}>
                      <i className="fa-brands fa-facebook" />
                    </a>
                  )}
                  {m.ig && (
                    <a target="_blank" href={m.ig}>
                      <i className="fa-brands fa-instagram" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}