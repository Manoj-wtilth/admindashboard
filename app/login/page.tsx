'use client';
import React, { useState } from "react";
import styles from "./login.module.css";
import { useRouter } from 'next/navigation'
import loginImage from '../../public/Illustration.png';
import loginlogo from '../../public/loginlogo.png';
import toast from "react-hot-toast";

const Login: React.FC= () => {
  const [username , setUserName] = useState('');
  const [password , setPassword] = useState('');
  const router = useRouter()

  const loginAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body : JSON.stringify({username, password}),
      });
  
      if (response.ok) {
        toast.success("Successfully logged in");
        router.push('/dashboard');
      } else {
        toast.error("Username or password is not matching");
      }
    } catch (error) {
      toast.error("This is a error message!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <div className={styles.logo}>
        <img src={loginlogo.src}></img>
      </div>
      <h2 className={styles.heading}>Log in</h2>
        <form onSubmit={loginAction}>
          <div className={styles.inputGroup}>
            <label>User name</label>
            <input type="text" placeholder="Enter your username" onChange={e => setUserName(e.target.value)} required/>
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} required/>
          </div>
          <div className={styles.options}>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="/">Forgot Password?</a>
          </div>
          <button className={styles.loginButton} type="submit">
            Log in
          </button>
        </form>
      </div>

      {/* Right Section - Only for Laptops & Desktops */}
      <div className={styles.right}>
        <div className={styles.imageSection}>
          <img src={loginImage.src}></img>
        </div>
      </div>
    </div>
  );
};

export default Login;

