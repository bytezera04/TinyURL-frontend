import { SITE_DOMAIN } from "../config";
import AboutPageClient from "./pageClient";

export const metadata = {
    title: "About - TinyURL Portfolio Project",
    description: "Learn about TinyURL, a full-stack portfolio project demonstrating Next.js, FastAPI, and modern UI/UX techniques.",
    robots: {
        index: false,
        follow: false 
    },
    alternates: {
        canonical: `https://${SITE_DOMAIN}/about`
    }
};

export default function AboutPage() {
    return (
        <AboutPageClient />
    );
}

