import React from 'react';
import { PostCard } from './PostCard';
// Import the PostCard here

export function PostList({ posts, onLike }) {
  return (
    <div className="post-list">
     {/* Loop through the posts here and pass to the PostCard */}
     {posts.map((post) => (
        <PostCard
          key={post.id}
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
          likes={post.likes}
          onLike={() => onLike(post.id)}
        />
      ))}
    </div>
  );
}