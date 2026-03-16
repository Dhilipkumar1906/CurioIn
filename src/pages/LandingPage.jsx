import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Sparkles, BrainCircuit } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="landing-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--card-bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.5rem', color: 'var(--primary)' }}>
          <BrainCircuit size={32} />
          CurioIn
        </div>
        <Link to="/auth" className="btn-primary">Get Started</Link>
      </nav>

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
        <div className="container animate-slide-up" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FEF3C7', color: '#D97706', padding: '0.5rem 1rem', borderRadius: '9999px', fontWeight: '600', marginBottom: '1.5rem' }}>
            <Sparkles size={16} /> Curiosity-Driven Learning
          </div>
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Follow your curiosity.<br />
            <span style={{ color: 'var(--primary)' }}>Master any skill.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '2.5rem' }}>
            Transform your interests into structured learning journeys. Guided by friendly AI companions, explore 25+ fields, earn rewards, and level up your knowledge playfully.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/auth" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Start Exploring</Link>
            <a href="#features" className="btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Learn More</a>
          </div>
        </div>
      </main>
    </div>
  );
}
