const isHybridLanding = import.meta.env["VITE_LANDING_VARIANT"] === "hybrid";

export const publicSiteOrigin = isHybridLanding
  ? "https://nana-wallet-hybrid.vercel.app"
  : "https://nana-wallet-gamma.vercel.app";

// The versioned filename forces social crawlers to discard the old Lovable preview cache.
export const socialPreviewUrl = `${publicSiteOrigin}/nana-social-card.png?v=20260827`;
