

let charactersData = {
  "characters": [
    {"id":1,"name":"Luke Skywalker","pic":"https://static.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg","homeworld":"tatooine"},
    {"id":2,"name":"C-3PO","pic":"https://static.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png","homeworld":"tatooine"},
    {"id":3,"name":"R2-D2","pic":"https://static.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png","homeworld":"naboo"},
    {"id":4,"name":"Darth Vader","pic":"https://static.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg","homeworld":"tatooine"},
    {"id":5,"name":"Leia Organa","pic":"https://static.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png","homeworld":"alderaan"},
    {"id":6,"name":"Chewbacca","pic":"https://static.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png","homeworld":"kashyyyk"},
    {"id":7,"name":"Han Solo","pic":"https://static.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png","homeworld":"corellia"},
    {"id":8,"name":"Yoda","pic":"https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"},
    {"id":9,"name":"Palpatine","pic":"https://static.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png","homeworld":"naboo"},
    {"id":10,"name":"Obi-Wan Kenobi","pic":"https://static.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg","homeworld":"stewjon"}
  ]
};

const { characters } = charactersData;

// === BUTONLAR & KONTEYNER ===
const btnToggle = document.createElement("button");
btnToggle.id = "toggleCharactersBtn";
btnToggle.textContent = "Karakterleri Göster";
document.body.appendChild(btnToggle);

const row = document.createElement("div");
row.id = "charactersRow";
document.body.appendChild(row);

// === KART OLUŞTURUCU ===
function makeCard(c) {
  const wrap = document.createElement("div");
  wrap.className = "card";

  const img = document.createElement("img");
  img.src = c.pic;
  img.alt = c.name;
  img.referrerPolicy = "no-referrer";
  img.onerror = () => img.src = "https://via.placeholder.com/220x150?text=Yok";

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = c.name;

  const p = document.createElement("p");
  p.className = "card-text";
  p.textContent = "Homeworld: " + (c.homeworld || "Bilinmiyor");

  // 🔹 Resim butonu (yeni sekmede açar)
  const btnOpen = document.createElement("button");
  btnOpen.className = "btn btn-open-image";
  btnOpen.type = "button";
  btnOpen.textContent = "Resmi Aç";
  btnOpen.setAttribute("data-src", c.pic);
  btnOpen.title = "Görseli yeni sekmede aç";

  // (Opsiyonel) Detay butonu (şu an örnek)
  const btnDetail = document.createElement("a");
  btnDetail.className = "btn";
  btnDetail.href = "#";
  btnDetail.textContent = "Detay";

  const btnRow = document.createElement("div");
  btnRow.className = "btn-row";
  btnRow.append(btnOpen, btnDetail);

  body.append(title, p, btnRow);
  wrap.append(img, body);
  return wrap;
}

// === GÖSTER / GİZLE ===
let shown = false;
btnToggle.addEventListener("click", () => {
  if (!shown) {
    row.replaceChildren(...characters.map(makeCard));
    btnToggle.textContent = "Karakterleri Gizle";
    shown = true;
  } else {
    row.replaceChildren();
    btnToggle.textContent = "Karakterleri Göster";
    shown = false;
  }
});

// === RESİM BUTONU: Event Delegation ===
row.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-open-image");
  if (!btn) return;
  const src = btn.getAttribute("data-src");
  if (src) {
    // Yeni sekmede güvenli aç
    window.open(src, "_blank", "noopener,noreferrer");
  }
});

let homeworldsRaw = (charactersArray, key) => {
  let result = charactersArray.map((element) => element[key]);
  return result;
};

let desiredKey = "homeworld";

let result = homeworldsRaw(charactersData.characters, desiredKey);

console.log(result);


