import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { app } from "./FirebaseConfig/firebase";

const Test2 = () => {
  const auth = getAuth(app);

  const [info, setInfo] = useState({ email: "", password: "" });

  const handleSignUp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, info.email, info.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Đăng nhập thành công");
        alert("Đã gửi email xác nhận đến email của bạn! Xác nhận ngay");
        console.log(user.email);
        sendEmailVerification(user);
        console.log(user.emailVerified);
        console.log();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <form onSubmit={(e) => handleSignUp(e)}>
      Email{" "}
      <input
        onChange={(e) => setInfo({ ...info, email: e.target.value })}
        type="email"
      />
      password{" "}
      <input
        onChange={(e) => setInfo({ ...info, password: e.target.value })}
        type="password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Test2;
