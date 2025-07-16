# ✝️ The Counterfeit

***Unveiling Christianity’s Utmost Counterfeit Behind Its End-Times Apostasy***

---

## 📖 Overview

**The Counterfeit** is a focused theology web app for Christians who want to understand deception within the Church and discern the signs of end-times apostasy. It pairs deep scriptural arguments with an interactive map of global Christian persecution — plus a blog, newsletter, and forum to help believers test every spirit together.

---

## ⚙️ Tech Stack

* **Framework:** Next.js (React + TypeScript)
* **Styling:** Tailwind CSS
* **Map:** Leaflet.js & Mapbox GL JS — for the live persecution map and terror group points.
* **CMS:** Contentful (headless) — used only for the **resources section** on the homepage (images & content).
* **Auth & Data:** Firebase — for secure user authentication and backend data.

---

## 🗂️ Folder Structure (`/src/app`)

> 📌 **Note:** The full source code is **not** provided — only core structure, the root files (`layout.tsx` and `page.tsx` for the homepage), and key configs.

| File/Folder                              | Purpose                                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **about/page.tsx, layout.tsx** 😌        | About me and the project’s motivation.                                                                  |
| **api/groups/route.ts** 📡               | API route powering the persecution map — handles terrorist group data.                                  |
| **attestation/page.tsx, layout.tsx** 📖  | The theological argument — uses verses from the Bible and other religious texts to expose counterfeits. |
| **components/** 🗂️                      | Shared React/TSX UI components.                                                                         |
| **contact/page.tsx, layout.tsx** 📞      | How to contact me.                                                                                      |
| **contribute/page.tsx, layout.tsx** 💳   | Support page for donations or project backing.                                                          |
| **digest/page.tsx, layout.tsx** 📨       | **The Citadel Newsletter** signup — for updates on new posts and resources.                             |
| **entries/page.tsx, layout.tsx** 👩🏾‍💻 | Blog area — arguments and ongoing conversation threads.                                      |
| **firebase/config.ts** 📀                | Firebase configuration for auth and backend data.                                                       |
| **forum/page.tsx, layout.tsx** 🌉        | Description of the blog/forum and how to sign in to join the conversation.                              |
| **map/page.tsx, layout.tsx** 🗾          | Interactive map of global Christian persecution and related terror networks.                            |
| **prelude/page.tsx, layout.tsx** 👋🏾    | App introduction page.                                                                                  |
| **privacy/page.tsx, layout.tsx** 🔒      | Privacy policy.                                                                                         |
| **search/page.tsx, layout.tsx** 🔎       | Handles the navbar search feature.                                                                      |
| **data/sampledata.ts** 📈                | Sample data for the search component.                                                                   |
| **global.css**                           | Global app styles.                                                                                      |
| **layout.tsx, page.tsx** 🏠              | Root files for the overall app shell and homepage — includes resources section powered by Contentful.   |

---

## ✨ Key Features

* 📜 **In-depth arguments:** Study the visions of Daniel, Ezekiel, Revelation, and more — comparing translations to expose false doctrines.
* 🗺️ **Persecution map:** Live, interactive map of Christian persecution worldwide with details on the terrorist groups behind attacks.
* 📨 **The Citadel Newsletter:** Subscribe for updates on new blog posts and arguments.
* 📝 **Entries (Blog):** A growing library of posts to challenge, clarify, and equip believers.
* 🌉 **Forum:** Connect with others, share insights, and keep the discussion alive.
* 🔍 **Search:** Quickly find arguments and posts.
* 🏠 **Homepage resources:** Displays curated images and content — powered by Contentful.
* 👤 **About & Contact:** Learn my story and how to get in touch.

---

## 🚀 Getting Started

1️⃣ **Clone the repository:**

```bash
git clone <repo-url>
```

2️⃣ **Install dependencies:**

```bash
npm install
```

3️⃣ **Add your Firebase and Contentful configs:**
Update `firebase/config.ts` and your Contentful API keys for the homepage resources.

4️⃣ **Run the dev server:**

```bash
npm run dev
```

---

## 🗝️ Notes

* ✅ Root `layout.tsx` and `page.tsx` are provided for the global shell and homepage.
* ✅ The persecution map uses **Leaflet.js** and **Mapbox GL JS**.
* ✅ **Contentful** is used **only** for the homepage resources section.
* ✅ The full app code is **not** provided.

---

## 🌍 Connect & Contribute

* For questions or ideas, use the **Contact page**.
* Code, research, or prayer contributions are always welcome.
* Support **The Counterfeit** through the **Contribute page**.

---

## 📜 Final Word

> *“Let no man deceive you by any means…”* — **2 Thessalonians 2:3 (KJV)**

**May The Counterfeit help you stand firm in the truth in these last days.** ✝️
