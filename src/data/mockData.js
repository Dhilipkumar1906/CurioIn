export const CATEGORIES = {
  TECH: 'Tech & Academic',
  EXTRA: 'Extracurricular'
};

export const FIELDS = [
  {
    id: 'web-dev',
    title: 'Web Development',
    category: CATEGORIES.TECH,
    description: 'Learn to build and style beautiful websites and web applications.',
    color: 'var(--primary)',
    companion: {
      name: 'Webby',
      greeting: 'Hi there! I am Webby. Ready to weave the web together?',
      avatar: '🌐'
    }
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    category: CATEGORIES.TECH,
    description: 'Explore algorithms that mimic human intelligence.',
    color: '#8B5CF6',
    companion: {
      name: 'Neuron',
      greeting: 'Greetings human! I am Neuron. Let us explore the limits of cognition.',
      avatar: '🧠'
    }
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    category: CATEGORIES.TECH,
    description: 'Train models to recognize patterns and make predictions.',
    color: '#EC4899',
    companion: {
      name: 'DataMind',
      greeting: 'Looking for patterns? I am DataMind. Let us train some models!',
      avatar: '📊'
    }
  },
  {
    id: 'data-science',
    title: 'Data Science',
    category: CATEGORIES.TECH,
    description: 'Extract insights and knowledge from structured and unstructured data.',
    color: '#14B8A6',
    companion: {
      name: 'Databot',
      greeting: 'Data is the new oil. Let me show you how to refine it!',
      avatar: '📈'
    }
  },
  {
    id: 'cyber',
    title: 'Cybersecurity',
    category: CATEGORIES.TECH,
    description: 'Protect systems, networks, and programs from digital attacks.',
    color: '#EF4444',
    companion: {
      name: 'ShieldX',
      greeting: 'Security breach detected! Just kidding. I am ShieldX. Let us secure the net.',
      avatar: '🛡️'
    }
  },
  {
    id: 'robotics',
    title: 'Robotics',
    category: CATEGORIES.TECH,
    description: 'Design, build, and operate automated mechanical systems.',
    color: '#64748B',
    companion: {
      name: 'RoboGuru',
      greeting: 'Beep bop beep. RoboGuru is online.',
      avatar: '🤖'
    }
  },
  {
    id: 'iot',
    title: 'Electronics & IoT',
    category: CATEGORIES.TECH,
    description: 'Connect everyday physical objects to the internet.',
    color: '#EAB308',
    companion: {
      name: 'Sparky',
      greeting: 'Bzzt! Sparky at your service. Let us connect everything!',
      avatar: '⚡'
    }
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    category: CATEGORIES.TECH,
    description: 'Create interactive experiences, rules, and virtual worlds.',
    color: '#84CC16',
    companion: {
      name: 'Pixel',
      greeting: 'Press Start to begin! I am Pixel.',
      avatar: '🎮'
    }
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    category: CATEGORIES.TECH,
    description: 'Build applications for iOS and Android devices.',
    color: '#0EA5E9',
    companion: {
      name: 'Appy',
      greeting: 'Got a phone? Let us make an app for it. I am Appy!',
      avatar: '📱'
    }
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    category: CATEGORIES.TECH,
    description: 'Deliver computing services over the Internet.',
    color: '#38BDF8',
    companion: {
      name: 'Cloudy',
      greeting: 'Feeling floaty? I am Cloudy, your guide to scalable servers.',
      avatar: '☁️'
    }
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    category: CATEGORIES.TECH,
    description: 'Understand decentralized, distributed ledgers and Web3.',
    color: '#F59E0B',
    companion: {
      name: 'Chainz',
      greeting: 'Decentralize everything! I am Chainz.',
      avatar: '⛓️'
    }
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    category: CATEGORIES.TECH,
    description: 'Design digital products that are useful, easy to use, and delightful.',
    color: '#F43F5E',
    companion: {
      name: 'Pixelina',
      greeting: 'Ah, aesthetic perfection. Let us design it together.',
      avatar: '✨'
    }
  },
  {
    id: 'programming',
    title: 'Programming Fundamentals',
    category: CATEGORIES.TECH,
    description: 'The logic and syntax that makes all software work.',
    color: '#10B981',
    companion: {
      name: 'Codey',
      greeting: 'Hello World! Let us write some logic.',
      avatar: '💻'
    }
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: CATEGORIES.TECH,
    description: 'Promote products and services using digital technologies.',
    color: '#D946EF',
    companion: {
      name: 'MarketBot',
      greeting: 'Ready to go viral? I am MarketBot.',
      avatar: '🎯'
    }
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    category: CATEGORIES.TECH,
    description: 'Start, manage, and scale a new business venture.',
    color: '#059669',
    companion: {
      name: 'BizMentor',
      greeting: 'Time to build an empire. I am BizMentor.',
      avatar: '🏢'
    }
  },
  {
    id: 'music',
    title: 'Music',
    category: CATEGORIES.EXTRA,
    description: 'Create, produce, and understand musical theories and instruments.',
    color: '#A855F7',
    companion: {
      name: 'Melody',
      greeting: 'La la la! Ready to create some tunes? I am Melody.',
      avatar: '🎵'
    }
  },
  {
    id: 'art',
    title: 'Art & Illustration',
    category: CATEGORIES.EXTRA,
    description: 'Express ideas visually using traditional and digital media.',
    color: '#FB923C',
    companion: {
      name: 'Canvas',
      greeting: 'Grab a brush, let us paint our imagination.',
      avatar: '🎨'
    }
  },
  {
    id: 'photography',
    title: 'Photography',
    category: CATEGORIES.EXTRA,
    description: 'Capture light and moments through a lens.',
    color: '#94A3B8',
    companion: {
      name: 'Lensy',
      greeting: 'Say cheese! I am Lensy, framing your world.',
      avatar: '📸'
    }
  },
  {
    id: 'video',
    title: 'Video Editing',
    category: CATEGORIES.EXTRA,
    description: 'Manipulate and arrange video shots to create a new work.',
    color: '#C084FC',
    companion: {
      name: 'Frame',
      greeting: 'Cut! Print! Let us edit this masterpiece.',
      avatar: '🎬'
    }
  },
  {
    id: 'public-speaking',
    title: 'Public Speaking',
    category: CATEGORIES.EXTRA,
    description: 'Communicate effectively and confidently to audiences.',
    color: '#EF4444',
    companion: {
      name: 'Orator',
      greeting: 'Microphone check, 1-2. Let us project confidence.',
      avatar: '🎤'
    }
  },
  {
    id: 'writing',
    title: 'Creative Writing',
    category: CATEGORIES.EXTRA,
    description: 'Write stories, novels, poetry, and engaging narratives.',
    color: '#6366F1',
    companion: {
      name: 'Quill',
      greeting: 'Once upon a time... let us write the rest!',
      avatar: '✍️'
    }
  },
  {
    id: 'chess',
    title: 'Chess & Strategy',
    category: CATEGORIES.EXTRA,
    description: 'Master the ancient game of kings and strategic thinking.',
    color: '#334155',
    companion: {
      name: 'Knight',
      greeting: 'E4. Your move. I am Knight.',
      avatar: '♟️'
    }
  },
  {
    id: 'fitness',
    title: 'Fitness & Sports Science',
    category: CATEGORIES.EXTRA,
    description: 'Understand body mechanics, nutrition, and exercise regimes.',
    color: '#22C55E',
    companion: {
      name: 'Flex',
      greeting: 'Let us get moving! No pain, no gain.',
      avatar: '💪'
    }
  },
  {
    id: 'language',
    title: 'Language Learning',
    category: CATEGORIES.EXTRA,
    description: 'Acquire new languages and understand linguistics.',
    color: '#EAB308',
    companion: {
      name: 'Polyglot',
      greeting: 'Hola! Bonjour! Hallo! Let us learn to talk to the world.',
      avatar: '🗣️'
    }
  },
  {
    id: 'astronomy',
    title: 'Astronomy & Space',
    category: CATEGORIES.EXTRA,
    description: 'Study the universe, stars, planets, and galaxies.',
    color: '#1E1B4B',
    companion: {
      name: 'Cosmo',
      greeting: 'To infinity and beyond! I am Cosmo.',
      avatar: '🔭'
    }
  }
];

