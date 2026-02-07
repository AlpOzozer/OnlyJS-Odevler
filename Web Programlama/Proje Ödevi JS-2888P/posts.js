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