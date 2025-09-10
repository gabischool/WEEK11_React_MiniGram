import React from 'react';

// Import the PostCard here
import PostCard from "./PostCard"

export function PostList({ posts, onLike }) {
  return (
    <div className="post-list">
     {/* Loop through the posts here and pass to the PostCard */}
     {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={onLike} />
      ))}

    </div>
  );
}
export default PostList