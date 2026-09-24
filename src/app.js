import { fetchRSS } from './api.js';
import watchedState from './state.js';

const form = document.querySelector('#rss-form');
const input = form.querySelector('input[name="rssUrl"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const url = input.value.trim();

  if (watchedState.feeds.some((f) => f.url === url)) {
    input.classList.add('is-invalid');
    console.log('RSS уже существует');
    return;
  }

  fetchRSS(url)
    .then(({ feed, posts }) => {
      watchedState.feeds.push({ ...feed, url });
      watchedState.posts.push(...posts);

      input.classList.remove('is-invalid');
      form.reset();
      input.focus();
    })
    .catch((err) => {
      input.classList.add('is-invalid');
      console.error(err.message);
    });
});
