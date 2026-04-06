# gdg_task3
GDG 2026- first task

# 🖼️ Real-Time Upvote Gallery

[cite_start]A dynamic MERN stack application that allows users to share images and engage with a global community through real-time interactions[cite: 1, 2]. [cite_start]This project focuses on seamless state synchronization across multiple clients using WebSockets[cite: 7].

---

## 🚀 Features

### **User Experience**
* **Authentication**: Secure login and signup system using email authentication to protect user sessions.
* **Dynamic Gallery**: A central hub (Home/Gallery page) to view all uploaded images with real-time upvote counts.
* **Interactive Uploads**: A dedicated upload button that turns **green** during the process to provide immediate visual feedback.
* **Personalized Views**: 
    * **Favorites Page**: Displays a curated collection of images that the specific user has upvoted.
    * **Profile Page**: Manage your account and view your personal contributions.

### **Real-Time Mechanics**
* [cite_start]**Live Syncing**: When User A upvotes a post, User B sees the number jump immediately without refreshing the page[cite: 4].
* [cite_start]**Milestone Rewards**: When an image hits **3 upvotes**, it triggers a visual "pop" or animation and the background of the image card changes to highlight its popularity[cite: 5].
* [cite_start]**Race Condition Prevention**: Backend logic ensures that simultaneous clicks from multiple users increment the database correctly using transactions[cite: 8].

---

## 🛠️ Tech Stack

### **Frontend**
* **React & Vite**: For a fast, modern development experience and efficient rendering.
* [cite_start]**Socket.io-client**: Enables the bidirectional event-based communication for real-time updates[cite: 7].
* **CSS**: Custom styling for responsive layouts and milestone animations.

### **Backend**
* [cite_start]**Node.js & Express**: Scalable server architecture[cite: 6].
* [cite_start]**Socket.io**: To broadcast upvotes to everyone currently looking at the gallery[cite: 7].
* **Multer & Cloudinary**: For handling image uploads and cloud-based storage.
* **MongoDB (Local)**: NoSQL database for storing user profiles, image metadata, and upvote counts.

---

## 📦 Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/your-username/real-time-gallery.git](https://github.com/your-username/real-time-gallery.git)
    cd real-time-gallery
    ```

2.  **Install dependencies**:
    ```bash
    # Install backend dependencies
    cd server
    npm install

    # Install frontend dependencies
    cd ../client
    npm install
    ```

3.  **Environment Setup**:
    Create a `.env` file in the `server` directory:
    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/gallery
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

4.  **Run the application**:
    ```bash
    # Terminal 1: Backend
    cd server
    npm start

    # Terminal 2: Frontend
    cd client
    npm run dev
    ```

---

## 🛠️ Architecture Highlights

* [cite_start]**Socket Integration**: The server listens for upvote events and uses `Socket.io` to broadcast changes to all active tabs or browsers[cite: 7].
* **Visual States**: Images with 3 likes utilize specific CSS classes to trigger animations and background transitions.
* **Persistence**: All "likes" are stored in the database, ensuring that the Favorites page correctly displays only the images a particular person has upvoted.