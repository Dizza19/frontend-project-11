import { fetchRSS } from "./api.js";
import { state } from "./state.js";
import { renderFeeds, renderPosts } from "./view.js";

const form = document.querySelector("#rss-form");
const input = form.querySelector("input[name='rssUrl']");
const feedsContainer = document.querySelector("#feeds");
const postsContainer = document.querySelector("#posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = input.value.trim();

  fetchRSS(url)
    .then(({ feed, posts }) => {
      state.feeds.push(feed);
      state.posts.push(...posts);

      renderFeeds(feedsContainer, state.feeds);
      renderPosts(postsContainer, state.posts);

      form.reset();
      input.focus();
    })
    .catch((err) => {
      input.classList.add("is-invalid");
      console.error(err.message);
    });
});
