import { object, string, setLocale } from "yup";
import i18n from "./locales/i18n.js";

setLocale({
  string: {
    url: () => i18n.t("form.errors.url"),
    required: () => i18n.t("form.errors.required"),
  },
});

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
    console.log(i18n.t("form.errors.duplicate"));
    return;
  }

  schema
    .validate({ field: url })
    .then(() => {
      input.classList.remove("is-invalid");
      feeds.push(url);
      console.log(i18n.t("form.success"));

      form.reset();
      input.focus();
    })
    .catch((err) => {
      input.classList.add("is-invalid");
      console.log(err.message);
    });
});
