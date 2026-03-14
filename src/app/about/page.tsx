"use client";
import Button from "@/src/components/Button";
import Link from "next/link";

const AboutPage = () => {
    console.log("we are creating server components");
    const lastUpdate = new Date().toLocaleString();
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">About our company</h1>
            <p className="mt-4">
                This page is totally rendered on server. For this component JS
                does not send to browser
            </p>
            <div>
                <p>last upd: {lastUpdate}</p>
                <Button />
            </div>
            <Link href="/">Home page</Link>
        </div>
    );
};

export default AboutPage;
