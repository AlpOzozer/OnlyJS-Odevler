async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
}

function createCard(user) {
  const divMain = document.createElement("div");
  divMain.className = "card"; 

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");
  const div5 = document.createElement("div");
  const div6 = document.createElement("div");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");
  const button1 = document.createElement("p");


  p1.innerHTML = `<span class="label">Name:</span> ${user.name}`;
  p2.innerHTML = `<span class="label">Id:</span> ${user.id}`;
  p3.innerHTML = `<span class="label">Email:</span> ${user.email}`;
  p4.innerHTML = `<span class="label">Phone:</span> ${user.phone}`;
  p5.innerHTML = `<span class="label">Website:</span> ${user.website}`;
  button1.innerHTML = `<span><a href="posts.html?userId=${user.id}" class="label">Gönderileri Görüntüle:</buttton></span> `;

  div1.appendChild(p1);
  div2.appendChild(p2);
  div3.appendChild(p3);
  div4.appendChild(p4);
  div5.appendChild(p5);
  div6.appendChild(button1);

  divMain.appendChild(div1);
  divMain.appendChild(div2);
  divMain.appendChild(div3);
  divMain.appendChild(div4);
  divMain.appendChild(div5);
  divMain.appendChild(div6);

  return divMain;
}

fetchUsers().then(users => {
  const container = document.getElementById("cards-container");

  users.map(user => {
    const card = createCard(user);
    container.appendChild(card);
  });
});


