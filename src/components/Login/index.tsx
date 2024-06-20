import styles from "./styles.module.scss"
import Image from "next/image";
import Logo from "@/assets/logo.png"
import Pablo from "@/assets/pablo.png"

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.firstDiv}>
                <header className={styles.header}>
                    <a href="/"><Image src={Logo} alt="" width={173.76} /></a>
                </header>
                <Image src={Pablo} alt="" width={600} />
            </div>
            <main className={styles.main}>
                <form className={styles.form}>
                    <h2 className={styles['text-heading']}>Welcome!</h2>
                    <p className={styles["welcome-p"]}>Enter details to login.</p>
                    <div>
                        <input type="text" name="Email" placeholder="Email" id="" />
                    </div>
                    <div className={styles.relative}>
                        <input type="password" name="Password" placeholder="Password" id="" />
                        <span className={styles.showPasswordText} role="button" aria-label="">SHOW</span>
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
