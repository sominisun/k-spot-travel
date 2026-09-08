"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { l, type Locale } from "@/i18n/config";
import { ADSENSE } from "@/lib/site";
import { isWished, toggleWish, WISH_EVENT } from "@/lib/client-store";
import {
  evidenceForLens,
  placeForLens,
  type LensChoice,
  type LensConnectionType,
  type LensExperience,
  wlgYTJejuLens,
} from "@/data/korea-lens";
import { AdSlot } from "@/components/AdSlot";
import { LeafletMap, type MapMarker } from "@/components/LeafletMap";
import { SourcedImage } from "@/components/SourcedImage";
import { Icon } from "@/components/ui";
import styles from "./KoreaLensPilot.module.css";

const lens = wlgYTJejuLens;

const choiceStory: Record<
  LensChoice["id"],
  { number: string; feeling: string; promise: string; cue: string }
> = {
  "east-jeju": {
    number: "01",
    feeling: "The sea that raised them",
    promise: "Follow the work, resilience and volcanic coast behind the story.",
    cue: "HAENYEO · WORK · WIDE-OPEN SEA",
  },
  "west-jeju": {
    number: "02",
    feeling: "The coast that lets you breathe",
    promise: "Keep the feeling, lose the checklist, and take one unhurried walk.",
    cue: "SLOW WALK · SMALL RADIUS · SUNSET",
  },
};

const connectionLabel: Record<LensConnectionType, string> = {
  exact: "Screen-confirmed place",
  "cultural-context": "Understand the story here",
  "editorial-pairing": "Chosen for your day",
};

function emitLensEvent(name: string, detail: Record<string, string>) {
  window.dispatchEvent(new CustomEvent("ks2:lens-event", { detail: { name, ...detail } }));
}

function lensSaveId(choiceId: LensChoice["id"]) {
  return `lens:${lens.slug}:${choiceId}`;
}

function LensSaveButton({ choice, quiet = false }: { choice: LensChoice; quiet?: boolean }) {
  const id = lensSaveId(choice.id);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const sync = () => setSaved(isWished(id));
    sync();
    window.addEventListener(WISH_EVENT, sync);
    return () => window.removeEventListener(WISH_EVENT, sync);
  }, [id]);

  return (
    <button
      type="button"
      aria-pressed={saved}
      onClick={() => {
        const next = toggleWish(id);
        setSaved(next);
        emitLensEvent("lens_save", { choice: choice.id, state: next ? "saved" : "removed" });
      }}
      className={`${styles.saveButton} ${quiet ? styles.saveButtonQuiet : ""} ${saved ? styles.saveButtonSaved : ""}`}
    >
      <Icon name="heart" size={17} />
      <span>{saved ? "Saved to My Lens" : `Save ${choice.label} Lens`}</span>
    </button>
  );
}

