import React from "react";
import PostCard from "./PostCard";

// Import the PostCard here

export function PostList({ posts, onLike }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  );
}