export const MODULES = {
  'web-dev': [
    { id: 'wd-1', title: 'Introduction to the Web', description: 'How the internet works: clients, servers, and browsers.', points: 50 },
    { id: 'wd-2', title: 'HTML Fundamentals', description: 'Building the structure of web pages with semantic tags.', points: 50 },
    { id: 'wd-3', title: 'CSS Styling', description: 'Making things look pretty. Colors, layouts, and Flexbox.', points: 50 },
    { id: 'wd-4', title: 'JavaScript Basics', description: 'Adding interactivity with variables, loops, and functions.', points: 50 },
    { id: 'wd-5', title: 'Frontend Frameworks', description: 'Introduction to React and components.', points: 50 },
    { id: 'wd-6', title: 'Backend Basics', description: 'Servers, APIs, and databases.', points: 50 },
    { id: 'wd-7', title: 'Full Stack Project', description: 'Put it all together in one application.', points: 100 }
  ],
  'ai': [
    { id: 'ai-1', title: 'What is AI?', description: 'A brief history and overview of artificial intelligence.', points: 50 },
    { id: 'ai-2', title: 'Neural Networks Basics', description: 'How perceptrons and weights simulate a human brain.', points: 50 },
    { id: 'ai-3', title: 'Training Models', description: 'Backpropagation and gradients.', points: 50 }
  ]
};

