export default function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div className="container mx-auto p-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} TinyURL Clone. Built with ❤️ using Next.js + Radix UI.
      </div>
    </footer>
  );
}
