import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ChannelsRow } from "@/components/sections/channels-row";
import { ImpactDashboard } from "@/components/sections/impact-dashboard";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { SocialProof } from "@/components/sections/social-proof";
import { LeadCtaBanner } from "@/components/sections/lead-cta-banner";
import { OrganizationJsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <Hero />
      <TrustBar />
      <SolutionsGrid />
      <HowItWorks />
      <ChannelsRow />
      <ImpactDashboard />
      <IndustriesGrid />
      <SocialProof />
      <LeadCtaBanner />
    </>
  );
}
