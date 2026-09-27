### Hexlet tests and linter status:
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Dizza19_frontend-project-11&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Dizza19_frontend-project-11)

# RSS Aggregator 🛰️

A Single Page Application (SPA) that allows users to subscribe to various RSS feeds (news, blogs, tech articles) and read them in one clean, unified interface.

[🔗 Live Demo on Vercel]https://frontend-project-11-seven-orpin.vercel.app/

## ✨ Features & Architecture
* **Real-time Updates:** Automatically refetches added RSS feeds every 5 seconds to deliver fresh content without page reloads.
* **Input Validation:** Uses **Yup** to validate URLs, preventing duplicate subscriptions or invalid links.
* **CORS Handling:** Utilizes AJAX and open CORS proxies to fetch and parse XML feeds directly in the browser.
* **MVC Pattern:** Architecture is strictly separated into Model, View, and Controller states using **on-change** to watch state mutations.
* **Clean UI:** Styled with modern CSS/SASS to ensure a responsive, mobile-friendly experience.

## 🛠️ Tech Stack
* **Core:** JavaScript (ES6+), HTML5, CSS3 / SASS
* **Libraries:** Axios, Yup, i18next, Lodash
* **CI/CD & Hosting:** GitHub Actions, Vercel

