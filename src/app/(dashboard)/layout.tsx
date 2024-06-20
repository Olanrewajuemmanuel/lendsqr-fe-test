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
        <>
            <Header />
            <div style={{ display: "flex" }}>
                <SideBar />
                <main>
                    {children}
                </main>
            </div>

        </>
    );
}
