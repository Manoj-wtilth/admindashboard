import React from "react";
import styles from "./login.module.css";

const Login: React.FC= () => {
  return (
    <div className={styles.container}>
      {/* Left Section - Login Form */}
      <div className={styles.left}>
      <div className={styles.logo}><img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"></img></div>
      <h2 className={styles.heading}>Log in</h2>
        <form>
          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
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
      <div className={styles.right}></div>
    </div>
  );
};

export default Login;

