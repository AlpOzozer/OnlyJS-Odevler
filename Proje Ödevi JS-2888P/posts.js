const userInput = Number(prompt("Hangi kullanıcının paylaşımlarını görüntülemek isersiniz?"));


if (userInput <= 1 || userInput >= 10 || isNaN(userInput)) {
    alert("Girdiğiniz sayı yanlış");
    throw new Error("Girdiğiniz sayı yanlış");
    
} else {
    alert("Girdiğiniz sayı doğru");
}

const urlIds = new URLSearchParams(window.location.search);
const userId = userInput;

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
  
  return await res.json();
}



function createCard(user) {
  const divMain = document.createElement("div");
  divMain.className = "card"; 

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");


  p1.innerHTML = `<span class="label">User Id:</span> ${user.userId}`;
  p2.innerHTML = `<span class="label">Id:</span> ${user.id}`;
  p3.innerHTML = `<span class="label">Title:</span> ${user.title}`;
  p4.innerHTML = `<span class="label">Post:</span> ${user.body}`;

  div1.appendChild(p1);
  div2.appendChild(p2);
  div3.appendChild(p3);
  div4.appendChild(p4);

  divMain.appendChild(div1);
  divMain.appendChild(div2);
  divMain.appendChild(div3);
  divMain.appendChild(div4);

  return divMain;
}

fetchUsers().then(users => {
  const container = document.getElementById("cards-container");

  users.map(user => {
    const card = createCard(user);
    container.appendChild(card);
  });
});