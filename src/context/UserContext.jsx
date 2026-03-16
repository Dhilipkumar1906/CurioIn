import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('curiopath_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [points, setPoints] = useState(() => {
    return parseInt(localStorage.getItem('curiopath_points') || '0', 10);
  });

  const [streak, setStreak] = useState(() => {
    return parseInt(localStorage.getItem('curiopath_streak') || '0', 10);
  });

  const [unlockedModules, setUnlockedModules] = useState(() => {
    const saved = localStorage.getItem('curiopath_unlocked_modules');
    return saved ? JSON.parse(saved) : {};
  });

  const [completedModules, setCompletedModules] = useState(() => {
    const saved = localStorage.getItem('curiopath_completed_modules');
    return saved ? JSON.parse(saved) : [];
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('curiopath_user', JSON.stringify(userData));
    // Simulate daily login streak check here
    setStreak(prev => {
      const newStreak = prev + 1;
      localStorage.setItem('curiopath_streak', newStreak);
      return newStreak;
    });
    addPoints(10); // Daily login
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('curiopath_user');
  };

  const addPoints = (amount) => {
    setPoints(prev => {
      // 2x Multiplier if streak >= 7
      let finalAmount = streak >= 7 ? amount * 2 : amount;
      const newPoints = prev + finalAmount;
      localStorage.setItem('curiopath_points', newPoints.toString());
      return newPoints;
    });
  };

  const completeModule = (moduleId, fieldId) => {
    if (!completedModules.includes(moduleId)) {
      const newCompleted = [...completedModules, moduleId];
      setCompletedModules(newCompleted);
      localStorage.setItem('curiopath_completed_modules', JSON.stringify(newCompleted));
      addPoints(50);
      
      // Auto-unlock the next module in this prototype (simplified)
      // We will handle it in the component layer by unlocking module N+1
    }
  };

  const unlockModule = (moduleId) => {
    setUnlockedModules(prev => {
      const updated = { ...prev, [moduleId]: true };
      localStorage.setItem('curiopath_unlocked_modules', JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <UserContext.Provider value={{
      user, setUser, login, logout,
      points, setPoints, addPoints,
      streak, setStreak,
      completedModules, completeModule,
      unlockedModules, unlockModule
    }}>
      {children}
    </UserContext.Provider>
  );
};
