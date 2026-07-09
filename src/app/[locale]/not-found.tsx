import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="text-[11px] font-bold tracking-[0.18em] text-indigo uppercase">404</p>
      <h1 className="mt-2 font-display text-3xl font-bold">
        This scene wasn&apos;t filmed here
      </h1>
      <p className="mt-3 text-ink-soft">
        The page you&apos;re looking for moved or never existed. The map, however,
        always knows the way.
      </p>
      <Link
        href="/en"
        className="mt-6 rounded-[8px] bg-indigo px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-deep"
      >
        Back to the homepage
      </Link>
    </div>
  );
}
