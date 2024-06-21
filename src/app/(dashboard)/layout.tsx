import AuthProvider from "@/components/AuthProvider";
import styles from "@/components/Dashboard/styles.module.scss"
import Header from "@/components/UI/Header";
import SideBar from "@/components/UI/SideBar";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Lendsqr Dashboard",
    description: "Lendqr Dashboard",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthProvider>
            <Header />
            <div className={styles.flex}>
                <SideBar />
                <main className={styles.main}>
                    {children}
                </main>
            </div>

        </AuthProvider>
    );
}
