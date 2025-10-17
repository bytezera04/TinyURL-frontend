
export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
            <h1 className="text-4xl font-bold mb-4">TinyURL Clone</h1>
            <p className="text-gray-600 mb-8">
            Paste a long URL below to get a short one instantly.
            </p>

            <form className="w-full max-w-md flex flex-col gap-3">
            <input
                type="url"
                placeholder="Enter your long URL"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <button
                type="submit"
                className="bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700"
            >
                Shorten URL
            </button>
            </form>
        </div>
    );
}