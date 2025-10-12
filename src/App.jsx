import { useState } from "react";
import { initialPosts } from "./data/posts";
import PostList from "./components/PostList";
import "./styles.css";

export default function App() {
  const [posts, setPosts] = useState(initialPosts);

  const handleToggleLike = (postId) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, likedByMe: !p.likedByMe, likes: p.likedByMe ? p.likes - 1 : p.likes + 1 } : p
      )
    );
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="nav">
          <div className="brand">MiniGram</div>
          <div className="icons">🏠 ➕ 🤍 👤</div>
        </div>
      </header>
      <main className="feed">
        <PostList posts={posts} onToggleLike={handleToggleLike} />
      </main>
    </div>
  );
}
