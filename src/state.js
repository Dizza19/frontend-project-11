import onChange from "on-change";
import { renderFeeds, renderPosts } from "./view.js";

const state = {
  feeds: [],
  posts: [],
};

export const watchedState = onChange(state, (path, value) => {
  if (path === "feeds") {
    const feedsContainer = document.querySelector("#feeds");
    renderFeeds(feedsContainer, value);
  }

  if (path === "posts") {
    const postsContainer = document.querySelector("#posts");
    renderPosts(postsContainer, value);
  }
});
