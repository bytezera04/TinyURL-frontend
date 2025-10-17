"use client";

import Card from "@/components/Card";
import { ShortenedLink } from "@/components/ShortenedLink";
import { motion } from "framer-motion";
import { useState } from "react";
import { API_BASE_URL } from "./config";

const cards = [
    {
        title: "Easy To Use",
        description: "Shorten your links in seconds with a clean, intuitive interface. No setup required.",
        icon: "bi bi-lightning-charge"
    },
    {
        title: "Fast & Reliable",
        description: "Links are shortened and redirected instantly, ensuring maximum uptime and performance.",
        icon: "bi bi-speedometer2"
    },
    {
        title: "Secure",
        description: "All links are protected and private. Your data is safe with modern encryption standards.",
        icon: "bi bi-shield-lock"
    },
    {
        title: "Customizable",
        description: "Create memorable short links with custom aliases for personal or business use.",
        icon: "bi bi-palette"
    }
];

export default function HomePage() {
    const [input, setInput] = useState("");
    const [shortened, setShortened] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setError(null);

        try {
            // Submit request

            const res = await fetch(`${API_BASE_URL}/urls/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "original": input
                }),
            });

            // Clear input

            setInput("");

            // Check for errors

            if (res.status === 429) {
                throw new Error("Too many requests, try again shortly.");
            }

            if (!res.ok) {
                throw new Error("Failed to create URL");
            }

            // Load the short URL
            
            const urlRes = await res.json();

            setShortened(`${window.location.origin}/r/${urlRes.short}`);
        }
        catch (err: any) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col max-w-6xl min-h-screen mt-12 px-4 py-16 items-center text-foreground-light dark:text-foreground-dark">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="min-h-[400px] text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-4">
                        TinyURL — Simplify Your Links
                    </h1>
                    <p className="text-lg text-muted-light dark:text-muted-dark mb-8">
                        Shorten, share, and manage your URLs effortlessly. Fast, reliable, and completely free.
                    </p>

                    <motion.form
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-4 w-full"
                    >
                        <input
                            type="url"
                            required
                            placeholder="Enter your long URL"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md p-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-3 bg-accent text-white font-medium rounded-md hover:brightness-90 transition disabled:opacity-50"
                        >
                            {loading ? "Shortening..." : "Shorten"}
                        </button>
                    </motion.form>

                    {/* Error */}
                    {error && <p className="text-red-500 mt-4">{error}</p>}

                    {/* Shortened Link */}
                    {shortened && (
                        <ShortenedLink shortened={shortened} />
                    )}
                </motion.section>

                {/* Cards Section */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5, type: "spring", stiffness: 100 }}
                        >
                            <Card card={card} />
                        </motion.div>
                    ))}
                </section>
            </div>
        </div>
    );
}
