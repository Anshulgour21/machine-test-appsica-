import React, { useState } from 'react';
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
} from 'lucide-react';
import { currentUser } from '../data/mockData';

export default function PostCard({ post }) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked || false);

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  const handleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Post by @${post.author.username}`,
        text: post.caption,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link copied to clipboard');
    }
  };

  return (
    <article className="post-card" aria-label={`Post by ${post.author.name}`}>
      {/* 1. Clean Post Header */}
      <div className="post-header">
        <div className="post-author-group">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="author-avatar-img"
            onError={(e) => {
              e.currentTarget.src = currentUser.fallbackAvatar;
            }}
          />
          <div className="post-author-meta">
            <div className="post-author-title-row">
              <span className="author-name">{post.author.username}</span>
              <span className="author-handle">• {post.timestamp}</span>
            </div>
            {post.location && (
              <span className="post-time-meta">{post.location}</span>
            )}
          </div>
        </div>

        <button
          className="post-options-btn"
          onClick={() => alert('Post options menu (Initial Layout Prototype)')}
          aria-label="Post options"
        >
          <MoreHorizontal size={17} />
        </button>
      </div>

      {/* 2. Media Image */}
      {post.image && (
        <div className="post-media-container">
          <img
            src={post.image}
            alt={post.caption}
            className="post-image"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%2314161f"/><text x="300" y="200" font-family="sans-serif" font-size="16" fill="%236b7280" text-anchor="middle">Image</text></svg>';
            }}
          />
        </div>
      )}

      {/* 3. Action Bar (Heart, Comment, Share ... Bookmark) */}
      <div className="post-actions-bar">
        <div className="post-actions-left">
          <button
            className={`action-icon-btn ${isLiked ? 'liked' : ''}`}
            onClick={handleLike}
            aria-label={isLiked ? 'Unlike' : 'Like'}
          >
            <Heart size={21} />
          </button>

          <button
            className="action-icon-btn"
            onClick={() => alert(`View all comments`)}
            aria-label="Comment"
          >
            <MessageCircle size={21} />
          </button>

          <button
            className="action-icon-btn"
            onClick={handleShare}
            aria-label="Share"
          >
            <Share2 size={21} />
          </button>
        </div>

        <button
          className={`action-icon-btn ${isBookmarked ? 'bookmarked' : ''}`}
          onClick={handleBookmark}
          aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
        >
          <Bookmark size={21} />
        </button>
      </div>

      {/* 4. Caption, Likes & Comments */}
      <div className="post-content-body">
        <span className="post-likes-count">
          {likesCount.toLocaleString()} likes
        </span>

        <p className="post-caption-line">
          <span className="post-caption-author">{post.author.username}</span>
          {post.caption}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="post-tags-row">
            {post.tags.map((tag) => (
              <span key={tag} className="post-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <button
          className="view-comments-btn"
          onClick={() => alert(`View all ${post.commentsCount} comments`)}
        >
          View all {post.commentsCount} comments
        </button>

        {post.topComment && (
          <div className="post-comment-preview">
            <span className="comment-author">{post.topComment.user}</span>
            <span>{post.topComment.text}</span>
          </div>
        )}
      </div>
    </article>
  );
}
