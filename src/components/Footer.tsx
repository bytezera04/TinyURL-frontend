
export default function Footer() {
    return (
        <footer className="bg-card-light dark:bg-card-dark text-foreground-light dark:text-foreground-dark py-12 mt-20 border-t border-border-light dark:border-border-dark">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                {/* Branding */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-heading font-bold">TinyURL</h2>
                    <p className="text-muted-light dark:text-muted-dark text-sm max-w-xs">
                        Create short, memorable links in seconds. Fully responsive and works in dark or light mode.
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
                        <i className="bi bi-twitter text-xl"></i>
                    </a>
                    <a href="#" aria-label="GitHub" className="hover:text-accent transition-colors">
                        <i className="bi bi-github text-xl"></i>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                        <i className="bi bi-linkedin text-xl"></i>
                    </a>
                </div>
            </div>
            
            {/* Copyright */}
            <div className="mt-6 text-center text-sm text-muted-light dark:text-muted-dark">
                &copy; {new Date().getFullYear()} TinyURL. All rights reserved.
            </div>
        </footer>
    );
}
