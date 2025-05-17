import React from 'react';
import { Heart } from 'lucide-react';
// Use this heart icon to create the like button
function PostCard({ id, username, imageUrl, caption, likes, onLike }) {
  const getInitial = (name) => name.charAt(0).toUpperCase();

  return (
    <div className="post bg-white border border-gray-300 rounded-lg mb-6 shadow-sm overflow-hidden">
            {/* Build your post card here */}
      

      <div className="post-header flex items-center gap-3 p-3">
        <div className="avatar w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white font-semibold flex items-center justify-center">
          {getInitial(username)}
        </div>
        <span className="username font-semibold text-sm">{username}</span>
      </div>


      <img src={imageUrl} alt="post" className="post-image w-full object-cover aspect-square" />


      <div className="post-actions px-3 py-2">
        <button onClick={() => onLike(id)} className="like-button flex items-center gap-2 text-gray-800">
          <Heart size={24} />
          <span className="text-sm">{likes} {likes === 1 ? 'like' : 'likes'}</span>
        </button>
      </div>


      <div className="post-caption px-3 pb-4 text-sm leading-relaxed">
        <span className="username font-semibold mr-1">{username}</span>
        {caption}
      </div>
    </div>
  );
}

export default PostCard;
