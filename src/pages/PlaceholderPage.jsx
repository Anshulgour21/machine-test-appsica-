import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PlaceholderPage({ title, description, icon: Icon, badgeText, items = [] }) {
  return (
    <div className="page-placeholder-container">
      <div className="placeholder-header">
        <div className="placeholder-icon-box">
          <Icon size={22} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h1 className="placeholder-title">{title}</h1>
            {badgeText && (
              <span 
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                {badgeText}
              </span>
            )}
          </div>
          <p className="placeholder-subtitle">{description}</p>
        </div>
      </div>

      <div className="placeholder-card-list">
        {items.map((item, idx) => (
          <div key={idx} className="placeholder-item-card">
            <div>
              <h4 style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: '2px' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                {item.subtitle}
              </p>
            </div>
            {item.action && (
              <button
                className="post-action-btn-primary"
                style={{ padding: '4px 12px', fontSize: '0.75rem' }}
                onClick={() => alert(`${item.action} triggered (Part 1 Layout)`)}
              >
                {item.action}
              </button>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--accent-primary)',
            fontSize: '0.84rem',
            fontWeight: 500,
          }}
        >
          <ArrowLeft size={15} /> Back to Feed
        </Link>
        <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
          Part 1 Initial Layout
        </span>
      </div>
    </div>
  );
}
