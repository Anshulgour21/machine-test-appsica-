import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Plus, MessageSquare, User } from 'lucide-react';
import { currentUser } from '../data/mockData';

export default function BottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
      <NavLink
        to="/"
        end 
        className={({ isActive }) =>
          `bottom-nav-item ${isActive ? 'active' : ''}`
        }
        aria-label="Home" 
      >
        <Home size={22} /> 
      </NavLink> 

      <NavLink
        to="/explore"
        className={({ isActive }) =>
          `bottom-nav-item ${isActive ? 'active' : ''}`
        }
        aria-label="Explore"
      >
        <Compass size={22} />
      </NavLink>

      <button
        type="button"
        className="bottom-create-btn"
        onClick={() => alert('Create new post modal (Initial Layout Prototype)')}
        aria-label="Create Post"
      >
        <Plus size={20} strokeWidth={2.5} />
      </button>

      <NavLink
        to="/messages"
        className={({ isActive }) =>
          `bottom-nav-item ${isActive ? 'active' : ''}`
        }
        aria-label="Messages"
      >
        <div style={{ position: 'relative', display: 'flex' }}>
          <MessageSquare size={22} />
          {currentUser.unreadMessages > 0 && (
            <span
              style={{
                position: 'absolute',
                top: -2,
                right: -4,
                width: 7,
                height: 7,
                borderRadius: '50%',
                backgroundColor: 'var(--accent-primary)',
              }}
            />
          )}
        </div>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `bottom-nav-item ${isActive ? 'active' : ''}`
        }
        aria-label="Profile"
      >
        <User size={22} />
      </NavLink>
    </nav>
  );
}