function TrustStrip() {
  const items = [
    { label: "Story", value: "Light spoilers", tone: "orange" },
    { label: "Facts", value: "Checked 06 Sep 2026", tone: "teal" },
    { label: "Field visit", value: "Not yet", tone: "cream" },
  ];

  return (
    <div className={styles.trustStrip} aria-label="Content trust status">
      {items.map((item) => (
        <div key={item.label} className={`${styles.trustItem} ${styles[`trust_${item.tone}`]}`}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}

function ChoiceCard({
  choice,
  selected,
  onSelect,
}: {
  choice: LensChoice;
  selected: boolean;
  onSelect: () => void;
}) {
  const story = choiceStory[choice.id];

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={`${styles.choiceCard} ${selected ? styles.choiceSelected : ""}`}
    >
      <span className={styles.choiceTopline}>
        <span>{story.number} · {choice.label.toUpperCase()}</span>
        <span className={styles.choiceRadio} aria-hidden>
          {selected ? <Icon name="check" size={13} /> : null}
        </span>
      </span>
      <strong className={styles.choiceFeeling}>{story.feeling}</strong>
      <span className={styles.choicePromise}>{story.promise}</span>
      <span className={styles.choiceCue}>{story.cue}</span>
    </button>
  );
}

function ExperienceCard({ experience, index }: { experience: LensExperience; index: number }) {
  const place = placeForLens(experience.placeSlug);
  const primarySource = evidenceForLens(experience.evidenceIds[0]);
  const hasImage = Boolean(experience.imageSlug);

  return (
    <article
      className={`${styles.experienceCard} ${hasImage ? "" : styles.experienceCardTextOnly}`}
      data-reveal
    >
      <div className={styles.experienceMain}>
        <div className={styles.experienceMeta}>
          <span className={`${styles.connectionBadge} ${styles[`connection_${experience.connectionType}`]}`}>
            {connectionLabel[experience.connectionType]}
          </span>
          <span>{experience.contextLabel}</span>
        </div>

        <div className={styles.placeHeading}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{place.name}</h3>
            <p>{place.koreanName} · {place.area}</p>
          </div>
        </div>

        <p className={styles.placeLead}>{experience.whyHere}</p>

        <div className={styles.decisionGrid}>
          <div>
            <span className={styles.microLabel}>FROM THE SCREEN</span>
            <p>{experience.screenContext}</p>
          </div>
          <div className={styles.decisionBox}>
            <span className={styles.microLabel}>FOR YOUR DAY</span>
            <p>{experience.travelerDecision}</p>
          </div>
        </div>

        <details
          className={styles.practical}
          onToggle={(event) => {
            if (event.currentTarget.open) {
              emitLensEvent("lens_place_expand", { experience: experience.id });
            }
          }}
        >
          <summary>
            <span>Open practical details</span>
            <Icon name="chevron" size={16} />
          </summary>
          <div className={styles.practicalBody}>
            <dl>
              <div><dt>Address</dt><dd>{place.officialAddress}</dd></div>
              {place.operationalFacts.map((fact) => (
                <div key={`${place.slug}-${fact.kind}`}>
                  <dt>{fact.label}</dt><dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <ul>
              {experience.visitDecisions.map((decision) => <li key={decision}>{decision}</li>)}
            </ul>
            <a
              href={primarySource.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => emitLensEvent("lens_official_source_click", { experience: experience.id })}
            >
              Check official source <Icon name="external" size={14} />
            </a>
          </div>
        </details>
      </div>

      {hasImage && experience.imageSlug ? (
        <div className={styles.experienceMedia}>
          <SourcedImage
            slug={experience.imageSlug}
            alt={`${place.name}, Jeju`}
            ratio="aspect-[4/3] lg:aspect-[3/4]"
            sizes="(min-width: 1024px) 270px, 100vw"
          />
        </div>
      ) : null}
    </article>
  );
}

function TripCut({ choice }: { choice: LensChoice }) {
  return (
    <section id="trip-cut" className={styles.tripCut} data-reveal>
      <div className={styles.tripCutIntro}>
        <p className={styles.eyebrowLight}>YOUR FREE TRIP CUT</p>
        <h2>A day with a point of view.</h2>
        <p>This is the useful shape of the story: enough direction to move, enough room to travel.</p>
        <div className={styles.durationBadge}>{choice.durationLabel} · {choice.label}</div>
      </div>

      <ol className={styles.timeline}>
        {lens.tripCuts[choice.id].map((stop, index) => (
          <li key={`${choice.id}-${stop.title}`}>
            <span className={styles.timelineIndex}>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p>{stop.timeLabel}{stop.optional ? " · Optional" : ""}</p>
              <h3>{stop.title}</h3>
              <span>{stop.note}</span>
            </div>
          </li>
        ))}
      </ol>
      <div className={styles.tripSave}><LensSaveButton choice={choice} quiet /></div>
    </section>
  );
}

function AdPlacement() {
  if (ADSENSE.client && ADSENSE.slotArticle) {
    return <AdSlot slot={ADSENSE.slotArticle} className={styles.liveAd} />;
  }
  return (
    <div className={styles.adPlaceholder}>
      <span>ADVERTISEMENT</span>
      <p>One quiet responsive placement, after the free travel value.</p>
    </div>
  );
}

export function KoreaLensPilot({ locale }: { locale: Locale }) {
  const landingRef = useRef<HTMLElement>(null);
  const [choiceId, setChoiceId] = useState<LensChoice["id"]>("east-jeju");
  const [mapOpen, setMapOpen] = useState(false);
  const choice = lens.choices.find((item) => item.id === choiceId) ?? lens.choices[0];
  const experiences = useMemo(
    () => lens.experiences.filter((item) => choice.experienceIds.includes(item.id)),
    [choice.experienceIds],
  );

  const markers = useMemo<MapMarker[]>(
    () => experiences.map((experience, index) => {
      const place = placeForLens(experience.placeSlug);
      return {
        lat: place.lat,
        lng: place.lng,
        label: place.name,
        sub: experience.badge,
        num: index + 1,
        approx: place.coordinateType === "approximate",
      };
    }),
    [experiences],
  );

  const selectChoice = (id: LensChoice["id"]) => {
    setChoiceId(id);
    setMapOpen(false);
    emitLensEvent("lens_route_choice", { choice: id });
  };

  useEffect(() => {
    const root = landingRef.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => { target.dataset.visible = "true"; });
      return;
    }

    targets.forEach((target) => { target.dataset.revealReady = "true"; });

    const revealVisible = () => {
      targets.forEach((target) => {
        if (target.dataset.visible === "true") return;
        const bounds = target.getBoundingClientRect();
        if (bounds.top < window.innerHeight * 0.9 && bounds.bottom > 0) {
          target.dataset.visible = "true";
        }
      });
    };

    let frame = 0;
    const queueReveal = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(revealVisible);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));
    revealVisible();
    window.addEventListener("scroll", queueReveal, { passive: true });
    window.addEventListener("resize", queueReveal);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", queueReveal);
      window.removeEventListener("resize", queueReveal);
    };
  }, []);

  return (
    <article ref={landingRef} className={`${styles.landing} korea-lens-landing`}>
      <nav className={styles.lensNav} aria-label="Korea Lens navigation">
        <Link href={l(locale, "/")} className={styles.wordmark}>
          <span className={styles.logoK}>K</span><span className={styles.logoSpot}>SPOT</span>
          <small>KOREA LENS</small>
        </Link>
        <div className={styles.navLinks}>
          <a href="#choose-lens">Choose your Jeju</a>
          <a href="#reality-check">How we checked</a>
          <Link href={l(locale, "/saved")}><Icon name="heart" size={16} /> Saved</Link>
        </div>
      </nav>

      <main>
        <section className={styles.hero}>
          <header className={styles.heroCopy}>
            <p className={styles.eyebrow}>KOREA THROUGH THE SCREEN · JEJU 01</p>
            <h1>When Life Gives You Tangerines</h1>
            <h2>Choose the Jeju you want to carry home.</h2>
            <p className={styles.heroDek}>
              The series made Jeju feel bigger than a beautiful backdrop. Turn what stayed with you into one coast you can actually experience.
            </p>
            <TrustStrip />
          </header>

          <div className={styles.heroMedia}>
            <div className={styles.collagePaper} aria-hidden="true" />
            <div className={styles.collageNewsprint} aria-hidden="true">
              <span>THE JEJU FIELD NOTE</span>
              <strong>THE SEA<br />RAISED THEM</strong>
              <p>WORK · WEATHER · FAMILY · COAST</p>
            </div>
            <div className={styles.collageSunPaper} aria-hidden="true" />
            <div className={styles.collageWash} aria-hidden="true" />
            <svg className={styles.collageSketch} viewBox="0 0 520 560" aria-hidden="true">
              <defs>
                <path id="jeju-flight-path" d="M20 520C100 490 160 440 190 390C220 360 232 320 210 295C185 266 138 278 128 315C117 354 151 388 190 379C245 366 286 330 320 282C365 218 417 151 478 108" />
                <pattern id="paper-plane-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(18)">
                  <line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" strokeWidth="1" />
                </pattern>
                <mask id="jeju-flight-reveal">
                  <path className={styles.routeMask} pathLength="1" d="M20 520C100 490 160 440 190 390C220 360 232 320 210 295C185 266 138 278 128 315C117 354 151 388 190 379C245 366 286 330 320 282C365 218 417 151 478 108" />
                </mask>
              </defs>
              <path className={styles.sketchRoute} mask="url(#jeju-flight-reveal)" d="M20 520C100 490 160 440 190 390C220 360 232 320 210 295C185 266 138 278 128 315C117 354 151 388 190 379C245 366 286 330 320 282C365 218 417 151 478 108" />
              <g className={styles.sketchPlane}>
                <g transform="translate(16 -34)">
                  <path className={styles.planeBody} d="M-39-18L42 0L9 31L-3 16L-16 34L-22 4Z" />
                  <path className={styles.planeShade} d="M-22 4L42 0L-3 16L-16 34Z" />
                  <path className={styles.planeFold} d="M-39-18L42 0L-22 4M42 0L-3 16L9 31M-3 16L-16 34" />
                </g>
                <animateMotion dur="3.2s" begin=".2s" fill="freeze" rotate="auto">
                  <mpath href="#jeju-flight-path" />
                </animateMotion>
              </g>
              <g className={styles.sketchPlaneRest} transform="translate(478 108) rotate(-36)">
                <g transform="translate(16 -34)">
                  <path className={styles.planeBody} d="M-39-18L42 0L9 31L-3 16L-16 34L-22 4Z" />
                  <path className={styles.planeShade} d="M-22 4L42 0L-3 16L-16 34Z" />
                  <path className={styles.planeFold} d="M-39-18L42 0L-22 4M42 0L-3 16L9 31M-3 16L-16 34" />
                </g>
              </g>
            </svg>
            <div className={styles.heroPhotoMain}>
              <span className={styles.photoTape} aria-hidden="true" />
              <SourcedImage
                slug={lens.heroMediaId}
                alt="Seongsan Ilchulbong at blue hour on Jeju Island"
                ratio="aspect-[16/11]"
                sizes="(min-width: 1000px) 39vw, 82vw"
                priority
              />
            </div>
            <div className={styles.heroPhotoSecondary}>
              <span className={styles.photoCorner} aria-hidden="true" />
              <SourcedImage
                slug="seopjikoji"
                alt="The coastal path at Seopjikoji on Jeju Island"
                ratio="aspect-[4/3]"
                sizes="(min-width: 1000px) 20vw, 45vw"
                unoptimized
              />
            </div>
            <div className={styles.collageNote}>
              <span>KOREA LENS / JEJU 01</span>
              <strong>From a screen feeling<br />to a real coast.</strong>
              <small>WORK · WEATHER · COAST</small>
            </div>
            <div className={styles.mediaFlagBottom}>02 · REAL JEJU</div>
            <div className={styles.passportStampRound} aria-hidden="true">
              <span>K-SPOT JOURNEY</span>
              <strong>JEJU</strong>
              <small>06 · SEP · 2026</small>
            </div>
            <div className={styles.passportStampAngle} aria-hidden="true">
              <span>SCREEN<br />TO COAST</span>
              <small>KOREA LENS 01</small>
            </div>
          </div>

          <section id="choose-lens" className={styles.chooser} aria-labelledby="choice-title">
            <div className={styles.chooserHeading}>
              <p className={styles.eyebrowLight}>START WITH A FEELING, NOT A PIN</p>
              <h2 id="choice-title">Which Jeju stayed with you?</h2>
              <p>Your answer changes the places, pace and route below.</p>
            </div>
            <div className={styles.choiceGrid}>
              {lens.choices.map((item) => (
                <ChoiceCard
                  key={item.id}
                  choice={item}
                  selected={item.id === choice.id}
                  onSelect={() => selectChoice(item.id)}
                />
              ))}
            </div>
            <div className={styles.selectedBar} aria-live="polite">
              <div>
                <span>YOUR LENS · {choice.durationLabel}</span>
                <strong>{choice.routeSummary}</strong>
              </div>
              <LensSaveButton choice={choice} />
            </div>
          </section>

          <a className={styles.scrollCue} href="#understand">
            <span>FOLLOW THE LENS</span>
            <strong>Meaning → places → one real day</strong>
            <Icon name="chevron" size={16} />
          </a>
        </section>

        <section className={styles.promiseStrip} aria-label="How Korea Lens works" data-reveal>
          <div><span>01</span><p>WATCHED IT</p><strong>Begin with the title you loved.</strong></div>
          <div><span>02</span><p>UNDERSTAND IT</p><strong>See the Korea behind the frame.</strong></div>
          <div><span>03</span><p>EXPERIENCE IT</p><strong>Choose what belongs in your day.</strong></div>
        </section>

        <div className={styles.contentWrap}>
          <section id="understand" className={styles.lensStatement} data-reveal>
            <div>
              <p className={styles.eyebrow}>THE KOREA IT SHOWED</p>
              <h2>See the work before the view.</h2>
            </div>
            <div className={styles.statementCopy}>
              {lens.lensThesis.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <a href="#places">Take this Lens into Jeju <Icon name="arrow" size={17} /></a>
            </div>
          </section>

          <section id="places" className={styles.placesSection}>
            <div className={styles.sectionHeading} data-reveal>
              <div>
                <p className={styles.eyebrow}>{choice.label.toUpperCase()} · SELECTED</p>
                <h2>{choice.id === "east-jeju" ? "Three stops. Three honest connections." : "One coast. One honest connection."}</h2>
              </div>
              <p>Every label tells you why a place is here before you decide to go.</p>
            </div>

            <div className={styles.experienceList}>
              {experiences.map((experience, index) => (
                <ExperienceCard key={experience.id} experience={experience} index={index} />
              ))}
            </div>

            <div className={styles.mapSection} data-reveal>
              <button
                type="button"
                aria-expanded={mapOpen}
                onClick={() => setMapOpen((open) => {
                  const next = !open;
                  emitLensEvent("lens_map_toggle", {
                    choice: choice.id,
                    state: next ? "opened" : "closed",
                  });
                  return next;
                })}
              >
                <span><Icon name="pin" size={18} /> See this Lens on the map</span>
                <span>{experiences.length} {experiences.length === 1 ? "place" : "places"} <Icon name="chevron" size={15} /></span>
              </button>
              {mapOpen ? (
                <div className={styles.mapCanvas}>
                  <LeafletMap markers={markers} polyline={markers.length > 1} height="h-[360px]" />
                  <p>Use this for orientation, then confirm live navigation before you leave.</p>
                </div>
              ) : null}
            </div>
          </section>

          <TripCut choice={choice} />
          <AdPlacement />

          <section className={styles.travelActions}>
            <div className={styles.sectionHeading} data-reveal>
              <div>
                <p className={styles.eyebrow}>TRAVEL DIFFERENTLY</p>
                <h2>Let the story change your behavior.</h2>
              </div>
              <p>Three small decisions make this more than a filming-location hunt.</p>
            </div>
            <div className={styles.actionGrid}>
              {lens.culturalActions.map((item, index) => (
                <article key={item.title} data-reveal>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.context}</p>
                  <strong>{item.action}</strong>
                </article>
              ))}
            </div>
          </section>

          <section id="reality-check" className={styles.realityCheck} data-reveal>
            <div className={styles.realityIntro}>
              <p className={styles.eyebrowLight}>REALITY CHECK</p>
              <h2>Know what is fact, context or our edit.</h2>
              <p>Trust does not require us to pretend we have stood everywhere. It requires us to show exactly what we know.</p>
              <span>NO ON-SITE VISIT YET</span>
            </div>
            <div className={styles.checkList}>
              {lens.realityChecks.map((item) => (
                <div key={item.label}>
                  <p>{item.label}</p>
                  <strong className={styles[`state_${item.state}`]}>{item.status}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.nextStory} data-reveal>
            <p className={styles.eyebrow}>KEEP YOUR KOREA MOVING</p>
            <h2>One screen story can become a real journey.</h2>
            <div>
              <Link
                href={l(locale, "/routes/jeju-tangerines-trail")}
                onClick={() => emitLensEvent("lens_next_action", { destination: "longer_route" })}
              >
                <span>Go deeper in Jeju</span><strong>Explore the longer route <Icon name="arrow" size={18} /></strong>
              </Link>
              <Link
                href={l(locale, "/quiz")}
                onClick={() => emitLensEvent("lens_next_action", { destination: "lens_quiz" })}
              >
                <span>Connect more titles</span><strong>Find My Korea Lens <Icon name="arrow" size={18} /></strong>
              </Link>
            </div>
          </section>

          <details
            className={styles.sources}
            data-reveal
            onToggle={(event) => {
              emitLensEvent("lens_sources_toggle", {
                state: event.currentTarget.open ? "opened" : "closed",
              });
            }}
          >
            <summary>Editorial evidence · {lens.sources.length} sources <Icon name="chevron" size={15} /></summary>
            <ul>
              {lens.sources.map((sourceId) => {
                const source = evidenceForLens(sourceId);
                return (
                  <li key={source.id}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer">
                      <span>{source.sourceTier}</span>{source.publisher} — {source.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
      </main>

      <footer className={styles.lensFooter}>
        <div>
          <strong className={styles.footerMark}><span className={styles.logoK}>K</span><span className={styles.logoSpot}>SPOT</span></strong>
          <p>See Korea through what you watched.</p>
        </div>
        <p>Independent travel editorial. Titles identify the works discussed; no production stills are used.</p>
      </footer>
    </article>
  );
}
