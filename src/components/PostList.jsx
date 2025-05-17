import React from 'react';

// Import the PostCard here

export function PostList({ posts, onLike }) {
  return (
    <div className="post-list">
     {/* Loop through the posts here and pass to the PostCard */}
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src={post.imageUrl} alt={post.caption} className="post-image" />
          <div className="post-info">
            <h2 className="post-username">{post.username}</h2>
            <p className="post-caption">{post.caption}</p>
            <button onClick={() => onLike(post.id)} className="like-button">
              ❤️ {post.likes}
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}