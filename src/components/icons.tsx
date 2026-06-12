import type { ReactNode } from "react";

/*
 * Hand-drawn icon set for the hub's visual signalling layer.
 * One grammar: 24px grid, 1.5 stroke, round caps and joins,
 * currentColor only. All icons are decorative supports for
 * adjacent text and are hidden from assistive technology.
 */

function IconBase({
  className = "h-5 w-5",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

type IconProps = { className?: string };

/* Responsible AI principles: a compass. */
export function IconCompass({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.4 8.6 13.3 13.8 8.2 15.9 10.3 10.7 Z" />
    </IconBase>
  );
}

/* School governance: an institution. */
export function IconLandmark({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="m12 3.5 7.5 4h-15z" />
      <path d="M7 10.5v7M12 10.5v7M17 10.5v7" />
      <path d="M4.5 20.5h15" />
    </IconBase>
  );
}

/* Teacher workflows: a defined route between two points. */
export function IconRoute({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8.5 18h5.5a4 4 0 0 0 4-4V8.5" />
    </IconBase>
  );
}

/* Quality assurance: a checked clipboard. */
export function IconClipboardCheck({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="9" y="2.75" width="6" height="3.5" rx="1" />
      <path d="M15 4.5h2A1.5 1.5 0 0 1 18.5 6v13.5a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5V6A1.5 1.5 0 0 1 7 4.5h2" />
      <path d="m9.25 13.25 2 2 3.5-4.5" />
    </IconBase>
  );
}

/* Inclusive practice: people, plural. */
export function IconPeople({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="9" cy="7.75" r="3.25" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M15.25 4.9a3.25 3.25 0 0 1 0 5.7" />
      <path d="M17.25 14.6a5.5 5.5 0 0 1 3.25 4.9" />
    </IconBase>
  );
}

/* Inconsistency: uneven measures against the same baseline. */
export function IconVariance({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4.5 20.5h15" />
      <path d="M7.5 20.5v-5" />
      <path d="M12 20.5V6" />
      <path d="M16.5 20.5v-9" />
    </IconBase>
  );
}

/* Inequity: an unbalanced scale. */
export function IconScaleUnbalanced({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M5 9.7 19 6.3" />
      <path d="M12 8v11.5" />
      <path d="M8.5 19.5h7" />
      <path d="m5 9.7-2.1 4.8a2.7 2.7 0 0 0 4.2 0z" />
      <path d="m19 6.3-2.1 4.8a2.7 2.7 0 0 0 4.2 0z" />
    </IconBase>
  );
}

/* Governance gap: a safeguard outlined but not yet solid. */
export function IconShieldDashed({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path
        d="M12 3.25 18.75 6v5c0 4.4-2.85 7.9-6.75 9.75C8.1 18.9 5.25 15.4 5.25 11V6z"
        strokeDasharray="2.8 2.6"
      />
    </IconBase>
  );
}
