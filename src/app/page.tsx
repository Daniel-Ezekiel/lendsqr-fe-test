"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import LoginImg from "@/assets/images/sign-in.svg";
import styles from "./sass/login.module.scss";
import Button from "./_components/Button";
import { useState } from "react";
import { auth } from "@/app/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import PrivateRoute from "./_components/PrivateRoute";
function Login() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isAuthorising, setIsAuthorising] = useState<boolean>(false);

  const handleAuthentication = async () => {
    setIsAuthorising(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const { user } = res;

      if (!email || !password) {
        setIsError(true);
        setError("Please enter your email and password");
        throw new Error("Please enter your email and password");
      } else if (!user) {
        setIsError(true);
        setError("There was an issue authorising...");
        throw new Error("There was an issue authorising...");
      }

      setIsError(false);
      setError("");
      router.push("/dashboard/customers/users");
    } catch (error) {
      if (
        (error as Error).message.includes("email") ||
        (error as Error).message.includes("credential")
      ) {
        setError("Invalid email or password");
      }
      setError("There was an issue authorising...");
      setIsError(true);
      return { error };
    }

    setIsAuthorising(false);
    setEmail("");
    setPassword("");
  };

  return (
    <PrivateRoute>
      <div className={styles.page}>
        <div className={styles.imagesContainer}>
          <Link href={"/login"}>
            <Image src={Logo} alt='Lendsqr Logo' className={styles.logo} />
          </Link>

          <div className={styles.loginImgContainer}>
            <Image
              className={styles.loginImg}
              src={LoginImg}
              alt='Login Image'
            />
          </div>
        </div>

        <div className={styles.formOverallContainer}>
          <div className={styles.formContainer}>
            <h1 className={styles.pageTitle}>Welcome!</h1>
            <p className={styles.formInstruction}>Enter details to login</p>

            <form action='' className={styles.form}>
              <div className={styles.formControl}>
                <input
                  id='email'
                  name='email'
                  placeholder='Email'
                  type='text'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                    setIsError(false);
                    setError("");
                  }}
                  required
                  className={`${isError && styles.inputError}`}
                />
                <span className={styles.error}>{isError && error}</span>
              </div>

              <div className={styles.formControl}>
                <input
                  id='password'
                  name='password'
                  placeholder='Password'
                  type='password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                    setIsError(false);
                    setError("");
                  }}
                  required
                  className={`${isError && styles.inputError}`}
                />
                <span className={styles.error}>{isError && error}</span>
              </div>
              <Link href='' className={styles.passwordResetLink}>
                Forgot Password?
              </Link>

              <Button
                onClick={handleAuthentication}
                className={`${styles.submitButton} ${
                  isAuthorising && styles.disabled
                }`}
                disabled={isAuthorising}
                type='button'
              >
                Log in
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}

export default Login;

