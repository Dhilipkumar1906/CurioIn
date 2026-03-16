import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Sidebar from '../components/Sidebar';
import { FIELDS, CATEGORIES } from '../data/mockData';
import { Search } from 'lucide-react';

export default function Explore() {
  const { user, setUser } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const selectedFields = user?.selectedFields || [];

  const handleJoin = (fieldId) => {
    if (selectedFields.includes(fieldId)) return;
    const updatedFields = [...selectedFields, fieldId];
    const updatedUser = { ...user, selectedFields: updatedFields };
    setUser(updatedUser);
    localStorage.setItem('curiopath_user', JSON.stringify(updatedUser));
  };

  const filteredFields = FIELDS.filter(f => {
    const matchesSearch = f.title.toLowerCase().includes(searchTerm.toLowerCase()) || f.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || f.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Explore New Paths</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>Discover new fields to learn and unlock more companions.</p>
        </header>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, position: 'relative', minWidth: '300px' }}>
            <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
            <input 
              type="text" 
              placeholder="Search fields, skills, topics..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '12px', border: '1px solid var(--border)', fontSize: '1rem' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--card-bg)', padding: '0.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
            {['All', CATEGORIES.TECH, CATEGORIES.EXTRA].map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  background: activeCategory === cat ? 'var(--primary)' : 'transparent',
                  color: activeCategory === cat ? 'white' : 'var(--text-dark)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredFields.map(field => {
            const isJoined = selectedFields.includes(field.id);

            return (
              <div key={field.id} className="card animate-slide-up" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: `${field.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                      {field.companion.avatar}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem' }}>{field.title}</h3>
                      <span style={{ fontSize: '0.8rem', color: field.color, background: `${field.color}15`, padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>
                        {field.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', flex: 1 }}>{field.description}</p>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: '500' }}>
                    Guide: {field.companion.name}
                  </div>
                  <button 
                    className="btn-primary" 
                    onClick={() => handleJoin(field.id)}
                    disabled={isJoined}
                    style={{ background: isJoined ? 'var(--text-light)' : 'var(--primary)', cursor: isJoined ? 'not-allowed' : 'pointer' }}
                  >
                    {isJoined ? 'Joined' : 'Join Path'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
