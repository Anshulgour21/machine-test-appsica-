import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Bell,
  Sun,
  Moon,
  Menu,
  X,
} from 'lucide-react';
import { currentUser } from '../data/mockData';

export default function Header({
  theme,
  onToggleTheme,
  isMobileMenuOpen,
  onToggleMobileMenu,
}) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="app-header">
      {/* Left: Mobile Toggle & Minimal Logo */}
      <div className="header-left">
        <button
          className="icon-btn mobile-menu-btn"
          onClick={onToggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <Link to="/" className="brand-logo-link">
          <div className="brand-glyph">N</div>
          <span className="brand-name">Nexus</span>
        </Link>
      </div>

      {/* Center: Minimal Search Field */}
      <div className="header-search">
        <div className="search-input-wrapper">
          <Search size={15} />
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              style={{ color: 'var(--text-muted)', cursor: 'pointer', display: 'flex' }}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          ) : (
            <span className="search-shortcut">⌘K</span>
          )}
        </div>
      </div>

      {/* Right: Theme Toggle, Notifications, Profile */}
      <div className="header-actions">
        {/* Theme Toggle Button */}
        <button
          className="icon-btn"
          onClick={onToggleTheme}
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

        {/* Notifications Icon with Badge */}
        <Link to="/notifications" className="icon-btn" aria-label="Notifications">
          <Bell size={18} />
          {currentUser.unreadNotifications > 0 && (
            <span className="icon-badge">{currentUser.unreadNotifications}</span>
          )}
        </Link>

        {/* User Avatar */}
        <Link to="/profile" title={currentUser.name}>
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="header-user-avatar"
            onError={(e) => {
              e.currentTarget.src = currentUser.fallbackAvatar;
            }}
          />
        </Link>
      </div>
    </header>
  );
}
