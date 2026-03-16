import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { LayoutDashboard, Compass, BookOpen, Trophy, Gift, Settings, LogOut, BrainCircuit } from 'lucide-react';

export default function Sidebar() {
  const { logout } = useContext(UserContext);

  const links = [
    { to: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/explore', icon: <Compass size={20} />, label: 'Explore' },
    { to: '/leaderboard', icon: <Trophy size={20} />, label: 'Leaderboard' },
    { to: '/rewards', icon: <Gift size={20} />, label: 'Rewards' },
    { to: '/settings', icon: <Settings size={20} />, label: 'Settings' }
  ];

  return (
    <aside style={{ width: '250px', background: 'var(--card-bg)', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', padding: '1.5rem', height: '100vh', position: 'sticky', top: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '3rem' }}>
        <BrainCircuit size={28} />
        CurioIn
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem 1rem',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: isActive ? '600' : '500',
              color: isActive ? 'var(--primary)' : 'var(--text-light)',
              background: isActive ? '#EEF2FF' : 'transparent',
              transition: 'background 0.2s, color 0.2s'
            })}
          >
            {link.icon} {link.label}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={logout}
        style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', color: '#EF4444', fontWeight: '500', borderRadius: '12px', transition: 'background 0.2s' }}
        onMouseOver={e => e.currentTarget.style.background = '#FEE2E2'}
        onMouseOut={e => e.currentTarget.style.background = 'transparent'}
      >
        <LogOut size={20} /> Logout
      </button>
    </aside>
  );
}
