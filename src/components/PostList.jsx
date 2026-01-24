import React from 'react';

 import PostCard from './PostCard';

 function PostList({ posts, onLike }) {
  const {posts, onLike} = props;
  return (
    <div className="post-list">
     {posts.map((post)=>(<PostCard key={post.id} post={post} onLike={onLike} />))}
    </div>
  );
}
export default PostList;