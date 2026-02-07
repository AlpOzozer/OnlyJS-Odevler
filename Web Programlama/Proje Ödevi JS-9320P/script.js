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

// === HOMEWORLDS ===
let result = characters.map(c => c.homeworld ?? "other");
let uniqueWorlds = [...new Set(result.map(w => w.toLowerCase()))];

// === RADIO BUTTONLARI OLUŞTUR ===
uniqueWorlds.forEach((world, i) => {
  const id = `radio-${i}`;
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.id = id;
  radio.name = "homeworld";
  radio.value = world;

  const label = document.createElement("label");
  label.htmlFor = id;
  label.innerText = world;

  const br = document.createElement("br");
  document.body.append(radio, label, br);
});

// === GÖSTER BUTONU ve KART KONTEYNERİ ===
const btn = document.createElement("button");
btn.textContent = "Karakterleri Göster";
btn.style.marginTop = "10px";
document.body.appendChild(btn);

const row = document.createElement("div");
row.id = "charactersRow";
row.style.display = "flex";
row.style.flexWrap = "wrap";
row.style.gap = "10px";
row.style.marginTop = "20px";
document.body.appendChild(row);

// === KART OLUŞTURMA FONKSİYONU ===
function makeCard(c) {
  const card = document.createElement("div");
  card.style.width = "200px";
  card.style.border = "1px solid #ddd";
  card.style.borderRadius = "10px";
  card.style.padding = "10px";
  card.style.textAlign = "center";
  card.style.background = "#f9f9f9";

  const img = document.createElement("img");
  img.src = c.pic;
  img.alt = c.name;
  img.style.width = "100%";
  img.style.height = "250px";
  img.style.objectFit = "cover";
  img.onerror = () => (img.src = "https://via.placeholder.com/200x250?text=No+Image");

  const title = document.createElement("h4");
  title.textContent = c.name;

  const hw = document.createElement("p");
  hw.textContent = "Homeworld: " + (c.homeworld || "Bilinmiyor");

  card.append(img, title, hw);
  return card;
}

// === FILTER + RENDER ===
btn.addEventListener("click", () => {
  const checked = document.querySelector('input[name="homeworld"]:checked');
  let filtered;

  if (!checked) {
    // Seçim yoksa TÜM KARAKTERLER
    filtered = characters;
    console.log("Tüm karakterler gösteriliyor.");
  } else {
    const selectedWorld = checked.value;
    console.log("Seçilen:", selectedWorld);

    // Seçim varsa sadece o gezegen
    filtered = characters.filter(c =>
      (c.homeworld || "other").toLowerCase() === selectedWorld.toLowerCase()
    );
  }

  // Kartları render et
  row.replaceChildren(...filtered.map(makeCard));
});
