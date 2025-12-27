import React from 'react';
import PostCard from './PostCard';


// Import the PostCard here

export function PostList({ posts, onLike, onComment, commentInput, setCommentInput }) {
  // const { posts, onLike } = props.posts
  return (
    <div className="post-list">
     {/* Loop through the posts here and pass to the PostCard */}
     
     {posts.map((post) => (
      <PostCard   
      username={post.username}
      imageUrl={post.imageUrl}
      caption={post.caption}
      likes={post.likes}
      onLike={() => onLike(post.id)} 
      onComment={() => onComment(post.id)}
      commentInput={commentInput}
      setCommentInput={setCommentInput}
      />
     ))
     } 
     
    </div>
  );
}

//{ posts, onLike }