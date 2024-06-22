"use client";

import { redirect } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function AuthProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        const user = localStorage.getItem("lendsqrUser")
        if (!user) redirect('/login')
    }, [])
    return (
        <div>
            {children}
        </div>
    )
}
