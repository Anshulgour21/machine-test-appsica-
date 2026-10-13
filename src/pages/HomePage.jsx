import React from 'react';
import StoriesSection from '../components/StoriesSection';
import Feed from '../components/Feed';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      <StoriesSection />
      <Feed />
    </div>
  );
}
