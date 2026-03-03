# Urdu News & Politics Website (React)

A modern, responsive Urdu-language news website with full RTL support, built using React.

## Features

- RTL-first Urdu layout with accessible semantic structure
- Reusable React components:
  - Header
  - Navigation menu
  - News cards
  - Article page
  - Footer
- Core sections:
  - قومی خبریں
  - بین الاقوامی خبریں
  - سوشل میڈیا
  - ٹیکنالوجی
- Pages:
  - Homepage (latest headlines)
  - Category pages
  - Single article page (title, image, full content, date, author)
- Comment section with Google/Facebook login integration (Firebase Auth)
- SEO-friendly metadata and responsive grid-based design

## Tech

- React + Vite
- React Router
- Firebase Auth (Google, Facebook)
- React Icons

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:4173`.

## Firebase auth setup

Create a `.env` file in project root:

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
```

If env variables are missing, login buttons still render and show a setup hint.

## Build

```bash
npm run build
```
