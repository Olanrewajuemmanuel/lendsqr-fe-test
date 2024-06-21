import Login from "@/components/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin login",
    description: "Lendqr Login Page",
};

export default function Page() {
    return <Login />
}
