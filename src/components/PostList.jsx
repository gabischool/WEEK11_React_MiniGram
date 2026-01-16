import React from 'react';

// Import the PostCard here
import PostCard from './PostCard';

export function PostList({ posts, onLike }) {
  return (
    <div className="post-list">
      {posts.map((post,index) => (
        <PostCard key={index}
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
          likes={post.likes}
          onLike={() => onLike(index)}
        />
      ))}
    </div>
  )
}

export default PostList;