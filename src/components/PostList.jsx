import React from 'react';
import  PostCard  from './PostCard';

// Import the PostCard here

 function PostList(props) {
  return (
    <div className="post-list">
     {/* Loop through the posts here and pass to the PostCard */}
     {props.posts.map((post, index) =>(
        <PostCard  key={index}
        avatar={post.avatar}
        username={post.username}
        imageUrl={post.imageUrl}
        caption={post.caption}
        likes={post.likes}
        onLike={() => props.onLike(index)}/> 
    
      ))}
    
      </div>
  )
}
export default PostList