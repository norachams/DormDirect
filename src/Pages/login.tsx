// src/components/Login.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, GoogleAuthProvider, signInWithPopup } from '../firebaseConfig';

const Login = () => {
    const navigate = useNavigate();
  
    const handleGoogleLogin = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result.user);
          navigate('/home');
         })
        .catch((error) => {
          console.error('Error during Google sign-in:', error);
        });
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome back to Dorm Direct!</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your password" />
            <a href="#" className="text-sm text-yellow-600 hover:underline">forgot password</a>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="h-4 w-4 text-yellow-600 focus:ring-yellow-400 border-gray-300 rounded" />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">Remember for 30 days</label>
          </div>
          <button type="button" className="w-full py-2 px-4 bg-yellow-600 text-white rounded-md shadow-md hover:bg-yellow-700 focus:outline-none">Login</button>
        </form>
        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>
        <div className="mt-6">
          <button onClick={handleGoogleLogin} className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" className="mr-2" />
            Sign in with Google
          </button>
          {/* You can add the button for Apple Sign-In later */}
        </div>
        <div className="mt-6 text-center text-sm">
          <p>Don’t have an account? <a href="#" className="text-yellow-600 hover:underline">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
