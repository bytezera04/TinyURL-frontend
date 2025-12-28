import RedirectClient from "./client";

export default async function RedirectPage({ params }: any) {
    const resolvedParams = await params;

    return <RedirectClient shortId={resolvedParams.short_id} />;
}
