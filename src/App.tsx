import Layout from "@/components/layout/Layout";
import Hero from "@/sections/Hero";
import MenuSection from "@/sections/MenuSection";
import HallsSection from "@/sections/HallsSection";
import BanquetSection from "@/sections/BanquetSection";
import ContactsSection from "@/sections/ContactsSection";

export default function App() {
  return (
    <Layout>
      <Hero />
      <MenuSection />
      <HallsSection />
      <BanquetSection />
      <ContactsSection />
    </Layout>
  );
}
