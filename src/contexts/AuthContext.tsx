
import React, { createContext, useContext, useState, useEffect } from 'react';

// Mock user types - in a real app, these would be more comprehensive
export interface User {
  id: string;
  name: string;
  email: string;
  userType: 'business' | 'customer';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string, userType: 'business' | 'customer') => Promise<void>;
  signup: (userData: Partial<User> & { password: string }) => Promise<void>;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved user in localStorage on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('wowpromo_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  // In a real app, this would connect to a backend service
  const login = async (email: string, password: string, userType: 'business' | 'customer') => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const mockUser: User = {
        id: `user-${Date.now()}`,
        name: email.split('@')[0],
        email,
        userType
      };
      
      setUser(mockUser);
      localStorage.setItem('wowpromo_user', JSON.stringify(mockUser));
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: Partial<User> & { password: string }) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful signup
      const mockUser: User = {
        id: `user-${Date.now()}`,
        name: userData.name || 'User',
        email: userData.email || '',
        userType: userData.userType || 'customer'
      };
      
      setUser(mockUser);
      localStorage.setItem('wowpromo_user', JSON.stringify(mockUser));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('wowpromo_user');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoading, 
        login, 
        signup, 
        logout,
        isLoggedIn: !!user 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
