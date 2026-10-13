import React, { useState } from 'react';
import { Image, Send } from 'lucide-react';
import { samplePosts, currentUser } from '../data/mockData';
import PostCard from './PostCard';

export default function Feed() {
  const [activeTab, setActiveTab] = useState('for-you');
  const [quickPostText, setQuickPostText] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!quickPostText.trim()) return;
    alert(`Post shared: "${quickPostText}" (Initial Layout Prototype)`);
    setQuickPostText('');
  };

  return (
    <div className="feed-container">
      {/* Minimal Post Creation Box */}
      <div className="quick-create-card">
        <div className="quick-create-top">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="author-avatar-img"
            onError={(e) => {
              e.currentTarget.src = currentUser.fallbackAvatar;
            }}
          />
          <input
            type="text"
            className="quick-create-input-btn"
            placeholder="Share an update or photo..."
            value={quickPostText}
            onChange={(e) => setQuickPostText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handlePostSubmit(e);
            }}
          />
        </div>

        <div className="quick-create-actions">
          <button
            type="button"
            className="media-attach-btn"
            onClick={() => alert('Select image/video (Initial Layout Prototype)')}
          >
            <Image size={15} />
            <span>Add Media</span>
          </button>

          <button
            type="button"
            className="post-action-btn-primary"
            onClick={handlePostSubmit}
          >
            <Send size={13} />
            <span>Post</span>
          </button>
        </div>
      </div>

      {/* Minimal Feed Filter Tabs */}
      <div className="feed-filter-bar">
        <div className="feed-tabs-list">
          <button
            className={`feed-tab-btn ${activeTab === 'for-you' ? 'active' : ''}`}
            onClick={() => setActiveTab('for-you')}
          >
            For You
          </button>
          <button
            className={`feed-tab-btn ${activeTab === 'following' ? 'active' : ''}`}
            onClick={() => setActiveTab('following')}
          >
            Following
          </button>
          <button
            className={`feed-tab-btn ${activeTab === 'trending' ? 'active' : ''}`}
            onClick={() => setActiveTab('trending')}
          >
            Trending
          </button>
        </div>
      </div>

      {/* Post Stream */}
      {samplePosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
