import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import LoginImg from "@/assets/images/sign-in.svg";
import styles from "./sass/login.module.scss";
import Button from "./_components/Button";
function Login() {
  return (
    <div className={styles.page}>
      <div className={styles.imagesContainer}>
        <Link href={"/login"}>
          <Image src={Logo} alt='Lendsqr Logo' className={styles.logo} />
        </Link>

        <div className={styles.loginImgContainer}>
          <Image className={styles.loginImg} src={LoginImg} alt='Login Image' />
        </div>
      </div>

      <div className={styles.formOverallContainer}>
        <div className={styles.formContainer}>
          <h1 className={styles.pageTitle}>Welcome!</h1>
          <p className={styles.formInstruction}>Enter details to login</p>

          <form action='' className={styles.form}>
            <div className={styles.formControl}>
              <input id='email' name='email' placeholder='Email' type='text' />
            </div>

            <div className={styles.formControl}>
              <input
                id='password'
                name='password'
                placeholder='Password'
                type='password'
              />
            </div>
            <Link href='' className={styles.passwordResetLink}>
              Forgot Password?
            </Link>

            <Button className={styles.submitButton} type='button'>
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

