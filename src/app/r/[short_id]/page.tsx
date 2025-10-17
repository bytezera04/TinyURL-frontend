"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
    params: { short_id: string };
}

export default function RedirectPage({ params } : Props) {
    const router = useRouter();

    useEffect(() => {
        const fetchOriginal = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/urls/${params.short_id}`);

                if (res.status === 404) {
                    router.push("/404");
                    return;
                }

                if (!res.ok) {
                    throw new Error("URL not found");
                }

                const data = await res.json();

                // Redirect browser to original URL

                window.location.href = data.original;
            }
            catch (err: any) {
                console.error(`Error: ${err.message}`);
            }
        };

        fetchOriginal();
    }, [params.short_id, router]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-surface-light dark:bg-surface-dark transition-colors duration-300">
            <div className="bg-surface-card-light dark:bg-surface-card-dark p-8 rounded-2xl flex flex-col items-center gap-4">
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
            </div>
        </div>
    );
}
