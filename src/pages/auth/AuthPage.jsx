import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { BrainCircuit } from 'lucide-react';

export default function AuthPage() {
  const [isSignUP, setIsSignUp] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name: name || 'Explorer', email });
    navigate('/setup');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="card animate-slide-up" style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: 'var(--primary)' }}>
          <BrainCircuit size={48} />
        </div>
        <h2 style={{ marginBottom: '0.5rem' }}>{isSignUP ? 'Create an Account' : 'Welcome Back'}</h2>
        <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
          {isSignUP ? 'Start your learning adventure today.' : 'Pick up where you left off.'}
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {isSignUP && (
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'Inter' }}
              required
            />
          )}
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'Inter' }}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'Inter' }}
            required
          />
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            {isSignUP ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', color: 'var(--text-light)' }}>
          {isSignUP ? 'Already have an account?' : 'Don\'t have an account?'}
          <button onClick={() => setIsSignUp(!isSignUP)} style={{ color: 'var(--primary)', fontWeight: '600', marginLeft: '0.5rem' }}>
            {isSignUP ? 'Log In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}
