import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { FIELDS, MODULES } from '../../data/mockData';
import Sidebar from '../../components/Sidebar';
import { FileQuestion, Lock, CheckCircle, Send } from 'lucide-react';

export default function FieldDetail() {
  const { fieldId } = useParams();
  const { completedModules, unlockedModules } = useContext(UserContext);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([]);

  const field = FIELDS.find(f => f.id === fieldId);
  const modules = MODULES[fieldId] || [];

  if (!field) return <div>Field not found</div>;

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    const newMsg = { text: chatInput, sender: 'user' };
    setMessages([...messages, newMsg]);
    setChatInput('');

    // Mock AI reply
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: `That's a great question about ${field.title}! Let's explore that together. What do you think is the most challenging part?`,
        sender: 'ai'
      }]);
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <header className="card" style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem', background: `linear-gradient(135deg, ${field.color}15, var(--card-bg))` }}>
          <div style={{ fontSize: '4rem', background: '#fff', borderRadius: '50%', padding: '1rem', boxShadow: 'var(--shadow-sm)' }}>
            {field.companion.avatar}
          </div>
          <div>
            <h1 style={{ fontSize: '2.5rem', color: field.color }}>{field.title}</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', fontStyle: 'italic' }}>"{field.companion.greeting}"</p>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <section>
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Learning Path
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {modules.map((mod, index) => {
                const isCompleted = completedModules.includes(mod.id);
                // First module is always unlocked. Others unlocked if previous is completed.
                const isUnlocked = index === 0 || completedModules.includes(modules[index - 1].id) || unlockedModules[mod.id];
                
                return (
                  <div key={mod.id} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: isUnlocked ? 1 : 0.6 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: isCompleted ? 'var(--secondary)' : (isUnlocked ? field.color : 'var(--border)'), color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.1rem' }}>{mod.title}</h3>
                        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{mod.points} pts • {mod.description}</p>
                      </div>
                    </div>
                    <div>
                      {isCompleted ? (
                        <span style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                          <CheckCircle size={20} /> Completed
                        </span>
                      ) : isUnlocked ? (
                        <Link to={`/module/${fieldId}/${mod.id}`} className="btn-primary" style={{ background: field.color }}>
                          Start
                        </Link>
                      ) : (
                        <span style={{ color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Lock size={20} /> Locked
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link to="/quiz" className="btn-secondary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
                Enter Quiz Arena
              </Link>
            </div>
          </section>

          <section className="card" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <FileQuestion size={20} color={field.color} /> 
              {field.companion.name}'s Doubt Box
            </h3>
            
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '1rem' }}>
              <div style={{ alignSelf: 'flex-start', background: `${field.color}15`, padding: '1rem', borderRadius: '12px 12px 12px 0', maxWidth: '80%' }}>
                {field.companion.greeting} What's on your mind?
              </div>
              {messages.map((m, i) => (
                <div key={i} style={{ 
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start', 
                  background: m.sender === 'user' ? 'var(--primary)' : `${field.color}15`, 
                  color: m.sender === 'user' ? 'white' : 'var(--text-dark)',
                  padding: '1rem', 
                  borderRadius: m.sender === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0', 
                  maxWidth: '80%' 
                }}>
                  {m.text}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
              <input 
                type="text" 
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything..." 
                style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', fontFamily: 'Inter' }}
              />
              <button className="btn-primary" onClick={handleSendMessage} style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Send size={20} />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
