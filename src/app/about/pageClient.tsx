"use client";

import { useState } from "react";

export default function AboutSection() {
    return (
        <section id="about" className="max-w-3xl mx-auto px-6 py-16 text-foreground-light dark:text-foreground-dark">
            <h1 className="text-3xl font-heading font-bold mb-6">About This Project</h1>

            <p className="text-lg leading-relaxed mb-6 text-muted-light dark:text-muted-dark">
                This project is a modern URL shortener built with <span className="font-semibold text-accent">Next.js</span> and <span className="font-semibold text-accent">FastAPI</span>.  
                It’s designed as a full-stack portfolio piece to demonstrate practical web development skills - from API design and database integration to responsive, animated UI components.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                <li className="flex items-center gap-2">
                    <i className="bi bi-link-45deg me-2 text-accent text-xl"></i>
                    Shorten long URLs with unique, shareable links
                </li>
                <li className="flex items-center gap-2">
                    <i className="bi bi-bar-chart-line-fill me-2 text-accent text-xl"></i>
                    Track total click counts for each shortened link
                </li>
                <li className="flex items-center gap-2">
                    <i className="bi bi-moon-fill me-2 text-accent text-xl"></i>
                    Fully responsive design with light & dark mode support
                </li>
                <li className="flex items-center gap-2">
                    <i className="bi bi-brush me-2 text-accent text-xl"></i>
                    Smooth animations and gradient hover effects using Tailwind + Framer Motion
                </li>
                <li className="flex items-center gap-2">
                    <i className="bi bi-code-slash me-2 text-accent text-xl"></i>
                    Built with TypeScript, Next.js (frontend) & FastAPI (backend)
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-muted-light dark:text-muted-dark">
                <span className="flex items-center gap-2">
                    <i className="bi bi-globe me-1 text-accent text-2xl"></i>Next.js
                </span>
                <span className="flex items-center gap-2">
                    <i className="bi bi-lightning me-1 text-accent text-2xl"></i>FastAPI
                </span>
                <span className="flex items-center gap-2">
                    <i className="bi bi-database me-1 text-accent text-2xl"></i>PostgreSQL
                </span>
                <span className="flex items-center gap-2">
                    <i className="bi bi-palette me-1 text-accent text-2xl"></i>Tailwind CSS
                </span>
                <span className="flex items-center gap-2">
                    <i className="bi bi-file-code me-1 text-accent text-2xl"></i>TypeScript
                </span>
                <span className="flex items-center gap-2">
                    <i className="bi bi-tux me-1 text-accent text-2xl"></i>Linux Deployment
                </span>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Purpose</h2>
            <p className="text-lg leading-relaxed text-muted-light dark:text-muted-dark">
                This app was built to showcase my full-stack development skills and ability to create real-world, production-ready web applications.  
                It’s lightweight, visually polished, and demonstrates both backend logic and modern frontend design - ideal for portfolio demonstration and learning purposes.
            </p>

            <div className="mt-6">
                <GitHubCard />
            </div>
        </section>
    );
}

function GitHubCard() {
    const [coords, setCoords] = useState({ x: "50%", y: "50%" });
    const [hovered, setHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100 + "%";
        const y = ((e.clientY - rect.top) / rect.height) * 100 + "%";
        setCoords({ x, y });
    };

    return (
        <div
            className={`relative w-full p-6 rounded-2xl bg-gradient-light dark:bg-gradient-dark border border-border-light dark:border-border-dark shadow-md cursor-pointer overflow-hidden transition-shadow duration-300 ${
                hovered ? "shadow-xl" : ""
            }`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Radial hover effect */}
            {hovered && (
                <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle at ${coords.x} ${coords.y}, rgba(255,255,255,0.15), transparent 70%)`,
                    }}
                />
            )}

            <div className="relative z-10 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark">
                    Interested in the code?
                </h3>
                <p className="text-muted-light dark:text-muted-dark">
                    The entire project is open-source and available on GitHub.  
                    Check out the repository, explore the codebase, or even try contributing!
                </p>
                <a
                    href="https://github.com/bytezera04?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-accent font-medium hover:underline"
                >
                    <i className="bi bi-github text-2xl"></i>
                    View on GitHub
                </a>
            </div>
        </div>
    );
}
