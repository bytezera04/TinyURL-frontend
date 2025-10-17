"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isDark, setIsDark] = useState(false);

    // Set theme on first load
    useEffect(() => {
        try {
            const storedTheme = localStorage.getItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

            if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
                document.documentElement.classList.add("dark");
                setIsDark(true);
            } else {
                document.documentElement.classList.remove("dark");
                setIsDark(false);
            }
        } catch (e) {
            console.error(e);
        }
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        const html = document.documentElement;
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    return (
        <header className="border-b border-border-light dark:border-border-dark bg-gradient-light dark:bg-gradient-dark text-foreground-light dark:text-foreground-dark shadow-md z-50">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <Link href="/" className="flex gap-2 text-2xl font-bold hover:brightness-90">
                    <div className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            className="w-8 h-8"
                        />
                        <h2 className="text-2xl font-heading font-bold">TinyURL</h2>
                    </div>
                </Link>

                <div className="flex items-center gap-6">
                    <Link href="/" className="hover:text-accent transition">Home</Link>
                    <Link href="/about" className="hover:text-accent transition">About</Link>

                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? (
                            <i className="bi bi-sun-fill text-yellow-400 text-lg"></i>
                        ) : (
                            <i className="bi bi-moon-fill text-gray-700 dark:text-gray-200 text-lg"></i>
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
}
