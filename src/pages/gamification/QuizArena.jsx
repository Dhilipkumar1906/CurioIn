import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { MOCK_QUIZ } from '../../data/mockData';
import Sidebar from '../../components/Sidebar';
import { Swords, Timer, Zap } from 'lucide-react';

export default function QuizArena() {
  const { points, addPoints } = useContext(UserContext);
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [bet, setBet] = useState(20); // Default bet

  const handleStart = () => {
    if (points >= bet) {
      addPoints(-bet);
      setStarted(true);
    } else {
      alert("Not enough points to bet!");
    }
  };

  const handleAnswer = (index) => {
    const isCorrect = index === MOCK_QUIZ.questions[currentQ].answerIndex;
    if (isCorrect) setScore(score + 1);

    if (currentQ < MOCK_QUIZ.questions.length - 1) {
      setCurrentQ(prev => prev + 1);
    } else {
      setFinished(true);
      if (score + (isCorrect ? 1 : 0) > MOCK_QUIZ.questions.length / 2) {
        addPoints(bet * 2 + 30); // Win bet + 30 base points
      }
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      <Sidebar />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="card" style={{ width: '100%', maxWidth: '600px', textAlign: 'center', padding: '3rem' }}>
          
          {!started && !finished && (
            <div className="animate-slide-up">
              <Swords size={64} color="var(--accent)" style={{ margin: '0 auto 1.5rem auto' }} />
              <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Welcome to the Arena</h1>
              <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.2rem' }}>
                Test your knowledge against others and win big!
              </p>
              
              <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', color: '#B45309' }}>Place Your Bet</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                  <button className="btn-outline" onClick={() => setBet(Math.max(10, bet - 10))}>-</button>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#B45309' }}>{bet} pts</span>
                  <button className="btn-outline" onClick={() => setBet(bet + 10)}>+</button>
                </div>
              </div>

              <button className="btn-primary" style={{ width: '100%', fontSize: '1.2rem', padding: '1rem' }} onClick={handleStart}>
                Enter Match ({MOCK_QUIZ.title})
              </button>
            </div>
          )}

          {started && !finished && (
            <div className="animate-slide-up">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: 'var(--text-light)', fontWeight: 'bold' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Timer size={20} /> 30s left</span>
                <span>Question {currentQ + 1} / {MOCK_QUIZ.questions.length}</span>
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>{MOCK_QUIZ.questions[currentQ].q}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {MOCK_QUIZ.questions[currentQ].options.map((opt, i) => (
                  <button key={i} className="btn-outline" style={{ padding: '1.5rem', fontSize: '1.1rem' }} onClick={() => handleAnswer(i)}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {finished && (
            <div className="animate-slide-up">
              <Zap size={64} color="var(--primary)" style={{ margin: '0 auto 1.5rem auto' }} />
              <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Arena Finished!</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                You scored: <strong style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>{score} / {MOCK_QUIZ.questions.length}</strong>
              </p>
              
              <div style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', textAlign: 'left' }}>
                <h3 style={{ marginBottom: '1rem' }}>Quiz Analysis</h3>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: 'var(--secondary)' }}>Strong Areas</h4>
                    <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-light)' }}>
                      <li>Selectors</li>
                      {score > 1 && <li>Tags</li>}
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: '#EF4444' }}>Needs Review</h4>
                    <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-light)' }}>
                      <li>Syntax Layout</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="btn-outline" onClick={() => { setStarted(false); setFinished(false); setCurrentQ(0); setScore(0); }}>
                  Play Again
                </button>
                <button className="btn-primary" onClick={() => window.history.back()}>
                  Back to Path
                </button>
              </div>
            </div>
          )}
          
        </div>
      </main>
    </div>
  );
}
