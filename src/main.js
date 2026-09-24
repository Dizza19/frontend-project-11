import initState from './state.js';

const { addFeed } = initState();

const form = document.getElementById('rss-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const url = formData.get('rssUrl');

  addFeed({ title: url });

  form.reset();
});
