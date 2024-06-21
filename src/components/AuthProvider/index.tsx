"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function AuthProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    useEffect(() => {
        const user = localStorage.getItem("lendsqrUser")
        if (!user) router.push('/login')
    }, [router])
    return (
        <div>
            {children}
        </div>
    )
}
