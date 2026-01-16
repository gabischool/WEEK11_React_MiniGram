import React, {  useState } from 'react';
import { Home, PlusSquare, Heart, User } from 'lucide-react';

// Import the postlist component
import { PostList } from './components/PostList';
const initialPosts = [
  {
    id: 1,
    username: 'photography_lover',
    imageUrl: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=600&q=80',
    caption: '🌅 Chasing sunsets and making memories!',
    likes: 0,
    comment:[]
  },
  {
    id: 2,
    username: 'travel_enthusiast',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
    caption: '✈️ Another day, another adventure! #wanderlust',
    likes: 0,
    comment:[]
  },
  {
    id: 3,
    username: 'foodie_adventures',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    caption: '🍜 Found this amazing local spot! The flavors are incredible!',
    likes: 0,
    comment:[]
  },
];

function App() {
  // Create state to handle the posts
const [posts,setPost]=useState(initialPosts)
  const handleLike = (postId) => {
 setPost((prev)=>prev.map((post)=>postId===post.id?{...post, likes:post.likes+1}:post))
  }
 
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">MiniGram</h1>
          <nav className="nav-icons">
            <button className="nav-button"><Home /></button>
            <button className="nav-button"><PlusSquare /></button>
            <button className="nav-button"><Heart /></button>
            <button className="nav-button"><User /></button>
          </nav>
        </div>
      </header>
      {/* Show the post list here */}
      <div>
      <PostList posts={posts} onLike={handleLike}/>

      </div>
    
    </div>
  );
}

export default App;
