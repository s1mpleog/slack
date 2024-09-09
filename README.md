---

# 🚀 Real-Time Communication App (Slack Clone)

A fullstack, real-time communication application inspired by **Slack**, featuring workspaces, channels, direct messaging, threads, and more. Built with **Next.js 14** for the frontend, **Convex Auth** for authentication, and **Tailwind CSS** for a sleek and responsive UI. **Convex** is used as the backend to handle real-time communication and database management.

## 📚 Table of Contents

- [🎯 Overview](#overview)
- [✨ Key Features](#key-features)
- [🔧 Technologies Used](#technologies-used)
- [📦 Project Setup](#project-setup)
- [🚀 Deployment](#deployment)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

## 🎯 Overview

This project is a **real-time messaging application** designed to improve communication in teams. The app allows users to create workspaces, channels, and 1:1 conversations, all with real-time updates. Convex powers the backend, ensuring seamless and scalable communication while keeping the user experience smooth.

## ✨ Key Features

- **Real-Time Messaging**: Instant updates using Convex for all channels and conversations.
- **Workspaces and Channels**: Organize conversations with distinct workspaces and channels.
- **Direct Messaging**: Send private 1:1 messages.
- **Threaded Conversations**: Keep discussions organized with thread-based replies.
- **Message Reactions**: React to messages with emojis.
- **Message Editing & Deletion**: Modify or remove messages.
- **Role-Based Access Control**: Manage permissions for different user roles (admin, member).
- **Image Attachments**: Share images within conversations.
- **Authentication**: Secure sign-in with multiple providers using NextAuth v5.
- **Invite System**: Easily invite team members via email or invite codes.
- **User Profiles**: Customize and manage your user profile.

## 🔧 Technologies Used

This project is built using modern technologies for fullstack web development:

- **Frontend**: [Next.js 14](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://shadcn.com/)
- **Backend**: [Convex](https://convex.dev/)
- **Authentication**: [Convex Auth](https://docs.convex.dev/auth)
- **Real-Time Updates**: WebSockets powered by Convex
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Project Setup

### Prerequisites

- **Node.js** (version 18+)
- **Convex** account for backend management

### Steps to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/s1mpleog/slack
   cd slack
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the environment variables**:

   Create a `.env` file in the root of your project with the following variables:

   ```plaintext
   CONVEX_DEPLOYMENT=your_convex_deployment
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open the app**: Go to `http://localhost:3000` to see your app in action.

## 🚀 Deployment

To deploy this app on [Vercel](https://vercel.com/), follow these steps:

1. **Push the code to GitHub**.
2. **Connect your GitHub repository** to Vercel.
3. **Add the required environment variables** (same as in your `.env` file).
4. **Click Deploy**! 🎉

## 🤝 Contributing

Contributions are welcome! Here's how you can get involved:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push your branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---
