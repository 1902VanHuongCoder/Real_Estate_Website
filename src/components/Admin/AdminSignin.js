import React, { useState } from 'react'
import {db} from '../../firebase_setup/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

const AdminSigninForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [introductionKey, setIntroductionKey] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const navigate = useNavigate();
        const addUserAccount = async () => {
            await addDoc(collection(db, 'admin_account'), {
                username: userName,
                password: password
            })
        }


        const handleSignin = async (e) => {
            e.preventDefault();
            await addUserAccount();
            try{
                navigate('/admin/login');
            }catch(error){
                navigate('/error');
            }
            
        }
  return (
    <div>
        <h1>Sign In</h1>
        <label>Username or email <input type='text' placeholder='username' id='username' onChange={(e) => setUserName(e.target.value)}/></label>
        <br /><label>Password <input type='password' placeholder='password' id='password' onChange={(e) => setPassword(e.target.value)}/></label>
        <br /><label>Conform password<input type='password' placeholder='conformpassword' id='conformpassword' onChange={(e) => setConformPassword(e.target.value)}/></label>
        <br /><label>Introduction Key<input type='text' placeholder='Introduction Key' id='introductionkey' onChange={(e) => setIntroductionKey(e.target.value)}/></label>
        <br /><button onClick={(e) => handleSignin(e)}>Sign In</button>
    </div>
  )
}

export default AdminSigninForm