// For fields without specific modules, we generate generic ones
FIELDS.forEach(field => {
  if (!MODULES[field.id]) {
    MODULES[field.id] = [
      { id: `${field.id}-1`, title: `Introduction to ${field.title}`, description: 'Learn the basic concepts.', points: 50 },
      { id: `${field.id}-2`, title: 'Core Principles', description: 'Dive deeper into the fundamental rules.', points: 50 },
      { id: `${field.id}-3`, title: 'Advanced Concepts', description: 'Mastering the skills.', points: 50 },
      { id: `${field.id}-4`, title: 'Final Project', description: 'Apply what you have learned.', points: 100 }
    ];
  }
});

export const INITIAL_ASSESSMENT_QUESTIONS = [
  { text: 'How familiar are you with this topic?', options: ['Beginner', 'Intermediate', 'Advanced'] },
  { text: 'Which of the following describes your learning goal?', options: ['Just curious', 'Academic requirement', 'Career switch', 'Fun side project'] }
];

export const MOCK_QUIZ = {
  id: 'html-css-quiz',
  fieldId: 'web-dev',
  title: 'HTML & CSS Arena',
  questions: [
    { q: 'Which tag is used for the largest heading in HTML?', options: ['<heading>', '<h6>', '<h1>', '<head>'], answerIndex: 2 },
    { q: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'], answerIndex: 1 },
    { q: 'Which CSS property controls text size?', options: ['font-size', 'text-style', 'text-size', 'font-style'], answerIndex: 0 }
  ]
};

export const BADGES = [
  { id: 'curiosity', icon: '🔍', title: 'Curiosity Explorer', description: 'Selected 5 or more fields of interest.' },
  { id: 'champion', icon: '🏆', title: 'Quiz Champion', description: 'Won 3 quizzes in the Arena.' },
  { id: 'hero', icon: '🔥', title: '7-Day Streak Hero', description: 'Logged in for 7 consecutive days.' },
  { id: 'master', icon: '👑', title: 'Domain Master', description: 'Completed all modules in a field.' }
];
