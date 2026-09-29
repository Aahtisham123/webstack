"use client";

import { Container } from "@/components/ui/Container";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="flex min-h-[70vh] items-center pt-28">
      <Container className="max-w-2xl">
        <h1 className="font-display text-4xl text-white">Something went wrong.</h1>
        <p className="mt-4 text-muted">The page could not be displayed. You can try loading it again.</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-bg"
        >
          Try again
        </button>
      </Container>
    </section>
  );
}
