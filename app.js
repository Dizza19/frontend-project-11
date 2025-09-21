import { object, string } from "yup";

const schema = object({
  field: string().required().url(),
});

const input = document.querySelector('input[name="rssUrl"]');
const form = document.querySelector("#rss-form");

const feeds = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = input.value.trim();

  if (feeds.includes(url)) {
    input.classList.add("is-invalid");
    console.log("Дубль: такой URL уже есть");
    return;
  }

  schema
    .validate({ field: url })
    .then(() => {
      input.classList.remove("is-invalid");
      feeds.push(url);
      console.log("Добавлен:", url);

      form.reset();
      input.focus();
    })
    .catch((err) => {
      input.classList.add("is-invalid");
      console.log("Ошибка:", err.message);
    });
});
