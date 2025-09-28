import { fetchRSS } from "./api.js";
import { watchedState } from "./state.js";
import { startUpdates } from "./updater.js";

const form = document.querySelector("#rss-form");
const input = form.querySelector("input[name='rssUrl']");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = input.value.trim();

  fetchRSS(url)
    .then(({ feed, posts }) => {
      watchedState.feeds.push(feed);
      watchedState.posts.push(...posts);

      form.reset();
      input.focus();
    })
    .catch((err) => {
      input.classList.add("is-invalid");
      console.error(err.message);
    });
});

startUpdates(watchedState);
