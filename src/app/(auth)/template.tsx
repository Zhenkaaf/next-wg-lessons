"use client";
import { useState } from "react";

export default function AuthTemplate({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [text, setText] = useState("");
    return (
        <div>
            {/* сначала рендерится layout, а потом его children оборачивается в template
            template сбрасывает состояние инпута при каждом переходе и пересоздаётся при навигации*/}
            <div>{children}</div>
            <div>
                <input
                    className="border border-gray-400 px-3 py-2 rounded bg-white text-black"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <footer>Footer for auth pages</footer>
        </div>
    );
}
