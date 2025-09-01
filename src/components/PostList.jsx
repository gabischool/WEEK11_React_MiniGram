import React from 'react';

import { Expand } from 'lucide-react';

// Import the PostCard here
import PostCard from "./PostCard"


 function PostList({ posts, onLike }) {


  return (
    <div className="post-list">
       {/* Loop through the posts here and pass to the PostCard  */}
       {posts.map((post) =>
       (
        <PostCard
        key={post.id}
        username={post.username}
        imageUrl={post.imageUrl}
        caption={post.caption}
        likes={post.likes}
        onLike={() => onLike(post.id)}
        />
       ))}


     {posts.map((post) => (
  <PostCard 
    post={post}
    onLike={onLike}
  />
))}
      
     
    </div>
  );
}



export default PostList;


