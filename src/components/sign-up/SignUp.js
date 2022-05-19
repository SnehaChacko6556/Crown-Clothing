import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import "./SignUp.scss";


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const [formField, setFormField] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formField

  console.log(formField);

  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };


  const handleChange = (event) => {
    const { name, value } = event.target
    setFormField({ ...formField, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password!==confirmPassword){
      alert("Your password do not match!!!");
      return;
    }
    try{
      const { user } = await createAuthUserWithEmailAndPassword( email, password );
      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();
    }catch(error){
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  return (
    <div className='sign__up__container'>
    <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp
