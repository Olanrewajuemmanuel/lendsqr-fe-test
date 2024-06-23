"use client";

import React, { ReactNode, useState } from 'react'
import Header from '../UI/Header'
import SideBar from '../UI/SideBar'
import styles from "./styles.module.scss"


export default function AppLayout({ children }: { children: ReactNode }) {
    const [isSideBarActive, setIsSideBarActive] = useState(false)

    function handleToggle() {
        setIsSideBarActive(!isSideBarActive)
    }

    return (
        <>
            <Header toggleSideBar={handleToggle} />
            <div className={styles.flex}>
                <SideBar isActive={isSideBarActive} />
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}
