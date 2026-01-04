# 💬 Real-Time Chat Application

A modern **real-time chat application** built with **Next.js** and **Firebase**, featuring live messaging, authentication, and a smooth user experience.

The app uses **Firestore real-time listeners** to instantly sync messages across users and automatically scrolls to the latest message — similar to production chat platforms.

---

## 🚀 Features

- 💬 Real-time messaging with Firestore
- 🔐 Authentication via Firebase Auth
- 🧑‍🤝‍🧑 User-based message ownership
- 🖼️ User avatars rendered 
- ⬇️ Auto-scroll to the latest message
- ⚡ Loading states & optimistic UI
- 🎨 Clean and responsive UI

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- next/image

### Backend / Realtime
- Firebase
  - Firestore (real-time database)
  - Firebase Authentication
  - Server timestamps

---

```
⚙️ Getting Started
1. Clone the repository
git clone https://github.com/your-username/realtime-chat.git
cd realtime-chat

2. Install dependencies
npm install

3. Configure environment variables

Create a .env.local file:

NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

4. Run the development server
npm run dev
Open http://localhost:3000 in your browser.
