import React from 'react';

// Import the PostCard here
import PostCard from './PostCard';
export function PostList({ posts, onLike }) {
  return (
    <div className="post-list">
     
     
     
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