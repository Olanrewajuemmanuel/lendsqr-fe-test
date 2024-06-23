import AppLayout from "@/components/AppLayout";
import AuthProvider from "@/components/AuthProvider";
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
            <AppLayout>
                {children}
            </AppLayout>

        </AuthProvider>
    );
}
