export const renderFeeds = (feedsContainer, feeds) => {
  feedsContainer.innerHTML = "";

  const card = document.createElement("div");
  card.classList.add("card", "border-0");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title", "h4");
  cardTitle.textContent = "Фиды";

  cardBody.appendChild(cardTitle);
  card.appendChild(cardBody);

  const ul = document.createElement("ul");
  ul.classList.add("list-group", "border-0", "rounded-0");

  feeds.forEach((feed) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "border-0", "border-end-0");

    const h3 = document.createElement("h3");
    h3.classList.add("h6", "m-0");
    h3.textContent = feed.title;

    const p = document.createElement("p");
    p.classList.add("m-0", "small", "text-black-50");
    p.textContent = feed.description;

    li.append(h3, p);
    ul.appendChild(li);
  });

  card.appendChild(ul);
  feedsContainer.appendChild(card);
};

export const renderPosts = (postsContainer, posts) => {
  postsContainer.innerHTML = "";

  const card = document.createElement("div");
  card.classList.add("card", "border-0");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title", "h4");
  cardTitle.textContent = "Посты";

  cardBody.appendChild(cardTitle);
  card.appendChild(cardBody);

  const ul = document.createElement("ul");
  ul.classList.add("list-group", "border-0", "rounded-0");

  posts.forEach((post) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start", "border-0", "border-end-0");

    const a = document.createElement("a");
    a.href = post.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.classList.add("fw-bold");
    a.textContent = post.title;

    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("btn", "btn-outline-primary", "btn-sm");
    button.textContent = "Просмотр";

    li.append(a, button);
    ul.appendCh
