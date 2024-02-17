"use client";

import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between px-16 py-8 sm:px-20">
          <div className="flex flex-col items-center mt-4">
            <h2 className="text-2xl font-medium mb-4">Something went wrong!</h2>
            <PrimaryButton leftIcon="ArrowPathIcon" onClick={() => reset()}>
              Try again
            </PrimaryButton>
          </div>
        </main>
      </body>
    </html>
  );
}
