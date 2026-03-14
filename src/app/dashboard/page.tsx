"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DashboardPage = () => {
    const [name, setName] = useState("");
    const [windowWidth, setWindowWidth] = useState<number | null>(null);
    console.log("dashboard- client component");

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        //setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">User's panel</h1>
            <div className="mt-6 space-y-4">
                <div className="p-4 rounded">
                    <label className="block mb-2" htmlFor="name">
                        Enter your name:
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="p-2 border rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p className="mt-2">Hello, {name || "friend"}!</p>
                </div>
                <div>
                    <p>Window width: {windowWidth}px</p>
                </div>
                <Link href="/">Home page</Link>
            </div>
        </div>
    );
};

export default DashboardPage;
