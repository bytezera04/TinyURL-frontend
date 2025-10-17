"use client";

import Card from "@/components/Card";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HomePage() {
    const [url, setUrl] = useState("");

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

    return (
        <div className="flex justify-center">
            <div className="flex flex-col max-w-6xl min-h-screen mt-12 px-4 py-16 items-center text-foreground-light dark:text-foreground-dark">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-4">
                        TinyURL — Simplify Your Links
                    </h1>
                    <p className="text-lg text-muted-light dark:text-muted-dark mb-8">
                        Shorten, share, and manage your URLs effortlessly. Fast, reliable, and completely free.
                    </p>

                    {/* URL input */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Enter your long URL here"
                            className="flex-grow"
                        />
                        <button className="btn-accent">
                            Shorten
                        </button>
                    </motion.div>
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
