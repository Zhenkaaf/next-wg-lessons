"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Forgot password", href: "/forgot-password" },
];
export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    return (
        <div>
            <div className="flex gap-6 mb-4 bg-blue-600">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`${
                            pathname === link.href ||
                            pathname.startsWith(link.href + "/")
                                ? "text-green-900 underline"
                                : ""
                        } hover:underline`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            <div>{children}</div>
            <div></div>
            <footer>Footer for auth pages</footer>
        </div>
    );
}
