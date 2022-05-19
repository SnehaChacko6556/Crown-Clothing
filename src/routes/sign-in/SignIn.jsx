import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
  } from '../../utils/firebase/firebase.js';
  import SignUp from '../../components/sign-up/SignUp.js';
  
  const SignIn = () => {
    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    };
  
    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        <SignUp/>
      </div>
    );
  };
  
  export default SignIn;