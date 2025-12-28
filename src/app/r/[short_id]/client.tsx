"use client";

import { API_BASE_URL } from "@/app/config";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function RedirectClient({ shortId }: { shortId: string }) {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const fetchOriginal = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/urls/${shortId}`);

                // Check for erros

                if (res.status === 404) {
                    router.push("/404");
                    return;
                }

                if (res.status === 429) {
                    setError("Too many requests. Please try again shortly.");
                    return;
                }

                if (!res.ok) {
                    setError(
                        "An unexpected error occurred. Please try again later."
                    );
                    return;
                }

                // Redirect browser to original URL

                const data = await res.json();

                window.location.href = data.original;
            } catch (err: any) {
                console.error(`Error: ${err.message}`);
            }
        };

        fetchOriginal();
    }, [shortId, router]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-surface-light dark:bg-surface-dark transition-colors duration-300">
            <div className="bg-surface-card-light dark:bg-surface-card-dark p-8 rounded-2xl flex flex-col items-center gap-4">
                {error ? (
                    <>
                        <h1 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark">
                            Oops!
                        </h1>
                        <p className="text-muted-light dark:text-muted-dark text-center">
                            {error}
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-4 px-4 py-2 bg-accent text-white rounded-md hover:brightness-90 dark:hover:brightness-110 transition"
                        >
                            Retry
                        </button>
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark">
                            Redirecting...
                        </h1>
                        <p className="text-muted-light dark:text-muted-dark text-center">
                            We are taking you to your destination.
                        </p>

                        {/* Animated dots */}
                        <div className="flex items-center gap-2 mt-2">
                            <span className="w-2 h-2 bg-accent rounded-full animate-bounce delay-75"></span>
                            <span className="w-2 h-2 bg-accent rounded-full animate-bounce delay-150"></span>
                            <span className="w-2 h-2 bg-accent rounded-full animate-bounce delay-300"></span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
