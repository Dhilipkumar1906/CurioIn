import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { UserContext } from '../../context/UserContext';
import { Trophy, Medal, Star } from 'lucide-react';

export default function Leaderboard() {
  const { user, points } = useContext(UserContext);
  const [tab, setTab] = useState('global'); // 'global' or 'field'

  const mockLeaderboard = [
    { name: 'Alex M.', points: 15400, avatar: '🦊' },
    { name: 'Sarah K.', points: 14250, avatar: '🐯' },
    { name: user?.name || 'You', points: points, avatar: '🦁', isUser: true },
    { name: 'David W.', points: 8900, avatar: '🐸' },
    { name: 'Elena R.', points: 7650, avatar: '🐼' }
  ].sort((a, b) => b.points - a.points);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem', textAlign: 'center' }}>
          <Trophy size={64} style={{ color: '#FCD34D', marginBottom: '1rem', filter: 'drop-shadow(0 4px 6px rgba(252, 211, 77, 0.5))' }} />
          <h1 style={{ fontSize: '2.5rem' }}>Leaderboard</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>See how you rank among other curiosity explorers.</p>
        </header>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ background: 'var(--card-bg)', padding: '0.5rem', borderRadius: '12px', display: 'flex', gap: '0.5rem', boxShadow: 'var(--shadow-sm)' }}>
            <button 
              className={`btn-outline ${tab === 'global' ? 'btn-primary' : ''}`} 
              style={{ border: 'none', padding: '0.5rem 1.5rem', background: tab === 'global' ? 'var(--primary)' : 'transparent', color: tab === 'global' ? 'white' : 'var(--text-dark)' }}
              onClick={() => setTab('global')}
            >
              Global Ranking
            </button>
            <button 
              className={`btn-outline ${tab === 'field' ? 'btn-primary' : ''}`} 
              style={{ border: 'none', padding: '0.5rem 1.5rem', background: tab === 'field' ? 'var(--primary)' : 'transparent', color: tab === 'field' ? 'white' : 'var(--text-dark)' }}
              onClick={() => setTab('field')}
            >
              Field Specific
            </button>
          </div>
        </div>

        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '0' }}>
          {mockLeaderboard.map((player, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '1.5rem 2rem', 
              borderBottom: index < mockLeaderboard.length - 1 ? '1px solid var(--border)' : 'none',
              background: player.isUser ? '#EEF2FF' : 'transparent',
              transition: 'background 0.2s'
            }}>
              <div style={{ width: '40px', fontWeight: 'bold', fontSize: '1.2rem', color: index < 3 ? 'var(--accent)' : 'var(--text-light)' }}>
                {index + 1}
              </div>
              <div style={{ fontSize: '2.5rem', marginRight: '1rem' }}>{player.avatar}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {player.name} {player.isUser && <span style={{ fontSize: '0.8rem', background: 'var(--primary)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>YOU</span>}
                </h3>
              </div>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {player.points.toLocaleString()} <Star size={20} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
