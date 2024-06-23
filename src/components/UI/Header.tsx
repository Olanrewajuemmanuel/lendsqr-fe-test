"use client";

import styles from "./styles.module.scss"
import Logo from "@/assets/logo.png"
import Search from "@/assets/icons/search.svg";
import ProfilePic from "@/assets/profile.png";
import Bell from "@/assets/icons/bell.png";
import Image from "next/image"
import { roboto400 } from "@/app/fonts";
import { useEffect, useState } from "react";


export default function Header({ toggleSideBar }: { toggleSideBar: any }) {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        setUserName(localStorage.getItem("lendsqrUser")!)
    }, [])
    return (
        <header className={styles.header}>
            <div className={styles.menu} aria-description="Menu" aria-hidden>
                <button onClick={toggleSideBar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <a href="/"><Image src={Logo} alt="" width={144.8} ></Image></a>
            <form action="">
                <div>
                    <input type="text" name="Search" id="" placeholder="Search for anything" />
                    <button name="Search">
                        <Image src={Search} alt="" width={14}></Image>
                    </button>
                </div>
            </form>
            <nav role="menuitem">
                <ul>
                    <li className={roboto400.className}>Docs</li>
                    <li>
                        <button>
                            <Image src={Bell} alt="" width={26}></Image>
                        </button>
                    </li>
                    <li>
                        <Image src={ProfilePic} alt="Your profile picture" width={48} height={48}></Image>
                        <p className={styles.profileText}>{userName}</p>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.39229 12.0516C9.72823 12.425 10.2751 12.4219 10.6079 12.0516L13.4829 8.857C13.8188 8.48434 13.6852 8.182 13.1845 8.182H6.81567C6.31489 8.182 6.18363 8.48746 6.51723 8.857L9.39229 12.0516Z" fill="#213F7D" />
                        </svg>

                    </li>
                </ul>
            </nav>

        </header>
    )
}
