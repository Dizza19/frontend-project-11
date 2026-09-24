// src/view.js

// Рендер фидов
export const renderFeeds = (feeds) => {
  const feedsContainer = document.getElementById("feeds");
  feedsContainer.innerHTML = "";

  if (feeds.length === 0) return;

  const card = document.createElement("div");
  card.classList.add("card", "mb-3");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h2");
  title.classList.add("card-title", "h5");
  title.textContent = "Фиды";

  const ul = document.createElement("ul");
  ul.classList.add("list-group", "list-group-flush");

  feeds.forEach((feed) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const feedTitle = document.createElement("h3");
    feedTitle.classList.add("h6", "m-0");
    feedTitle.textContent = feed.title;

    const feedDesc = document.createElement("p");
    feedDesc.classList.add("m-0", "small", "text-muted");
    feedDesc.textContent = feed.description;

    li.append(feedTitle, feedDesc);
    ul.appendChild(li);
  });

  cardBody.appendChild(title);
  card.appendChild(cardBody);
  card.appendChild(ul);

  feedsContainer.appendChild(card);
};

// Рендер постов
export const renderPosts = (posts) => {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";

  if (posts.length === 0) return;

  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h2");
  title.classList.add("card-title", "h5");
  title.textContent = "Посты";

  const ul = document.createElement("ul");
  ul.classList.add("list-group", "list-group-flush");

  posts.forEach((post) => {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-start",
    );

    const a = document.createElement("a");
    a.setAttribute("href", post.link);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
    a.textContent = post.title;

    li.appendChild(a);
    ul.appendChild(li);
  });

  cardBody.appendChild(title);
  card.appendChild(cardBody);
  card.appendChild(ul);

  postsContainer.appendChild(card);
};
