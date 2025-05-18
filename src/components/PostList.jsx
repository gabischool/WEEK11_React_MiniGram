import React from 'react';
import PostCard from './PostCard';

export function PostList({ posts, onLike }) {
  return (
    <div className="post-list p-4 max-w-xl mx-auto">
      {posts.map(post => (
        <PostCard
          key={post.id}
          id={post.id} // Waa muhiim in la gudbiyo
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
