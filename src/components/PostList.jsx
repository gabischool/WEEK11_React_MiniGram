import React from 'react';


// Import the PostCard here
import PostCard from './PostCard';

 function PostList({ posts, onLike }) {
  return (
    <div className="post-list">


{posts.map((post)=> 
<PostCard    username={post.username}
imageUrl={post.imageUrl}
caption={post.caption}
likes={post.likes}
onLike ={onLike}
 />
)
}
     {/* /* Loop through the posts here and pass to the PostCard */}

    </div>


  )
}


export default PostList