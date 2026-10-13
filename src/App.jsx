import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Compass,
  MessageSquare,
  Bell,
  Bookmark,
  User,
} from 'lucide-react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage'; 

export default function App() { 
  const [theme, setTheme] = useState('dark');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync theme attribute with DOM root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* 1. Sticky Top Header */}
      <Header
        theme={theme}
        onToggleTheme={handleToggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={handleToggleMobileMenu}
      />

      {/* 2. Main App Shell Layout (Desktop/Tablet/Mobile) */}
      <div className="app-main-body">
        {/* Left Sidebar */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={handleToggleSidebar}
          isMobileOpen={isMobileMenuOpen}
          onCloseMobile={handleCloseMobileMenu}
        />

        {/* Center Feed Column */}
        <main className="app-content-column" id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/explore"
              element={
                <PlaceholderPage
                  title="Explore & Discover"
                  description="Curated visual trends, rising creators, and vibrant community audio lounges."
                  icon={Compass}
                  badgeText="Trending"
                  items={[
                    {
                      title: "#SpatialComputing Lounge",
                      subtitle: "142 active creators discussing vision OS shaders",
                      action: "Drop In",
                    },
                    {
                      title: "#GenerativeAudio Hub",
                      subtitle: "Live community synthesis channel with 8 streams",
                      action: "Listen",
                    },
                    {
                      title: "Design Showcase Tokyo 2026",
                      subtitle: "Interactive digital gallery curated by Elena Rostova",
                      action: "View Gallery",
                    },
                  ]}
                />
              }
            />
            <Route
              path="/messages"
              element={
                <PlaceholderPage
                  title="Direct Messages"
                  description="Encrypted chat channels, voice lounges, and file transfers."
                  icon={MessageSquare}
                  badgeText="5 Unread"
                  items={[
                    {
                      title: "Elena Rostova (@elena_design)",
                      subtitle: "Sent 2 attachments: Kyoto_Colorway_palette.json",
                      action: "Reply",
                    },
                    {
                      title: "Kaito Tanaka (@kaito_dev)",
                      subtitle: "The Opus codec jitter is resolved! Check PR #88",
                      action: "Open Thread",
                    },
                    {
                      title: "Design Synthetics [Community #lounge]",
                      subtitle: "Marcus Vance started a screen share session",
                      action: "Join Call",
                    },
                  ]}
                />
              }
            />
            <Route
              path="/notifications"
              element={
                <PlaceholderPage
                  title="Notifications & Activity"
                  description="Real-time alerts, mentions, server invites, and likes."
                  icon={Bell}
                  badgeText="3 New"
                  items={[
                    {
                      title: "Kaito Tanaka liked your recent dev log",
                      subtitle: "34 minutes ago in #WebRTC DevLog",
                      action: "Inspect",
                    },
                    {
                      title: "Elena Rostova mentioned you in a comment",
                      subtitle: '"@alexrivera check out this shader preset!"',
                      action: "View Mention",
                    },
                    {
                      title: "Discord Bridge: System Alert",
                      subtitle: "Audio bot synced with room #cyber-lounge",
                      action: "Dismiss",
                    },
                  ]}
                />
              }
            />
            <Route
              path="/bookmarks"
              element={
                <PlaceholderPage
                  title="Saved Bookmarks"
                  description="Your personal repository of saved media, design inspirations, and code snippets."
                  icon={Bookmark}
                  badgeText="Collection"
                  items={[
                    {
                      title: "Low-Latency WebRTC Opus codec build",
                      subtitle: "Saved from @kaito_dev • 4h ago",
                      action: "View Post",
                    },
                    {
                      title: 'Canvas study #09: "Ethereal Horizon"',
                      subtitle: "Saved from @maya.art • Yesterday",
                      action: "View Post",
                    },
                  ]}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <PlaceholderPage
                  title="Alex Rivera"
                  description="Core Member @ Nexus • Creative Technologist & UI Architect"
                  icon={User}
                  badgeText="@alexrivera #0420"
                  items={[
                    {
                      title: "14.2k Followers • 582 Following • 84 Posts",
                      subtitle: "Member since February 2024 • Status: Online",
                      action: "Edit Profile",
                    },
                    {
                      title: "Audio bot & UI Component Labs",
                      subtitle: "Crafting modern Instagram & Discord interfaces",
                      action: "Share Profile",
                    },
                  ]}
                />
              }
            />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Right Activity Panel */}
        <RightPanel />
      </div>

      {/* 3. Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
