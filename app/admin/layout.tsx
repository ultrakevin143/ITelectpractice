export default function RootLayout ({ children }: Readonly<{ children: React.ReactNode}>) {
    return (
        <div className="bg-blue-200 h-screen">
            <aside>Sidebar</aside>
            <main>
                {children}
            </main>
        </div>
    );
}