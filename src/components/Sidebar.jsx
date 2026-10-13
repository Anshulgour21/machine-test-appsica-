import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Compass,
  MessageSquare,
  Bell,
  Bookmark,
  User,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { currentUser } from '../data/mockData';

export default function Sidebar({
  isCollapsed,
  onToggleCollapse,
  isMobileOpen,
  onCloseMobile,
}) {
  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Explore', path: '/explore', icon: Compass },
    {
      label: 'Messages',
      path: '/messages',
      icon: MessageSquare,
      badge: currentUser.unreadMessages,
    },
    {
      label: 'Notifications',
      path: '/notifications',
      icon: Bell,
      badge: currentUser.unreadNotifications,
    },
    { label: 'Bookmarks', path: '/bookmarks', icon: Bookmark },
    { label: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="sidebar-backdrop"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      <aside
        className={`app-sidebar ${isCollapsed ? 'collapsed' : ''} ${
          isMobileOpen ? 'mobile-open' : ''
        }`}
      >
        <div className="sidebar-nav-section">
          {/* Subtle Collapse Button */}
          <div className="sidebar-toggle-row">
            <button
              className="sidebar-toggle-btn"
              onClick={onToggleCollapse}
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-label="Toggle sidebar width"
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>

          {/* Links list */}
          <nav aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={onCloseMobile}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  title={item.label}
                >
                  <div className="nav-link-icon-wrap">
                    <Icon size={20} />
                  </div>
                  <span className="nav-link-text">{item.label}</span>
                  {item.badge ? (
                    <span className="nav-badge-pill">{item.badge}</span>
                  ) : null}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* User Mini Profile Card at Bottom (Discord Inspired) */}
        <NavLink
          to="/profile"
          className="sidebar-user-card"
          onClick={onCloseMobile}
          title={`Signed in as ${currentUser.name}`}
        >
          <div className="user-avatar-wrap">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="user-avatar"
              onError={(e) => {
                e.currentTarget.src = currentUser.fallbackAvatar;
              }}
            />
            <span
              className={`status-indicator ${currentUser.status}`}
              title={currentUser.status}
            />
          </div>

          <div className="user-meta-info">
            <span className="user-display-name">{currentUser.name}</span>
            <span className="user-tag">
              @{currentUser.username}
            </span>
          </div>
        </NavLink>
      </aside>
    </>
  );
}
