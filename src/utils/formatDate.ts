
export const formatDate = (dateString?: string | null) => {
    if (!dateString) return "Never";
    return new Date(dateString).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};
