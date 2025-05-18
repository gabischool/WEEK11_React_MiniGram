import React, { useState } from 'react';
import { Home, PlusSquare, Heart, User } from 'lucide-react';
import { PostList } from './components/PostList';
// Initial posts data
const initialPosts = [
  {
    id: 1,
    username: 'photography_lover',
    imageUrl:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=600&q=80',
    caption: '🌅 Chasing sunsets and making memories!',
    likes: 0,
  },
  {
    id: 2,
    username: 'travel_enthusiast',
    imageUrl:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
    caption: '✈️ Another day, another adventure! #wanderlust',
    likes: 0,
  },
  {
    id: 3,
    username: 'foodie_adventures',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    caption: '🍜 Found this amazing local spot! The flavors are incredible!',
    likes: 0,
  },
];


// The main app component
function App() {
  // Create state for posts with initialPosts as the default value
  const [posts, setPosts] = useState(initialPosts);

  // Increase the like count for the post with the given ID
  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">MiniGram</h1>
          <nav className="nav-icons">
            <button className="nav-button">
              <Home size={24} />
            </button>
            <button className="nav-button">
              <PlusSquare size={24} />
            </button>
            <button className="nav-button">
              <Heart size={24} />
            </button>
            <button className="nav-button">
              <User size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Render the list of posts */}
      <PostList posts={posts} onLike={handleLike} />
    </div>
  );
}

export default App;