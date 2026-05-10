import { createContext, useContext, useState, useEffect } from 'react';
console.log('AuthContext loaded');

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const t = localStorage.getItem('tl_token');
      const u = localStorage.getItem('tl_user');
      if (t && u && u !== 'undefined') { 
        setToken(t); 
        setUser(JSON.parse(u)); 
      }
    } catch (e) {
      console.error("Failed to parse user from local storage", e);
      localStorage.removeItem('tl_user');
      localStorage.removeItem('tl_token');
    }
    setLoading(false);
  }, []);

  const login = (userData, authToken) => {
    setUser(userData); setToken(authToken);
    localStorage.setItem('tl_token', authToken);
    localStorage.setItem('tl_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null); setToken(null);
    localStorage.removeItem('tl_token');
    localStorage.removeItem('tl_user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
