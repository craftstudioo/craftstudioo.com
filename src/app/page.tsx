import {
  HeroSection,
  Services,
  BrandsList,
  TopNav,
  Team,
} from "@/components/home-page";

export default function Home() {
  return (
    <>
      <TopNav />
      <HeroSection />
      <BrandsList />
      <Services />
      <Team />
    </>
  );
}
