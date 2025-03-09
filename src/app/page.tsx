import {
  HeroSection,
  Services,
  BrandsList,
  TopNav,
  Team,
} from "@/components/home-page";
import { ContactUs } from "@/components/home-page/contact-us";
import { FAQs } from "@/components/home-page/faqs";

export default function Home() {
  return (
    <>
      <TopNav />
      <HeroSection />
      <BrandsList />
      <Services />
      <Team />
      <ContactUs />
      <FAQs />
    </>
  );
}
