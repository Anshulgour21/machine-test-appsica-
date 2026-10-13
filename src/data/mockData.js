// Mock Data for Nexus Social Dashboard
// Inspired by Instagram visual feed & Discord community activity

export const currentUser = {
  id: 'usr_me',
  name: 'Alex Rivera',
  username: 'alexrivera',
  tag: '#0420',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  fallbackAvatar: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%238b5cf6"/><text x="50" y="58" font-size="32" font-family="sans-serif" font-weight="bold" fill="white" text-anchor="middle">AR</text></svg>',
  status: 'online', // 'online' | 'idle' | 'dnd' | 'offline'
  statusText: 'Crafting UI components ⚡️',
  role: 'Core Member',
  followers: '14.2k',
  following: '582',
  postsCount: '84',
  unreadNotifications: 3,
  unreadMessages: 5,
};

export const stories = [
  {
    id: 'story-0',
    isUser: true,
    user: currentUser,
    hasStory: false,
    text: 'Add Story',
  },
  {
    id: 'story-1',
    user: {
      id: 'usr_1',
      name: 'Elena Rostova',
      username: 'elena_design',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      isVerified: true,
    },
    hasUnseen: true,
    timestamp: '20m ago',
  },
  {
    id: 'story-2',
    user: {
      id: 'usr_2',
      name: 'Kaito Tanaka',
      username: 'kaito_dev',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      isVerified: true,
    },
    hasUnseen: true,
    timestamp: '45m ago',
  },
  {
    id: 'story-3',
    user: {
      id: 'usr_3',
      name: 'Maya Lin',
      username: 'maya.art',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      isVerified: false,
    },
    hasUnseen: true,
    timestamp: '1h ago',
  },
  {
    id: 'story-4',
    user: {
      id: 'usr_4',
      name: 'Marcus Vance',
      username: 'marcus_v',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      isVerified: true,
    },
    hasUnseen: false,
    timestamp: '3h ago',
  },
  {
    id: 'story-5',
    user: {
      id: 'usr_5',
      name: 'Zara Chen',
      username: 'zarachen',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
      isVerified: true,
    },
    hasUnseen: false,
    timestamp: '5h ago',
  },
  {
    id: 'story-6',
    user: {
      id: 'usr_6',
      name: 'Liam Nova',
      username: 'liam_sound',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
      isVerified: false,
    },
    hasUnseen: false,
    timestamp: '6h ago',
  },
];

export const samplePosts = [
  {
    id: 'post-1',
    author: {
      id: 'usr_1',
      name: 'Elena Rostova',
      username: 'elena_design',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      isVerified: true,
      role: 'Staff Designer',
      status: 'online',
    },
    timestamp: '2h ago',
    location: 'Kyoto, Japan',
    caption:
      'Exploring neo-futurist architectural spaces in Kyoto. The interplay between physical cedar wood & ambient violet neon lighting is inspiring the next system theme ⛩️✨ What do you think of this aesthetic direction?',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=85',
    tags: ['#Architecture', '#SpatialDesign', '#Cyberpunk', '#KyotoVibes'],
    likesCount: 1428,
    commentsCount: 96,
    sharesCount: 38,
    isLiked: false,
    isBookmarked: false,
    topComment: {
      user: 'kaito_dev',
      text: 'The color grading on this is surreal. Love the ambient violet!',
    },
  },
  {
    id: 'post-2',
    author: {
      id: 'usr_2',
      name: 'Kaito Tanaka',
      username: 'kaito_dev',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      isVerified: true,
      role: 'Lead Architect',
      status: 'online',
    },
    timestamp: '4h ago',
    location: 'San Francisco, CA',
    caption:
      'Late night terminal session wrapping up the real-time audio sync bridge for our Discord audio bots. Low-latency WebRTC pipelines are finally humming at <12ms jitter! 🎧🚀',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85',
    tags: ['#WebRTC', '#DevLog', '#OpenSource', '#AudioEngine'],
    likesCount: 894,
    commentsCount: 64,
    sharesCount: 22,
    isLiked: true,
    isBookmarked: true,
    topComment: {
      user: 'marcus_v',
      text: 'Sub-12ms is huge! Are you using the new Opus codec build?',
    },
  },
  {
    id: 'post-3',
    author: {
      id: 'usr_3',
      name: 'Maya Lin',
      username: 'maya.art',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      isVerified: false,
      role: 'Visual Artist',
      status: 'online',
    },
    timestamp: '7h ago',
    location: 'Berlin, Germany',
    caption:
      'Finished canvas study #09: "Ethereal Horizon". Mixed acrylic and holographic foil beneath soft purple museum glass. Swipe to inspect the macro textures! 🌌🎨',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
    tags: ['#AbstractArt', '#Contemporary', '#Texture', '#StudioNight'],
    likesCount: 2310,
    commentsCount: 142,
    sharesCount: 87,
    isLiked: false,
    isBookmarked: false,
    topComment: {
      user: 'zarachen',
      text: 'The holographic foil layer is sublime! Can’t wait for the exhibition.',
    },
  },
];

export const onlineFriends = [
  {
    id: 'friend-1',
    name: 'Elena Rostova',
    username: 'elena_design',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    status: 'online',
    activity: {
      type: 'Designing',
      app: 'Figma',
      detail: 'Design System 2.0 • 45m',
      icon: 'figma',
    },
  },
  {
    id: 'friend-2',
    name: 'Kaito Tanaka',
    username: 'kaito_dev',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    status: 'online',
    activity: {
      type: 'Listening to',
      app: 'Spotify',
      detail: 'Daft Punk • Veridis Quo',
      icon: 'spotify',
    },
  },
  {
    id: 'friend-3',
    name: 'Marcus Vance',
    username: 'marcus_v',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    status: 'online',
    activity: {
      type: 'Playing',
      app: 'Cyberpunk 2077',
      detail: 'Exploring Night City • In Party (3/4)',
      icon: 'game',
    },
  },
  {
    id: 'friend-4',
    name: 'Zara Chen',
    username: 'zarachen',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    status: 'online',
    activity: {
      type: 'Coding',
      app: 'VS Code',
      detail: 'Nexus-web • app.tsx',
      icon: 'code',
    },
  },
  {
    id: 'friend-5',
    name: 'Maya Lin',
    username: 'maya.art',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    status: 'online',
    activity: {
      type: 'Streaming',
      app: 'Twitch',
      detail: 'Live Studio Painting 🖌️',
      icon: 'stream',
    },
  },
];

export const trendingTopics = [
  { tag: '#SpatialComputing', category: 'Technology', posts: '48.2k posts' },
  { tag: '#Cyberpunk2077', category: 'Gaming • Trending', posts: '124.9k posts' },
  { tag: '#React19', category: 'Web Development', posts: '31.5k posts' },
  { tag: '#NeonAesthetics', category: 'Design & Art', posts: '18.7k posts' },
];

export const suggestedCommunities = [
  {
    id: 'comm-1',
    name: 'Design Synthetics',
    members: '12.4k members',
    iconText: 'DS',
    accentColor: '#8b5cf6',
  },
  {
    id: 'comm-2',
    name: 'Creative Tech Lounge',
    members: '8.9k members',
    iconText: 'CT',
    accentColor: '#3b82f6',
  },
];
