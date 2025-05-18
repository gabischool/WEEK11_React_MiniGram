import React from 'react';
import  PostCard  from './PostCard'; // Adjust the import path based on your project structure

export function PostList({ posts, onLike }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  );
}