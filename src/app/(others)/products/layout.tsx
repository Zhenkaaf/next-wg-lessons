export default function ProductsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div lang="en" className="bg-gray-800">
            <h2>ALL PRODUCTS</h2>
            <div>{children}</div>
        </div>
    );
}
