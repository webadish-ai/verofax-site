export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Verofax",
    url: "https://verofax.com",
    logo: "https://verofax.com/verofax-logo.webp",
    description:
      "Verofax deploys human-like AI employees across web, app, phone and physical locations — Agentic AI, AI+AR, AI Holobox and Computer Vision Traceability.",
    sameAs: ["https://www.youtube.com/channel/UCdKI-Sbin5qBxeQbaoKELiA"],
    areaServed: "Global",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
