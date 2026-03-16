import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { FIELDS } from '../../data/mockData';
import { Flame, Star } from 'lucide-react';

export default function Dashboard() {
  const { user, points, streak } = useContext(UserContext);

  const activeFields = FIELDS.filter(f => user?.selectedFields?.includes(f.id));

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem' }}>Welcome back, {user?.name}! 👋</h1>
            <p style={{ color: 'var(--text-light)' }}>Ready to continue your learning journey?</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="card" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
              <Flame size={20} /> {streak} Day Streak
            </div>
            <div className="card" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
              <Star size={20} /> {points} Points
            </div>
          </div>
        </header>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Your Active Paths</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {activeFields.length > 0 ? activeFields.map(field => (
              <Link to={`/field/${field.id}`} key={field.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textDecoration: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: `${field.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    {field.companion.avatar}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem' }}>{field.title}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>Companion: {field.companion.name}</p>
                  </div>
                </div>
                <div style={{ background: 'var(--background)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '30%', height: '100%', background: field.color, borderRadius: '4px' }}></div>
                </div>
                <span className="btn-primary" style={{ textAlign: 'center', background: field.color }}>Continue</span>
              </Link>
            )) : (
              <p style={{ color: 'var(--text-light)' }}>You haven't selected any fields yet. Check out the Explore page!</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
