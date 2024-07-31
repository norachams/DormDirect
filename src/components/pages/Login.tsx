import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { auth, GoogleAuthProvider, signInWithPopup } from '../../firebaseConfig';
import '../../styles/login.css'; // Import the CSS file
import logo from '../../images/just_logo.png'

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
      <img id='logo-navbar' src={logo} alt='Logo' className='logo'/>
      <div className="login-box">
        <h2 className="login-heading">
          Join the Dorm Direct Family!
        </h2>
        <form>
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email address" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <div>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms"> I agree to the <a href="#">terms & policy</a></label>
          </div>
          <button type="submit" className="signup-button">Signup</button>
        </form>
        <div className="google-login">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
        </div>
        <p className="mt-4">Have an account? <a href="/signin">Sign In</a></p>
      </div>
    </div>
  );
};

export default Login;
