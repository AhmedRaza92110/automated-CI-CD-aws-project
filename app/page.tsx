import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">
        Ahmed Raza
      </h1>22

      <p className="mt-4 text-xl">
        Software Engineer | Senior DevOps Engineer
      </p>

      <div className="flex gap-4 mt-8">
        <Link
          href="/about"
          className="px-6 py-3 border rounded"
        >
          About
        </Link>

        <Link
          href="/projects"
          className="px-6 py-3 border rounded"
        >
          Projects
        </Link>

        <Link
          href="/contact"
          className="px-6 py-3 border rounded"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}