import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

// Colors from urma theme
const COLORS = {
  bg: "#FAFAF7",
  ink: "#0E1116",
  thread: "#2563EB",
  muted: "#6B7280",
  border: "rgba(14, 17, 22, 0.08)",
};

function findAsset(root: string, relativePath: string): string {
  const fromRoot = resolve(root, relativePath);
  if (!existsSync(fromRoot)) throw new Error(`Asset not found: ${relativePath}`);
  return fromRoot;
}

function loadFont(path: string): Buffer {
  return readFileSync(path);
}

export interface OGConfig {
  headline: string;
  subtitle?: string;
  footer?: string;
  headlineSize?: number;
  subtitleSize?: number;
  footerSize?: number;
  subtitleMargin?: number;
}

export async function generateOGImage(
  root: string,
  config: OGConfig
): Promise<Uint8Array> {
  const frauncesPath = findAsset(
    root,
    "node_modules/@fontsource/fraunces/files/fraunces-latin-500-normal.woff"
  );
  const interPath = findAsset(
    root,
    "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff"
  );
  const inter500Path = findAsset(
    root,
    "node_modules/@fontsource/inter/files/inter-latin-500-normal.woff"
  );

  const fonts = [
    {
      name: "Fraunces",
      data: loadFont(frauncesPath),
      weight: 500 as const,
      style: "normal" as const,
    },
    {
      name: "Inter",
      data: loadFont(interPath),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Inter",
      data: loadFont(inter500Path),
      weight: 500 as const,
      style: "normal" as const,
    },
  ];

  const headlineSize = config.headlineSize ?? 64;
  const subtitleSize = config.subtitleSize ?? 28;
  const footerSize = config.footerSize ?? 18;
  const subtitleMargin = config.subtitleMargin ?? 24;

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: COLORS.bg,
          fontFamily: "Inter, sans-serif",
          padding: "64px 80px",
          border: "4px solid " + COLORS.thread,
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "8px",
                backgroundColor: COLORS.thread,
              },
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "auto",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: COLORS.thread,
                          },
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: {
                            fontFamily: "Fraunces, serif",
                            fontSize: "28px",
                            fontWeight: 500,
                            color: COLORS.ink,
                            letterSpacing: "-0.02em",
                          },
                          children: "Urma",
                        },
                      },
                    ],
                  },
                },
                {
                  type: "span",
                  props: {
                    style: {
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: COLORS.muted,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    },
                    children: "Protocol v0",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: `${subtitleMargin}px`,
              },
              children: [
                {
                  type: "h1",
                  props: {
                    style: {
                      fontFamily: "Fraunces, serif",
                      fontSize: headlineSize,
                      fontWeight: 500,
                      color: COLORS.ink,
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                      maxWidth: "900px",
                    },
                    children: config.headline,
                  },
                },
                ...(config.subtitle
                  ? [
                      {
                        type: "p",
                        props: {
                          style: {
                            fontFamily: "Inter, sans-serif",
                            fontSize: subtitleSize,
                            fontWeight: 400,
                            color: COLORS.muted,
                            lineHeight: 1.4,
                            maxWidth: "700px",
                          },
                          children: config.subtitle,
                        },
                      },
                    ]
                  : []),
              ],
            },
          },
          ...(config.footer
            ? [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      marginTop: "auto",
                      gap: "8px",
                      fontFamily: "Inter, sans-serif",
                      fontSize: footerSize,
                      color: COLORS.muted,
                    },
                    children: config.footer,
                  },
                },
              ]
            : []),
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts,
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
  });
  const pngData = resvg.render();
  return new Uint8Array(pngData.asPng());
}
