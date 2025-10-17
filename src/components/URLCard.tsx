

import { URLDto } from "@/types/url";
import { formatDate } from "@/utils/formatDate";
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
            className={`relative w-full max-w-full p-6 rounded-xl bg-gradient-light dark:bg-gradient-dark border border-border-light dark:border-border-dark shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden ${
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
            {/* Hover effect overlay */}
            {hovered && (
                <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
                    style={{
                        background: `radial-gradient(circle at ${coords.x} ${coords.y}, rgba(255,255,255,0.12), transparent 70%)`,
                    }}
                ></div>
            )}

            {/* Header */}
            <div className="flex justify-between items-center mb-3 relative z-10">
                <div className="flex items-center gap-2">
                    <i className="bi bi-box-arrow-up-right text-accent text-xl"></i>
                    <a
                        href={`${window.location.origin}/r/${url.short}`}
                        title={`${window.location.origin}/r/${url.short}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg font-semibold text-accent truncate hover:underline"
                    >
                        {`${window.location.origin}/r/${url.short}`}
                    </a>
                </div>
                <span className="text-sm font-medium text-green-500 flex items-center gap-1">
                    <i className="bi bi-bar-chart-line-fill"></i> {url.clicks}
                </span>
            </div>

            {/* Original URL */}
            <div className="mb-4 relative z-10">
                <p className="text-sm font-medium text-muted-light dark:text-muted-dark mb-1">Destination</p>
                <a
                    href={url.original}
                    title={url.original}
                    target="_blank"
                    rel="noreferrer"
                    className="link truncate block"
                >
                    {url.original}
                </a>
            </div>

            {/* Dates */}
            <div className="text-sm text-muted-light dark:text-muted-dark space-y-1 relative z-10">
                <p className="flex items-center gap-1">
                    <i className="bi bi-calendar3 text-accent"></i>
                    Created{" "}
                    <span className="font-medium text-foreground-light dark:text-foreground-dark">
                        {formatDate(url.created_at)}
                    </span>
                </p>
                <p className="flex items-center gap-1">
                    <i className="bi bi-clock-history text-accent"></i>
                    Last clicked{" "}
                    <span className="font-medium text-foreground-light dark:text-foreground-dark">
                        {formatDate(url.last_clicked_at)}
                    </span>
                </p>
            </div>
        </div>
    );
}
