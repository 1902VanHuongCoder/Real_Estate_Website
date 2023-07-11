import React, { useState } from 'react'
import {db} from '../firebase_setup/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom';

const SigninForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');

        const addUserAccount = async () => {
            await addDoc(collection(db, 'users_account'), {
                username: userName,
                password: password,              
            })
        }


        const handleSignin = (e) => {
            e.preventDefault();
            addUserAccount();
        }
  return (
    <div>
        <h1>Sign In</h1>
        <label>Username or email <input type='text' placeholder='username' id='username' onChange={(e) => setUserName(e.target.value)}/></label>
        <br /><label>Password <input type='password' placeholder='password' id='password' onChange={(e) => setPassword(e.target.value)}/></label>
        <br /><label>Conform password<input type='password' placeholder='conformpassword' id='conformpassword' onChange={(e) => setConformPassword(e.target.value)}/></label>
        <br /><button onClick={(e) => handleSignin(e)}>Sign In</button><Link to='/'><button style={{background: 'yellow'}}>Home</button></Link>
    </div> 
  )
}

export default SigninForm