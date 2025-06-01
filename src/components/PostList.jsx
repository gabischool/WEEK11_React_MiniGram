import React from 'react';
import PostCard from './PostCard';

export function PostList({ posts, onLike }) { 

  console.log (posts) 
  return (
    <div className="post-list">
     {posts.map((post) => (
        <PostCard key={post.id}  likes={post.likes} imageUrl={post.imageUrl} caption={post.caption} username={post.username} postid={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  );
}