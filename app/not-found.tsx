import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-28">
      <Container className="max-w-2xl">
        <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-cyan uppercase">404</p>
        <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">This page is not on the site.</h1>
        <p className="mt-4 text-muted">The address may have changed, or the page was never published.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-bg">
          Back to home
        </Link>
      </Container>
    </section>
  );
}
