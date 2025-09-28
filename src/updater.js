import { fetchRSS } from "./api.js";

export const startUpdates = (state, renderPosts) => {
  const checkFeeds = () => {
    const feedPromises = state.feeds.map((feed) =>
      fetchRSS(feed.url)
        .then(({ posts }) => {
          const newPosts = posts.filter(
            (post) => !state.posts.some((p) => p.link === post.link)
          );

          if (newPosts.length > 0) {
            state.posts.push(...newPosts);
            renderPosts(document.querySelector("#posts"), state.posts);
          }
        })
        .catch((err) => {
          console.error(`Ошибка обновления фида ${feed.url}: ${err.message}`);
        })
    );

    Promise.all(feedPromises).finally(() => {
      setTimeout(checkFeeds, 5000);
    });
  };

  checkFeeds();
};
