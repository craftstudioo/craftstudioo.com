import {
  HeroSection,
  Services,
  BrandsList,
  TopNav,
  Team,
} from "@/components/home-page";
import { ContactUs } from "@/components/home-page/contact-us";
import { FAQs } from "@/components/home-page/faqs";
import { Footer } from "@/components/home-page/footer";
import Strategy from "@/components/home-page/strategy";

export default function Home() {
  return (
    <>
      <TopNav />
      <HeroSection />
      <BrandsList />
      <Services />
      <Strategy />
      <Team />
      <ContactUs />
      <FAQs />
      <Footer />
    </>
  );
}
