import React from 'react';
import {
  onlineFriends,
  trendingTopics,
  currentUser,
} from '../data/mockData';

export default function RightPanel() {
  return (
    <aside className="app-right-panel" aria-label="Activity Panel">
      {/* 1. Online Friends (Discord Minimal) */}
      <div className="panel-widget">
        <div className="panel-widget-title">
          <span>Active Now</span>
          <span className="online-count-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--status-online)' }} />
            {onlineFriends.length}
          </span>
        </div>

        <div className="friends-activity-list">
          {onlineFriends.map((friend) => (
            <div
              key={friend.id}
              className="friend-item"
              onClick={() => alert(`Chat with @${friend.username}`)}
              title={`Chat with ${friend.name}`}
            >
              <div className="friend-avatar-wrap">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="friend-avatar-img"
                  onError={(e) => {
                    e.currentTarget.src = currentUser.fallbackAvatar;
                  }}
                />
                <span className={`status-indicator ${friend.status}`} />
              </div>

              <div className="friend-info">
                <span className="friend-name">{friend.name}</span>
                {friend.activity && (
                  <span className="rich-presence-detail">
                    {friend.activity.app}: {friend.activity.type}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Trending Topics */}
      <div className="panel-widget">
        <div className="panel-widget-title">
          <span>Trending Topics</span>
        </div>

        <div className="trending-topics-list">
          {trendingTopics.map((topic) => (
            <div
              key={topic.tag}
              className="trending-item"
              onClick={() => alert(`Explore ${topic.tag}`)}
            >
              <span className="trending-category">{topic.category}</span>
              <span className="trending-tag">{topic.tag}</span>
              <span className="trending-count">{topic.posts}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Minimal Footer */}
      <div className="panel-footer-links">
        <a href="#about" onClick={(e) => e.preventDefault()}>About</a>
        <span>•</span>
        <a href="#help" onClick={(e) => e.preventDefault()}>Help</a>
        <span>•</span>
        <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy</a>
        <span>•</span>
        <a href="#terms" onClick={(e) => e.preventDefault()}>Terms</a>
        <div style={{ width: '100%', marginTop: '4px' }}>© 2026 Nexus</div>
      </div>
    </aside>
  );
}
