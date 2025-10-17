import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>TinyURL</title>

                {/* Google Fonts */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
                />

                {/* Immediately load theme (prevents page flash) */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                const theme = localStorage.getItem('theme');
                                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                if (theme === 'dark' || (!theme && prefersDark)) {
                                    document.documentElement.classList.add('dark');
                                } else {
                                    document.documentElement.classList.remove('dark');
                                }
                                } catch(e) {}
                            })();
                        `,
                    }}
                    />
            </head>
            <body className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
