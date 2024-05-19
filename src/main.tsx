import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import initFirebase from './services/initFirebase.ts'
import './index.css'
import initFirebaseAuth from './services/initFirebaseAuth.ts'

initFirebase();
initFirebaseAuth();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
