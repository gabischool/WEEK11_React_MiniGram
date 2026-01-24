import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">



      <div className="header-content">
          <h1 className="header-title">MiniGram</h1>
          <nav className="nav-icons">
            <button className="nav-button"><Home /></button>
            <button className="nav-button"><PlusSquare /></button>
            <button className="nav-button"><Heart /></button>
            <button className="nav-button"><User /></button>
          </nav>
</div>
    </div>
  )
}

export default PostCard
