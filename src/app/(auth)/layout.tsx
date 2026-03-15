export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body style={{ backgroundColor: "green" }}>
                <div>
                    <div>{children}</div>
                    <footer>Footer for auth pages</footer>
                </div>
            </body>
        </html>
    );
}
