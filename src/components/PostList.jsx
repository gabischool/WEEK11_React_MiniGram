import React from 'react';
import PostCard from './PostCard';


 function PostList({ posts, onLike }) {

  return (
    <div className="postlist">
      {posts.map(post => (
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

export default PostList;
