import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { UserContext } from '../context/UserContext';
import { User, Bell, Shield, PaintBucket } from 'lucide-react';

export default function Settings() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem' }}>Settings</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>Manage your account and preferences.</p>
        </header>

        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <section className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
              <User size={24} color="var(--primary)" /> Profile Information
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                <input type="text" value={user?.name || ''} readOnly style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text-dark)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                <input type="email" value={user?.email || ''} readOnly style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text-dark)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Education Level</label>
                <input type="text" value={user?.level || ''} readOnly style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text-dark)' }} />
              </div>
            </div>
            <button className="btn-outline" style={{ alignSelf: 'flex-start' }}>Edit Profile</button>
          </section>

          <section className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
              <Bell size={24} color="var(--primary)" /> Notifications
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem' }}>Daily Streaks Reminder</h4>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Remind me to login and keep my streak alive.</p>
              </div>
              <input type="checkbox" defaultChecked style={{ width: '24px', height: '24px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem' }}>Companion Messages</h4>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Get updates when AI companions have new challenges.</p>
              </div>
              <input type="checkbox" defaultChecked style={{ width: '24px', height: '24px' }} />
            </div>
          </section>

          <section className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
              <PaintBucket size={24} color="var(--primary)" /> Appearance (Coming Soon)
            </h2>
            <p style={{ color: 'var(--text-light)' }}>Dark mode and theme customization options will be available in future updates.</p>
          </section>

        </div>
      </main>
    </div>
  );
}
