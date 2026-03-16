import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { FIELDS, MODULES } from '../../data/mockData';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ModuleViewer() {
  const { fieldId, moduleId } = useParams();
  const navigate = useNavigate();
  const { completeModule } = useContext(UserContext);
  const [step, setStep] = useState(0);

  const field = FIELDS.find(f => f.id === fieldId);
  const modules = MODULES[fieldId];
  const mod = modules?.find(m => m.id === moduleId);

  if (!mod || !field) return <div>Module not found</div>;

  const contentSteps = [
    { type: 'text', content: `Welcome to ${mod.title}! In this module, we will be covering the fundamental building blocks.` },
    { type: 'interactive', content: 'Let\'s try a quick challenge! Can you identify the correct syntax?', options: ['Option A', 'Option B', 'Option C'], answer: 1 },
    { type: 'text', content: `Great job! Understanding ${mod.title} is crucial for mastering ${field.title}.` }
  ];

  const handleNext = () => {
    if (step < contentSteps.length - 1) {
      setStep(step + 1);
    } else {
      completeModule(mod.id, fieldId);
      navigate(`/field/${fieldId}`);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', display: 'flex', flexDirection: 'column' }}>
      <header style={{ background: 'var(--card-bg)', padding: '1rem 2rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="btn-outline" onClick={() => navigate(`/field/${fieldId}`)} style={{ padding: '0.5rem', border: 'none' }}>
          <ArrowLeft size={24} color="var(--text-dark)" />
        </button>
        <h1 style={{ fontSize: '1.25rem' }}>{mod.title}</h1>
        <div style={{ marginLeft: 'auto', background: `${field.color}20`, padding: '0.5rem 1rem', borderRadius: '9999px', fontWeight: 'bold', color: field.color }}>
          {mod.points} XP
        </div>
      </header>

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }} className="container">
        <div className="card animate-slide-up" style={{ width: '100%', maxWidth: '800px', padding: '3rem', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '2rem' }}>
            <div style={{ fontSize: '4rem' }}>{field.companion.avatar}</div>
            <div style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
              {contentSteps[step].content}
            </div>

            {contentSteps[step].type === 'interactive' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', width: '100%', maxWidth: '400px' }}>
                {contentSteps[step].options.map((opt, i) => (
                  <button key={i} className="btn-outline" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {contentSteps.map((_, i) => (
                <div key={i} style={{ width: '40px', height: '8px', borderRadius: '4px', background: i <= step ? 'var(--primary)' : 'var(--border)' }} />
              ))}
            </div>
            <button className="btn-primary" onClick={handleNext} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {step === contentSteps.length - 1 ? <><CheckCircle2 size={20} /> Complete Module</> : 'Next'}
            </button>
          </div>
          
        </div>
      </main>
    </div>
  );
}
