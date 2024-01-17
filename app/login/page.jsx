import styles from '/app/ui/login/login.module.css';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className={styles.container}>
       
      <div className={styles.formContainer}>
        <h1 className={styles.titlee}>BraneValley Ltd.</h1>
        <form action="" className={styles.form}>
        <h2 className={styles.title}>Login to Your Account</h2>

          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
