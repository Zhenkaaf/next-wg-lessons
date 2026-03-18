"use client";
//работает только в продакшен режиме
export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        // global-error must include html and body tags
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <p>Global error {error.message}</p>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    );
}
