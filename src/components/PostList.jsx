import React from 'react';
import PostCard  from './PostCard';



// Import the PostCard here

export function PostList({ posts, onLike }) {
  console.log(posts)
  return (
    <div className="post-list">
      {posts.map ((post,index) =>(
        <PostCard
        key={index} 
       username={post.username} 
        imageUrl={post.imageUrl} 
        caption={post.caption} 
        likes={post.likes}
        onLike={() =>onLike (index)}
       />
        
      ))}
     
    </div>
  );
}
{/* Loop through the posts here and pass to the PostCard */}






