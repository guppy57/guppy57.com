import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";

export default function Custom404() {
  return (
    <div>
      <NextSeo title="404 Not Found" />
      <Navbar />
        <Container>
          404
        </Container>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
