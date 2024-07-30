import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { auth, GoogleAuthProvider, signInWithPopup } from '../firebaseConfig';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      navigate('/home');
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  };

  const handleGoogleLoginError = () => {
    console.error('Error during Google sign-in');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex h-screen">
        <div className="flex flex-col justify-center items-center w-1/2 bg-white p-10 ">
          <h2 className="text-7xl font-semibold mb-12 text-center leading-tight">
            Welcome to DormDirect
          </h2>
          <div className="flex justify-center mb-8 scale-150">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError}
            />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;