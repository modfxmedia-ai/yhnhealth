import Image from "next/image";

// Accredible-issued digital badge; links out to the IFM credential verification page.
const CREDENTIAL_URL = "https://www.ifm.org/certification/credentials";

interface FMCPBadgeProps {
  size?: number;
  showLabel?: boolean;
  className?: string;
}

export default function FMCPBadge({ size = 112, showLabel = true, className = "" }: FMCPBadgeProps) {
  return (
    <a
      href={CREDENTIAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Dr. Chris's FMCP (Functional Medicine Certified Professional) credential from The Institute for Functional Medicine"
      className={`inline-flex items-center gap-4 ${className}`}
    >
      <span
        className="flex shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 shadow-card ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/badges/fmcp-badge.png"
          alt="FMCP - Functional Medicine Certified Professional digital badge from The Institute for Functional Medicine (IFM)"
          width={200}
          height={200}
          className="h-full w-full object-contain"
        />
      </span>
      {showLabel && (
        <span className="text-left text-base font-semibold uppercase leading-snug tracking-[0.08em] text-current">
          FMCP Certified
          <span className="mt-0.5 block text-sm font-medium normal-case tracking-normal text-current/70">
            Institute for Functional Medicine
          </span>
        </span>
      )}
    </a>
  );
}
