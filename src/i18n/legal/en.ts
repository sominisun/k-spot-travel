// Legal & about page content, per locale. EN is the canonical source;
// {shows}/{spots} tokens are replaced with live counts at render time.
export interface LegalL10n {
  about: {
    /** paragraph 1 — starts after the bolded slogan; supports {shows}/{spots} */
    p1: string;
    p2: string;
    policyTitle: string;
    bullets: { b: string; t: string }[];
    contactLead: string;
  };
  contact: {
    rows: { title: string; body?: string; note: string }[];
    outro1: string;
    outro2: string;
    outroLinkLabel: string;
  };
  effectiveLabel: string;
  privacy: { h: string; ps: string[] }[];
  terms: { h: string; ps: string[] }[];
  /** rendered under privacy/terms in non-EN locales; empty for EN */
  prevailNote: string;
}

export const en: LegalL10n = {
  about: {
    p1: "K-SPOT Travel is an independent, fan-made travel magazine and planning tool. We turn the K-dramas, films and shows people love on Netflix, Disney+ and Apple TV+ into real, walkable Korea itineraries — {shows} titles and {spots} verified locations and counting.",
    p2: "The site is run by a small editorial team (currently: one very committed editor) with help from a community of travelers who send corrections, photos and fresh reports from the field. Premium planner features (the Route Pass and Insider membership) and affiliate partnerships keep the guides free for everyone.",
    policyTitle: "Our verification policy",
    bullets: [
      { b: "Locations:", t: "we only publish filming locations confirmed by official tourism bodies (KTO, Visit Seoul, regional city pages) or major press. No rumors, no set-only sites presented as visitable." },
      { b: "Freshness:", t: "every spot, restaurant and guide carries a “last verified” date and is re-checked on a quarterly cycle. If you find something outdated, the report link on every page reaches the editor directly." },
      { b: "Images:", t: "we never use copyrighted stills or posters. Photography comes from openly licensed sources (Wikimedia Commons under CC BY / CC BY-SA / CC0 / public domain) with attribution on every image, or from our own cameras and community submissions used with permission." },
      { b: "Independence:", t: "we are not affiliated with any streaming platform or production company. Affiliate links never change what we recommend — picks are editorial first, monetized second." },
    ],
    contactLead: "Questions, corrections, partnerships:",
  },
  contact: {
    rows: [
      { title: "Email the editor", note: "Corrections, partnerships, press — answered within 2 business days." },
      { title: "Ask the community", body: "Discord — fastest for trip questions", note: "Recent travelers usually answer within hours." },
      { title: "Chatbot", body: "The “Ask the Editor” bar, bottom-right", note: "Instant answers from our guides; unanswered questions reach the editor automatically." },
    ],
    outro1: "Found outdated info on a page? Every spot, restaurant and guide has a",
    outro2: "link at the bottom — it lands directly in the editor's inbox with the page attached.",
    outroLinkLabel: "Our verification policy →",
  },
  effectiveLabel: "Effective",
  privacy: [
    {
      h: "What we collect",
      ps: [
        "Browsing data: standard anonymous analytics (pages visited, referrer, device class) used to improve the site.",
        "Chatbot logs: questions asked to the “Ask the Editor” assistant are stored anonymously (no account, session-scoped) so we can improve answers and write the guides people actually need. Do not include personal data in chat messages.",
        "Local storage: your wishlist hearts, pilgrimage stamps, cookie choice and Route Pass status are stored in YOUR browser only — we never see them and they never leave your device.",
        "Email addresses: only when you explicitly provide one — to receive a Route Pass PDF or (in future) the newsletter. Used solely for that purpose.",
        "Payments: processed entirely by our merchant of record (Lemon Squeezy). We never see or store card numbers; we receive only order confirmation and the email needed to deliver your purchase.",
      ],
    },
    {
      h: "Cookies and advertising",
      ps: [
        "We ask for consent via the cookie banner before any non-essential cookies are set.",
        "Once the site is approved for Google AdSense, Google and its partners may use advertising cookies to personalize ads; you can opt out of personalized advertising at adssettings.google.com. We keep ads off planning and checkout flows.",
      ],
    },
    {
      h: "Sharing",
      ps: [
        "We do not sell personal data. Service providers we rely on: hosting (Vercel), payments (Lemon Squeezy), transactional email (Resend), community (Discord — governed by Discord's own policies when you join). Outbound affiliate links (Klook, Trazy, Olive Young Global, StyleKorean, YesStyle, Agoda and similar) are governed by those sites' policies once you leave ours.",
      ],
    },
    {
      h: "Your rights",
      ps: [
        "EU/EEA (GDPR), UK and California (CCPA) visitors may request access, correction or deletion of any personal data we hold (in practice: your email and any chat message you identify). Local-storage data can be cleared instantly from your own browser settings.",
        "Requests: {email} — answered within 30 days.",
      ],
    },
    {
      h: "Retention & children",
      ps: [
        "Chat logs are retained for up to 12 months for product improvement, then deleted. Purchase records are retained as required by tax law by our merchant of record.",
        "The site is not directed at children under 13 and we do not knowingly collect their data.",
      ],
    },
  ],
  terms: [
    {
      h: "1. What this site is",
      ps: [
        "K-SPOT Travel is an independent editorial travel guide and trip-planning tool. We are not a travel agency, tour operator or booking platform; bookings you make through partner links are contracts between you and those partners.",
        "We are not affiliated with, endorsed by or sponsored by Netflix, The Walt Disney Company, Apple, or any broadcaster or production company. Show titles are referenced for identification and commentary only. We do not host or reproduce copyrighted footage, stills or posters.",
      ],
    },
    {
      h: "2. Accuracy — best effort, not guarantee",
      ps: [
        "Travel information changes: places close, prices move, reservation systems change their rules. We verify against official sources and re-check on a quarterly cycle (each page shows its last-verified date), but you are responsible for confirming details that matter to your trip before relying on them. To the fullest extent permitted by law, we are not liable for losses arising from outdated or inaccurate information.",
      ],
    },
    {
      h: "3. Paid products: Route Pass & Insider",
      ps: [
        "The Route Pass (one-time) and K-SPOT Insider (subscription) are digital products sold through our merchant of record, Lemon Squeezy, which handles payment, applicable taxes and receipts.",
        "Refunds: a Route Pass that has not been used to generate a delivered PDF is refundable within 14 days of purchase. Insider subscriptions can be cancelled any time and remain active until the end of the paid period; the current billing period is not refunded once its early-access drops have been delivered. Contact us (or Lemon Squeezy support) with your order email to process a refund.",
        "Planner outputs are personal travel suggestions generated from our editorial database; they are not professional advice and may contain scheduling imperfections — check opening days for anything critical.",
      ],
    },
    {
      h: "4. Affiliate disclosure",
      ps: [
        "Some outbound links (including Klook, Trazy, Olive Young Global, StyleKorean, YesStyle and accommodation partners) are affiliate links. Booking through them may earn us a commission at no additional cost to you. Editorial picks are chosen before, and independently of, monetization.",
      ],
    },
    {
      h: "5. Your content",
      ps: [
        "By submitting photos or reports (via Discord or email) for the Fan Frame or spot pages, you confirm you took/own the content and grant us a non-exclusive license to publish it on this site with credit to you. You can withdraw permission any time and we will remove it.",
      ],
    },
    {
      h: "6. Acceptable use & IP",
      ps: [
        "Don't scrape the site wholesale, misrepresent it as your own, or use it for unlawful purposes. Our original text, database curation and design are protected; short quotations with a link are always welcome.",
        "Openly licensed photographs remain under their original licenses (CC BY / CC BY-SA / CC0 / public domain) with attribution shown on each image — those licenses, not these terms, govern their reuse.",
      ],
    },
    {
      h: "7. Changes & contact",
      ps: [
        "We may update these terms as the service evolves; material changes will be dated at the top of this page. Questions: use the contact page on this site.",
      ],
    },
  ],
  prevailNote: "",
};
