"use client";

import styles from "./styles.module.scss"
import Image from "next/image";
import Logo from "@/assets/logo.png"
import Pablo from "@/assets/pablo.png"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { findAll, login } from "@/lib/actions/users";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('')

    const router = useRouter()

    useEffect(() => {
        if (localStorage.getItem("lendsqrUser")) {
            router.push("/")
        }
    }, [router])

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!email || !password) {
            setMessage("All fields are required")
            setTimeout(() => setMessage(''), 3000)
            return;
        }

        const user = await login(email, password);
        if (!user) {
            setMessage("Invalid credentials provided")
            setTimeout(() => setMessage(''), 3000)
            return;
        }

        // on successful login, fetch user records and save in local storage
        const userRecords = await findAll(500);
        setMessage("Login successful")
        setTimeout(() => setMessage(''), 3000)

        localStorage.setItem('userRecords', JSON.stringify(userRecords));
        localStorage.setItem('lendsqrUser', user.get('username'));
        // redirect
        router.push("/");
    }

    return (
        <div className={styles.container}>
            <div className={styles.firstDiv}>
                <header className={styles.header}>
                    <a href="/"><Image src={Logo} alt="" width={173.76} /></a>
                </header>
                <Image src={Pablo} alt="" width={600} />
            </div>
            <main className={styles.main}>
                {message && <p className={styles.messageLogin}>{message}</p>}
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2 className={styles['text-heading']}>Welcome!</h2>
                    <p className={styles["welcome-p"]}>Enter details to login.</p>
                    <div>
                        <input type="email" name="Email" placeholder="Email" id="" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className={styles.relative}>
                        <input type={showPassword ? 'text' : 'password'} name="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        <span className={styles.showPasswordText} role="button" aria-label="" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'HIDE' : 'SHOW'}</span>
                    </div>
                    <div>
                        <p className={styles.accentText} role="button">FORGOT PASSWORD?</p>
                    </div>
                    <div>
                        <button className={styles.loginBtn}>Log in</button>
                    </div>
                </form>
            </main>
        </div>
    )
}
