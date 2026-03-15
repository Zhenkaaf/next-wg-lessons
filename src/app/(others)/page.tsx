import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center flex-col bg-zinc-50 font-sans dark:bg-black">
            <h2>Hello everybody</h2>

            <Link href="/about">About page</Link>
            <br />
            <Link href="/dashboard">Dashboard page</Link>
            <hr className="border-amber-700 border-t-2 w-full" />
            <nav>
                <ul>
                    <li>
                        <Link href="/docs">/docs</Link>
                    </li>
                    <li>
                        <Link href="/docs/react">/docs/react</Link>
                    </li>
                    <li>
                        <Link href="/docs/react/hooks">/docs/react/hooks</Link>
                    </li>
                    <li>
                        <Link href="/docs/react/hooks/useState">
                            /docs/react/hooks/useState
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
