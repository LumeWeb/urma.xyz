import type { APIRoute } from "astro";
import { generateOGImage } from "../../../lib/og-template";

export const GET: APIRoute = async () => {
  const root = process.cwd();
  const png = await generateOGImage(root, {
    headline: "An on-chain torrent.",
    subtitle: "Index where your content lives across storage networks. If one mirror goes down, find another.",
    footer: "A Lume project",
    headlineSize: 64,
    subtitleSize: 24,
    footerSize: 18,
  });

  return new Response(png.buffer as ArrayBuffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
