import "./portofolio.css";

export const metadata = { title: "Portofolio - Hast Jaya" };

const team = [
  {
    img: "virzan.jpeg", role: "CEO", name: "Virzan Pasa Nugraha",
    desc: "Saya adalah seorang intelektual muda yang berdedikasi tinggi untuk mencapai tujuan...",
    cv: "virzan.pdf", wa: "https://wa.link/unr5yk",
    fb: "https://www.facebook.com/profile.php?id=100091334442750",
    ig: "https://www.instagram.com/virzanpn/",
  },
  {
    img: "siti.jpeg", role: "PROGRAMMER", name: "Siti Rachmaniah Putri",
    desc: "Saya seorang mahasiswa Teknologi Informasi tahun kedua dengan hasrat untuk menciptakan solusi inovatif dan efisien...",
    cv: "siti.pdf", wa: "https://wa.link/mdt71t",
    fb: "https://www.facebook.com/profile.php?id=100010903982636&mibextid=ZbWKwL",
    ig: "#",
  },
  // ... tambahkan anggota tim lain (kemal, dede, farida, agung, dst) dengan pola sama
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
                <a target="_blank" href={`/images/${m.cv}`} className="btn active">Download CV</a>
                <a target="_blank" href={m.wa} className="btn">Contact</a>
              </div>
              <div className="social">
                <a target="_blank" href={m.fb}><i className="fa-brands fa-facebook" /></a>
                <a target="_blank" href={m.ig}><i className="fa-brands fa-instagram" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}