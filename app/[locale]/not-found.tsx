import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-cream px-4 text-center">
      <p className="font-display text-5xl text-navy">404</p>
      <p className="mt-4 text-sm text-navy/55">Page not found · Pagina non trovata</p>
      <Link
        href="/"
        className="mt-8 text-[10px] uppercase tracking-[0.22em] text-brass hover:text-brass-deep"
      >
        Home
      </Link>
    </div>
  );
}
