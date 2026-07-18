import { allShows } from "@/lib/data";
import { ogCard } from "@/lib/og-card";

export const runtime = "nodejs";

// Share card for a quiz result: "My next trip is <show>'s Korea".
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const show = allShows.find((s) => s.slug === slug);
  if (!show) {
    return ogCard({
      kicker: "QUIZ",
      title: "Which K-world is your next trip?",
      sub: "6 questions, 60 seconds - matched to real filming locations.",
    });
  }
  return ogCard({
    kicker: "MY MATCH",
    title: show.title,
    sub: "My next Korea trip, matched from my K-content taste - take the 60-second quiz to find yours.",
  });
}
