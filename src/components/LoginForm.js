import React, { useState } from "react";
import { db } from '../firebase_setup/firebase'
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
console.log(username);

const handleLogin = async() => {
    const collection_ref = collection(db, 'users_account');
    const q = query(collection_ref, where("username", "==", username));
    const doc_refs = await getDocs(q);

    const res = [];
    doc_refs.forEach((account) => {
      res.push({
        id: account.id,
        ...account.data()
      })
    })

    if(res[0]?.username === username && res[0]?.password === password){
        let accountJSON = JSON.stringify({username: username, password: password});
        localStorage.setItem('loggedInAccount', accountJSON);
        navigate('/', {state: res[0]});
    }else{
      alert("You haven't been account yet!");
    }
}
  const handleRedirectToSignIn = () => 
  {
    navigate('/signin');
  }
  return (
    <div>
      <h1>Log In</h1>
      <label>
        Username: <input 
        type="text"
         placeholder="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        password: <input 
        type="password"
         placeholder="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>If you haven't account! <span onClick={handleRedirectToSignIn}>Sign in</span></p>
    </div>
  );
};

export default LoginForm;
