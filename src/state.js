import onChange from 'on-change';
import { renderFeeds, renderPosts } from './view.js';

const state = {
  feeds: [],
  posts: [],
};

export const watchedState = onChange(state, (path, value) => {
  if (path === 'feeds') {
    renderFeeds(value);
  }
  if (path === 'posts') {
    renderPosts(value);
  }
});

export default watchedState;
