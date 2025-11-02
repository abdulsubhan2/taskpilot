
import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
