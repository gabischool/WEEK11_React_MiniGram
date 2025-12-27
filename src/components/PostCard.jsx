import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({post, onLike }) {
  console.log(post)
  return (
    <div className="post">
              <div className="post-header">
                <h3>{post.username}</h3>
              </div>
              <img className="post-image" src={post.imageUrl} alt={`Post by ${post.username}`} />
              <p className="caption">{post.caption}</p>
              <div className="post-footer">
                <button onClick={() => onLike(post.id)} className="like-button">
                  <Heart size={20} />
                  <span>{post.likes}</span>
                </button>
              </div>
            </div>

  );
}

export default PostCard;
