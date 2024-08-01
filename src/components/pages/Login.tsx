import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { auth, GoogleAuthProvider, signInWithPopup } from '../../firebaseConfig';
import '../../styles/login.css'; // Import the CSS file
import logo from '../../images/logo_edited.png';


const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      navigate('/listings');
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  };

  const handleGoogleLoginError = () => {
    console.error('Error during Google sign-in');
  };

  return (
    <div className="page-container">
      <a href='/home'><img id='logo-navbar' src={logo} alt='Logo' className='logo'/></a>
      <div className="login-box">
        <h2 className="login-heading">
          Join the Dorm Direct Family!
        </h2>
        <form className='inner-login-box'>
          <input type="email" placeholder="Email address" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="signup-button">Log In</button>
        </form>
        <p className="mt-4">Or log in with email! </p>
        <div className="google-login">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
