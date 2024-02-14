import Movies from "@/components/Movies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 sm:p-24">
      <Movies />
    </main>
  );
}
