import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="it">
      <body className="flex min-h-screen items-center justify-center bg-[#F7F2EA] text-[#0A1628]">
        <div className="text-center">
          <p className="text-5xl">404</p>
          <Link href="/it" className="mt-6 inline-block text-sm underline">
            Home
          </Link>
        </div>
      </body>
    </html>
  );
}
