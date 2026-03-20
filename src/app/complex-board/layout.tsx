export default function ComplexBoardLayout({
    children,
    notifications,
    menu,
    advertising,
    login,
}: Readonly<{
    children: React.ReactNode;
    notifications: React.ReactNode;
    menu: React.ReactNode;
    advertising: React.ReactNode;
    login: React.ReactNode;
}>) {
    const isloggedIn = true;
    return (
        <div className="bg-gray-800 p-4">
            <h2>Complex Board Layout</h2>
            <div>{children}</div>
            {isloggedIn ? (
                <div>
                    <div>{menu}</div>
                    <div>{notifications}</div>
                    <div>{advertising}</div>
                </div>
            ) : (
                <div>{login}</div>
            )}
        </div>
    );
}
