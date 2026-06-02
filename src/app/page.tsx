import { Hero } from "@/components/sections/hero";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { ChannelsRow } from "@/components/sections/channels-row";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { ImpactDashboard } from "@/components/sections/impact-dashboard";
import { SocialProof } from "@/components/sections/social-proof";
import { LeadCtaBanner } from "@/components/sections/lead-cta-banner";
import { OrganizationJsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <Hero />
      <SolutionsGrid />
      <ChannelsRow />
      <IndustriesGrid />
      <ImpactDashboard />
      <SocialProof />
      <LeadCtaBanner />
    </>
  );
}
