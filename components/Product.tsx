const products = [
  { img: "me1.jpg", name: "Me-O Mackerel", price: "Rp60.000", desc: "Makanan Kering Kucing MEO 1 KG", link: "https://wa.link/4m74w1" },
  { img: "cleo.jpeg", name: "CLEO", price: "Rp80.000", desc: "Cleo Persian Cat Food (1.2KG)", link: "https://wa.link/vj777d" },
  { img: "whiskas.png", name: "Whiskas Adult", price: "Rp77.000", desc: "Whiskas Makanan Kucing Kering 1.2KG", link: "https://wa.link/tf9mdq" },
  { img: "excel.jpeg", name: "Excel", price: "Rp15.000", desc: "Makanan Kucing kering Excel rasa Ayam & Tuna segitiga orange 500g", link: "https://wa.link/i26g0i" },
  { img: "royal-dog.jpeg", name: "Royal Canin", price: "Rp390.000", desc: "Royal Canin 4KG Makanan Anjing Adult Pomeranian", link: "https://wa.link/6leabe" },
  { img: "padigree.jpeg", name: "Padigree", price: "Rp85.000", desc: "Padigree Makanan Anjing Kering 1.5KG", link: "https://wa.link/b9dlny" },
  { img: "mutiara.png", name: "Mutiara Tropical", price: "Rp10.000", desc: "Wonder Mutiara Tropical 100g", link: "https://wa.link/0b5y17" },
  { img: "takari.jpeg", name: "Takari", price: "Rp26.000", desc: "Takari Fish Food 2mm Mix - 500g", link: "https://wa.link/rzel14" },
  { img: "hiro.jpeg", name: "Hiro", price: "Rp100.000", desc: "Hiro Growth Koi Fish Food 5mm - 1KG", link: "https://wa.link/0mxgwg" },
  { img: "perkutut.jpeg", name: "GOLD COIN PERKUTUT", price: "Rp16.000", desc: "Pakan Burung Perkutut - 450g", link: "https://wa.link/n1ao1q" },
  { img: "classic.jpeg", name: "CP Classic", price: "Rp15.000", desc: "Pakan Burung Anti-Stress Bird Food - 400g", link: "https://wa.link/c19gd5" },
  { img: "fancy.jpeg", name: "Fancy 9 Star", price: "Rp27.000", desc: "Pakan Burung Fancy 9 Star Probiotics Hijau - 450g", link: "https://wa.link/vws7at" },
];

export default function Product() {
  return (
    <section className="product" id="product">
      <div className="container">
        <div className="deals row">
          <h2><span>P R O D U K</span>&nbsp;&nbsp;&nbsp;M A K A N A N</h2>
        </div>
        <div className="product-cards column grid">
          {products.map((p) => (
            <div className="p-card" key={p.name}>
              <div className="img row"><img src={`/images/${p.img}`} alt={p.name} /></div>
              <div className="p-content">
                <h3>{p.name}</h3>
                <span>{p.price}</span>
                <p>{p.desc}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="page-btn active">
                  Buy now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}