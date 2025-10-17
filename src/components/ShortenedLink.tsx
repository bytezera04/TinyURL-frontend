import { useState } from "react";
import { motion } from "framer-motion";

export function ShortenedLink({ shortened }: { shortened: string }) {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shortened);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 w-full max-w-md mx-auto"
        >
            <div className="rounded-2xl border border-border-light dark:border-border-dark bg-gradient-light dark:bg-gradient-dark shadow-md p-5 flex flex-col items-start gap-3 transition-colors duration-300">
                <p className="text-base font-medium text-foreground-light dark:text-foreground-dark">
                    Your shortened link:
                </p>

                <div className="flex items-center justify-between w-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-md px-4 py-3 transition-colors duration-300">
                    <a
                        href={shortened}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent font-semibold truncate max-w-[80%] hover:underline"
                    >
                        {shortened}
                    </a>

                    <button
                        onClick={handleCopy}
                        className="px-4 py-2 bg-accent text-white rounded-md hover:brightness-90 dark:hover:brightness-110 transition transform active:scale-95 font-medium"
                    >
                        Copy
                    </button>
                </div>

                <p className="text-sm text-muted-light dark:text-muted-dark">
                    Click the link to open it or copy it to share.
                </p>
            </div>
        </motion.div>
    );
}
