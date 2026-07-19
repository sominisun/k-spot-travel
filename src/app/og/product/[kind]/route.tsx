import { ImageResponse } from "next/og";

export const runtime = "nodejs";

// 1600x900 product artwork for the Creem store (and future marketing).
// Design constitution: white ground, indigo #1E3A6E, band #F7F8FA, no emoji.

const INDIGO = "#1E3A6E";
const INK = "#16181d";
const SOFT = "#4b5563";
const FAINT = "#9ca3af";
const BAND = "#F7F8FA";
const LINE = "#e5e7eb";
const CELADON = "#4A7A6D";

function Row({ time, label, sub }: { time: string; label: string; sub: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "13px 0", borderBottom: `1px solid ${LINE}`, width: "100%" }}>
      <div style={{ display: "flex", fontSize: 18, fontWeight: 700, color: INDIGO, width: 66, flexShrink: 0 }}>{time}</div>
      <div style={{ display: "flex", flexDirection: "column", width: 460 }}>
        <div style={{ display: "flex", fontSize: 21, fontWeight: 700, color: INK }}>{label}</div>
        <div style={{ display: "flex", fontSize: 16, color: SOFT, marginTop: 3 }}>{sub}</div>
      </div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 25, color: SOFT }}>
      <div style={{ display: "flex", width: 10, height: 10, background: INDIGO, borderRadius: 2 }} />
      {text}
    </div>
  );
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ kind: string }> },
) {
  const { kind } = await params;
  const isPass = kind !== "insider";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#ffffff", fontFamily: "sans-serif" }}>
        {/* Left: pitch */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 880, padding: "70px 60px 60px 80px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: INK, letterSpacing: 2 }}>
              K<span style={{ color: INDIGO, margin: "0 2px" }}>·</span>SPOT
              <span style={{ color: FAINT, fontWeight: 400, marginLeft: 12 }}>TRAVEL</span>
            </div>
            <div style={{ display: "flex", fontSize: 17, fontWeight: 700, color: INDIGO, border: `2px solid ${INDIGO}`, borderRadius: 8, padding: "7px 16px", letterSpacing: 3 }}>
              {isPass ? "DIGITAL ITINERARY" : "MEMBERSHIP"}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 84, fontWeight: 700, color: INK, lineHeight: 1.05 }}>
              {isPass ? "The Route Pass" : "K-SPOT Insider"}
            </div>
            <div style={{ display: "flex", fontSize: 30, color: SOFT, marginTop: 20, lineHeight: 1.35, maxWidth: 700 }}>
              {isPass
                ? "Your watchlist, upgraded to a minute-level itinerary."
                : "For fans who keep coming back to Korea."}
            </div>
            <div style={{ display: "flex", marginTop: 36 }}>
              {isPass ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <Feature text="Day-by-day running sheets with transit directions" />
                  <Feature text="Booking calendar - hot tables open 30 days out" />
                  <Feature text="Budget sheet and season checklist" />
                  <Feature text="Beautiful PDF + calendar file with alarms" />
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <Feature text="Unlimited detailed itineraries, every trip" />
                  <Feature text="Weekly Drop early access - 7 days ahead" />
                  <Feature text="Insider newsletter and community role" />
                  <Feature text="Cancel anytime" />
                </div>
              )}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#ffffff", background: INDIGO, borderRadius: 8, padding: "14px 30px" }}>
              {isPass ? "$4.90 one-time" : "$3.90 / month"}
            </div>
            <div style={{ display: "flex", fontSize: 22, color: FAINT }}>kspottravel.com</div>
          </div>
        </div>

        {/* Right: product mock on band */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 720, background: BAND, borderLeft: `1px solid ${LINE}`, padding: "0 50px" }}>
          <div style={{ display: "flex", flexDirection: "column", width: 620, background: "#ffffff", border: `1px solid ${LINE}`, borderRadius: 8, padding: "30px 34px", boxShadow: "0 12px 40px rgba(22,24,29,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
              <div style={{ display: "flex", fontSize: 19, fontWeight: 700, color: INDIGO, letterSpacing: 3 }}>
                {isPass ? "DAY 2 - SEOUL" : "THE WEEKLY DROP"}
              </div>
              {isPass ? (
                <div style={{ display: "flex", fontSize: 17, color: FAINT }}>Mon, Oct 12</div>
              ) : (
                <div style={{ display: "flex", fontSize: 15, fontWeight: 700, color: "#ffffff", background: CELADON, borderRadius: 6, padding: "5px 12px", letterSpacing: 2 }}>INSIDER EARLY</div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "100%", marginTop: 8 }}>
              {isPass ? (
                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                  <Row time="09:30" label="Deoksugung stonewall path" sub="Line 1 City Hall, Exit 2 - the Goblin walk" />
                  <Row time="12:00" label="Eulji Myeonok" sub="Walk-in before noon beats the queue" />
                  <Row time="14:10" label="Sewoon Sangga rooftop" sub="Geumga Plaza skyline - golden hour" />
                  <Row time="19:00" label="Gwangjang night rows" sub="Bindaetteok alley - carry cash" />
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                  <Row time="D+0" label="Scene guides land on 23 spots" sub="You read it today - public next week" />
                  <Row time="D+0" label="Six new worlds join the map" sub="Moving, Pachinko, Vincenzo and more" />
                  <Row time="D+0" label="Unlimited Route Pass included" sub="Every itinerary, full detail, no limits" />
                </div>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20, fontSize: 17, color: isPass ? CELADON : INDIGO, fontWeight: 700 }}>
              <div style={{ display: "flex", width: 8, height: 8, background: isPass ? CELADON : INDIGO, borderRadius: 4 }} />
              {isPass ? "Booking alarm: Mosu opens Sep 12" : "Your K-content is your Korea travel map"}
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1600, height: 900 },
  );
}
