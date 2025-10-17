"use client";

import { URLDto } from "@/types/url";
import { useState } from "react";

export default function URLCard({ url } : { url: URLDto }) {
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
            className={`card relative w-full max-w-full p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden ${
                hovered ? "hover:shadow-xl" : ""
            }`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                "--mouse-x": coords.x,
                "--mouse-y": coords.y,
            } as React.CSSProperties}
        >
            {/* Hover radial effect */}
            {hovered && (
                <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle at ${coords.x} ${coords.y}, rgba(255,255,255,0.1), transparent 70%)`,
                    }}
                ></div>
            )}

            {/* Header */}
            <div className="flex justify-between items-center mb-3 relative z-10">
                <div className="flex items-center gap-2">
                    <i className="bi bi-link-45deg text-accent text-xl"></i>
                    <h3 className="text-lg font-semibold text-foreground-light dark:text-foreground-dark truncate max-w-[200px]">
                        Original URL
                    </h3>
                </div>
                <span className="text-sm font-medium text-green-500 flex items-center gap-1">
                    <i className="bi bi-bar-chart-line-fill"></i> {url.clicks}
                </span>
            </div>

            {/* Original URL */}
            <a
                href={url.original}
                title={url.original}
                target="_blank"
                rel="noreferrer"
                className="link text-accent block truncate mb-3 relative z-10"
            >
                {url.original}
            </a>

            {/* Short URL */}
            <div className="flex items-center gap-2 relative z-10">
                <i className="bi bi-box-arrow-up-right text-muted-light dark:text-muted-dark"></i>
                <a
                    href={`${window.location.origin}/r/${url.short}`}
                    title={`${window.location.origin}/r/${url.short}`}
                    target="_blank"
                    rel="noreferrer"
                    className="link truncate text-accent font-medium"
                >
                    {`${window.location.origin}/r/${url.short}`}
                </a>
            </div>
        </div>
    );
}
