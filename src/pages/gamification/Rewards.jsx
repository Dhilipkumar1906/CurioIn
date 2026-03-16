import React, { useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import { UserContext } from '../../context/UserContext';
import { BADGES } from '../../data/mockData';
import { Gift, Star, Flame, Zap } from 'lucide-react';

export default function Rewards() {
  const { points, streak, completedModules } = useContext(UserContext);

  const earningsHistory = [
    { date: 'Today', action: 'Daily Login', amount: 10 },
    { date: 'Yesterday', action: 'Completed Module: UI Fundamentals', amount: 50 },
    { date: 'Yesterday', action: 'Won Quiz Arena: HTML & CSS', amount: 70 },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Gift size={40} color="var(--accent)" /> Rewards & Progress
          </h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>Track your achievements, badges, and learning currency.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(135deg, #EEF2FF, #E0E7FF)' }}>
            <Star size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '2rem', color: 'var(--primary)' }}>{points}</h2>
            <p style={{ color: 'var(--text-light)', fontWeight: '600' }}>Total Points</p>
          </div>
          
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)' }}>
            <Flame size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '2rem', color: 'var(--accent)' }}>{streak} Days</h2>
            <p style={{ color: '#B45309', fontWeight: '600' }}>Current Streak</p>
          </div>

          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)' }}>
            <Zap size={48} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>{completedModules.length}</h2>
            <p style={{ color: '#166534', fontWeight: '600' }}>Modules Completed</p>
          </div>
        </div>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Earned Badges</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {BADGES.map(badge => {
              // Mock badge unlock logic for prototype
              const isUnlocked = badge.id === 'curiosity' || badge.id === 'hero' && streak >= 7;
              
              return (
                <div key={badge.id} className="card" style={{ display: 'flex', gap: '1.5rem', opacity: isUnlocked ? 1 : 0.4, filter: isUnlocked ? 'none' : 'grayscale(1)' }}>
                  <div style={{ fontSize: '3rem', width: '80px', height: '80px', background: 'var(--background)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {badge.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{badge.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{badge.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: '1.5rem' }}>Recent Earnings</h2>
          <div className="card" style={{ padding: '0' }}>
            {earningsHistory.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem', borderBottom: i < earningsHistory.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>{item.action}</h4>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{item.date}</span>
                </div>
                <div style={{ fontWeight: 'bold', color: 'var(--secondary)', fontSize: '1.1rem' }}>
                  +{item.amount} pts
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
}
