import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Trivantage Capital",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex-1 flex items-center justify-center px-5 sm:px-6 lg:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-xl w-full text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60 mb-4">
          Error 404
        </p>

        <h1 className="serif-heading text-primary text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6 !font-serif">
          Page Not Found
        </h1>

        <div className="h-[1px] w-24 bg-primary/20 mx-auto mb-6"></div>

        <p className="text-base sm:text-lg text-primary/70 leading-relaxed mb-10">
          The page you are looking for could not be found. It may have been moved, renamed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="inline-block bg-primary text-white px-8 py-3 rounded font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
