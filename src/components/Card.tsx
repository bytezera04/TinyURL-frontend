"use client";

import { useState } from "react";

export default function Card({ card }: { card: { title: string; description: string; icon: string }}) {
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
            className={`card ${hovered ? "hovered" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ "--mouse-x": coords.x, "--mouse-y": coords.y } as React.CSSProperties}
        >
            <div className="flex items-center gap-3 mb-2">
                <i className={`${card.icon} text-accent text-2xl`}></i>
                <h3 className="text-xl font-semibold">{card.title}</h3>
            </div>
            <p className="text-muted-light dark:text-muted-dark text-base leading-relaxed">
                {card.description}
            </p>
        </div>
    );
}
