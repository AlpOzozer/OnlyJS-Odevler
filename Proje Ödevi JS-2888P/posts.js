/*
const userId = URLSearchParams.get("userId");
console.log(params);
console.log(userId);

async function fetchUserIdDetails() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const data = await response.json();
  data.forEach((user) => {
    resultUsers(user);
  }

  );
  console.log(data);
}

fetchUserIdDetails();

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
*/

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');


async function getPosts() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        console.log("Gelen data:", data); // kontrol için
        displayPosts(data);
      } catch (error) {
        console.error("Hata oluştu:", error);
      }
    }

    function displayPosts(posts) {
      const container = document.getElementById("container");
      //container.innerHTML = ""; // önce temizle

      posts.forEach(post => {
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h3");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        card.appendChild(title);
        card.appendChild(body);
        container.appendChild(card);
      });
    }

    // Script en sonda olduğu için direkt çağırabiliriz
    getPosts();