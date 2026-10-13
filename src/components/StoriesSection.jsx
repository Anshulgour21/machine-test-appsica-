import React, { useRef } from 'react';
import { Plus } from 'lucide-react';
import { stories, currentUser } from '../data/mockData';

export default function StoriesSection() {
  const scrollRef = useRef(null);

  const handleStoryClick = (story) => {
    if (story.isUser) { 
      alert("Add new story (Initial Layout Prototype)");
    } else {
      alert(`Story by @${story.user.username} (Initial Layout Prototype)`);
    }
  }; 
 
  return ( 
    <section className="stories-card" aria-label="Stories">
      <div className="stories-track" ref={scrollRef}>
        {stories.map((story) => {
          if (story.isUser) {
            return ( 
              <button
                key={story.id} 
                className="story-item"  
                onClick={() => handleStoryClick(story)} 
                title="Your Story" 
              > 
                <div className="story-ring add-story">
                  <img 
                    src={currentUser.avatar}
                    alt="Your Avatar"
                    className="story-avatar-img"
                    onError={(e) => {
                      e.currentTarget.src = currentUser.fallbackAvatar;
                    }}
                  />
                  <span className="add-story-icon-plus">
                    <Plus size={11} strokeWidth={2.5} />
                  </span>
                </div>
                <span className="story-label">Your Story</span>
              </button>
            );
          }

          return (
            <button
              key={story.id}
              className="story-item"
              onClick={() => handleStoryClick(story)}
              title={`Story by @${story.user.username}`}
            >
              <div
                className={`story-ring ${story.hasUnseen ? 'unseen' : 'seen'}`}
              >
                <img
                  src={story.user.avatar}
                  alt={story.user.name}
                  className="story-avatar-img"
                  onError={(e) => {
                    e.currentTarget.src = currentUser.fallbackAvatar;
                  }}
                />
              </div>
              <span className="story-label">
                {story.user.username}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
