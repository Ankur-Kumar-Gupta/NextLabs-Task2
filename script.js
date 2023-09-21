const container = document.getElementById("container");
let currentPage = 1;
let loading = false;

function fetchData(page) {
  if (loading) return;
  loading = true;

  const loadingText = document.createElement("div");
  loadingText.innerText = "Loading...";
  container.appendChild(loadingText);

  setTimeout(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((data) => {
        loading = false;
        container.removeChild(loadingText);

        if (data.length === 0) {
          return;
        }

        data.forEach((item) => {
          const card = document.createElement("div");
          card.classList.add("user-card");
          card.innerHTML = `
                        <h2>${item.title}</h2>
                        <p>${item.body}</p>
                    `;
          container.appendChild(card);
        });

        currentPage++;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        loading = false;
        container.removeChild(loadingText);
      });
  }, 1500);
}

function checkScroll() {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 100) {
    fetchData(currentPage);
  }
}

fetchData(currentPage);

window.addEventListener("scroll", checkScroll);
