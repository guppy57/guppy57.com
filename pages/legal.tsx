import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrivacyPolicy from "@/components/policies/privacy-policy";
import TermsOfService from "@/components/policies/terms-of-service";
import TransparencyPolicy from "@/components/policies/transparency";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div>
      <NextSeo title="Legal" description="Radical starts here." />
      <Navbar activeLink="legal" />
      <Container>
        <Tabs
          defaultValue="terms-of-service"
          className="w-full flex flex-col items-center justify-start"
        >
          <TabsList className="mb-6">
            <TabsTrigger value="terms-of-service">Terms of Service</TabsTrigger>
            <TabsTrigger value="privacy-policy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="transparency">Transparency</TabsTrigger>
          </TabsList>
          <div className="bg-gray-100 w-full py-8 px-12 rounded-xl">
            <TabsContent value="terms-of-service">
              <TermsOfService />
            </TabsContent>
            <TabsContent value="privacy-policy">
              <PrivacyPolicy />
            </TabsContent>
            <TabsContent value="transparency">
              <TransparencyPolicy />
            </TabsContent>
          </div>
        </Tabs>
      </Container>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
