export type PreviewRadiusMeta = {
  id: string;
  label: string;
  hint: string;
};

export const PREVIEW_RADIUS_DEFAULT_ID = "md";

export const PREVIEW_RADIUS_OPTIONS: PreviewRadiusMeta[] = [
  { id: "none", label: "Sharp", hint: "Near-square chrome" },
  { id: "sm", label: "Soft", hint: "Tight controls" },
  { id: "md", label: "Default", hint: "Balanced kit feel" },
  { id: "lg", label: "Rounded", hint: "Friendly SaaS" },
  { id: "xl", label: "Pill-like", hint: "Bold cards & CTAs" },
];
