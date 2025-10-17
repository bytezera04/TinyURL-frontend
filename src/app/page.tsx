import { SITE_DOMAIN } from "./config";
import HomePageClient from "./pageClient";

export const metadata = {
    title: "TinyURL - Modern URL Shortener",
    description: "TinyURL is a modern, full-stack URL shortener built with Next.js and FastAPI. Create, track, and manage your links with ease.",
    robots: {
        index: false,
        follow: false
    },
    alternates: {
        canonical: `https://${SITE_DOMAIN}/`
    }
};

export default function HomePage() {
    return (
        <HomePageClient />
    );
}
