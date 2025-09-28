export const parseRSS = (xmlString) => {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlString, "application/xml");

  const parseError = xml.querySelector("parsererror");
  if (parseError) {
    throw new Error("Невалидный RSS поток");
  }

  const feedTitle = xml.querySelector("channel > title")?.textContent ?? "Без названия";
  const feedDescription = xml.querySelector("channel > description")?.textContent ?? "";

  const items = Array.from(xml.querySelectorAll("item"));
  const posts = items.map((item, index) => ({
    id: index + 1,
    title: item.querySelector("title")?.textContent ?? "Без названия",
    link: item.querySelector("link")?.textContent ?? "#",
  }));

  return {
    feed: { title: feedTitle, description: feedDescription },
    posts,
  };
};
