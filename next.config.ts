import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // react-pdf (and React itself) are runtime-required in the PDF route —
  // see route.tsx for why. That hides them from the bundler AND from file
  // tracing, so the full dependency closure is listed here explicitly to
  // make Vercel ship it with the function.
  outputFileTracingIncludes: {
    "/api/plan/pdf": [
      "react", "react-dom", "@babel/runtime", "@noble/ciphers", "@noble/hashes",
      "@react-pdf/fns", "@react-pdf/font", "@react-pdf/image", "@react-pdf/layout",
      "@react-pdf/pdfkit", "@react-pdf/primitives", "@react-pdf/reconciler",
      "@react-pdf/render", "@react-pdf/renderer", "@react-pdf/stylesheet",
      "@react-pdf/svg", "@react-pdf/textkit", "@react-pdf/types", "@swc/helpers",
      "abs-svg-path", "base64-js", "bidi-js", "brotli", "browserify-zlib", "clone",
      "color-name", "color-string", "dfa", "emoji-regex-xs", "events",
      "fast-deep-equal", "fflate", "fontkit", "hsl-to-hex", "hsl-to-rgb-for-reals",
      "hyphen", "inherits", "is-url", "jay-peg", "js-md5", "js-tokens", "linebreak",
      "loose-envify", "media-engine", "normalize-svg-path", "object-assign", "pako",
      "parse-svg-path", "png-js", "postcss-value-parser", "prop-types", "queue",
      "react-is", "require-from-string", "restructure", "safe-buffer", "scheduler",
      "string_decoder", "svg-arc-to-cubic-bezier", "tiny-inflate", "tslib",
      "unicode-properties", "unicode-trie", "util-deprecate",
      "vite-compatible-readable-stream", "yoga-layout",
    ].map((p) => `./node_modules/${p}/**`),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
