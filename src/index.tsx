import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './styles/tailwind.css';


const rootElement = document.getElementById('root');


if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <GoogleOAuthProvider clientId="878123970204-0r6kos3uuj6u6m4edfctjq47j3iqnqta.apps.googleusercontent.com">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  );
} else {
  console.error('Failed to find the root element');
}
