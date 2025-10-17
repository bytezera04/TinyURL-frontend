
import { API_BASE_URL } from "@/app/config";
import { URLDto } from "@/types/url";

export async function shortenURL(original: string) : Promise<URLDto> {
    try {
        const response = await fetch(`${API_BASE_URL}/urls/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "original": original
            }),
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error("Error shortening URL:", err);
        throw err;
    }
}
