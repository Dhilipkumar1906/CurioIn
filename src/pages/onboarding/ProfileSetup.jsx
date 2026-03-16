import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { FIELDS } from '../../data/mockData';

export default function ProfileSetup() {
  const { user, setUser } = useContext(UserContext);
  const [step, setStep] = useState(1);
  const [level, setLevel] = useState('');
  const [selectedFields, setSelectedFields] = useState([]);
  const navigate = useNavigate();

  const toggleField = (id) => {
    setSelectedFields(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const handleFinish = () => {
    const updatedUser = { ...user, level, selectedFields };
    setUser(updatedUser);
    localStorage.setItem('curiopath_user', JSON.stringify(updatedUser));
    navigate('/dashboard');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '2rem' }} className="container">
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ color: 'var(--primary)' }}>Profile Setup</h2>
          <span style={{ fontWeight: '600', color: 'var(--text-light)' }}>Step {step} of 2</span>
        </div>

        {step === 1 && (
          <div className="card animate-slide-up">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>What is your education level?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['School Student', 'College Student', 'Lifelong Learner'].map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  style={{
                    padding: '1.5rem',
                    textAlign: 'left',
                    borderRadius: '12px',
                    border: `2px solid ${level === lvl ? 'var(--primary)' : 'var(--border)'}`,
                    background: level === lvl ? '#EEF2FF' : 'transparent',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    transition: 'all 0.2s'
                  }}
                >
                  {lvl}
                </button>
              ))}
            </div>
            <button 
              className="btn-primary" 
              style={{ width: '100%', marginTop: '2rem' }} 
              disabled={!level}
              onClick={() => setStep(2)}
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="card animate-slide-up">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Select your interests</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>Pick as many subjects as you like. You can always change these later.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', maxHeight: '500px', overflowY: 'auto', padding: '0.5rem' }}>
              {FIELDS.map(field => {
                const isSelected = selectedFields.includes(field.id);
                return (
                  <button
                    key={field.id}
                    onClick={() => toggleField(field.id)}
                    style={{
                      padding: '1rem',
                      borderRadius: '12px',
                      border: `2px solid ${isSelected ? field.color : 'var(--border)'}`,
                      background: isSelected ? `${field.color}15` : 'transparent',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.2s',
                      transform: isSelected ? 'scale(1.02)' : 'scale(1)'
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>{field.companion.avatar}</span>
                    <span style={{ fontWeight: '600', color: 'var(--text-dark)' }}>{field.title}</span>
                  </button>
                )
              })}
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button className="btn-outline" onClick={() => setStep(1)}>Back</button>
              <button 
                className="btn-primary" 
                style={{ flex: 1 }} 
                disabled={selectedFields.length === 0}
                onClick={handleFinish}
              >
                Complete Setup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
