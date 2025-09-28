export const renderFeeds = (feedsContainer, feeds) => {
  feedsContainer.innerHTML = "";
  feeds.forEach((feed) => {
    const feedEl = document.createElement("div");
    feedEl.classList.add("card", "mb-3", "p-2");
    feedEl.innerHTML = `
      <h5>${feed.title}</h5>
      <p>${feed.description}</p>
    `;
    feedsContainer.appendChild(feedEl);
  });
};

export const renderPosts = (postsContainer, posts) => {
  postsContainer.innerHTML = "";
  posts.forEach((post) => {
    const postEl = document.createElement("a");
    postEl.href = post.link;
    postEl.target = "_blank";
    postEl.textContent = post.title;
    postEl.classList.add("d-block", "mb-1");
    postsContainer.appendChild(postEl);
  });
};
