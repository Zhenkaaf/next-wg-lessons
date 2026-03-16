export default function ProductLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-blue-900">
            <h2>ONE PRODUCT</h2>
            <div>{children}</div>
        </div>
    );
}
