import Image from "next/image";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NextSeo } from "next-seo";
import DreamflowBadge from "@/components/DreamflowBadge";

export default function About() {
  return (
    <div>
      <NextSeo title="About" description="Radical starts here." />
      <Navbar activeLink="about" />
      <Container>
        <h1 className="text-5xl font-bold tracking-tight pt-12">
          Often, we are disappointed by the realities of our potential, but we
          forget that with a long enough timeline our potential is seemingly
          infinite.
        </h1>
        <div className="mt-8 text-3xl tracking-tight space-y-8 font-medium text-[#4B4B4A]">
          <p>It is this principle that guides us to keep working.</p>
          <p>
            Kreative is a holding company, per say. A home for sometimes vastly
            different projects. What keeps it all together (besides the logo) is
            the goal of serving our customers, constituents, and community. Our
            shared mission, our through line, is to build organizations that aid
            the human condition. We&apos;re open to anything, trying everything,
            and striving for a world where Kreative has the opportunity and
            resources to advance problem solving.
          </p>
          <p>
            Our journey started in 2018, when Armaan opened Kreative (originally
            called The Creative Foundation, LLC) to start running hackathons for
            students in the Chicagoland area. Since then, we&apos;ve ran a few
            more, helped small businesses with their marketing, built AI-powered
            software for veterinarians, and more.
          </p>
          <p>
            We haven&apos;t succeeded with everything and failure is a part of
            the journey. We&apos;re going to keep working.
          </p>
        </div>
        <Image
          src="/images/llc-formation-pdf.png"
          alt="Kreative, LLC. Formation PDF"
          className="w-full h-full rounded-lg border border-gray-200 my-12 shadow-xl"
          width={1200}
          height={1738}
        />
        <div className="mt-8 text-3xl tracking-tight space-y-8 font-medium text-[#4B4B4A]">
          <p>
            Kreative holds the idea that business can be one of the best ways to
            provide a service to those around us. By creating products that
            genuinely better the lives of our customers, we at Kreative can rest
            easy knowing we&apos;ve helped change somebody&apos;s life.
          </p>
          <p>
            It&apos;s this belief that drives us to look at each industry and
            service individually to assess what we can bring to the table and
            how we can integrate cross market services together to aid our
            customers in their own pursuits. Without the interests of our
            customers at the forefront of our organization, there is no value in
            existing.
          </p>
        </div>
      </Container>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
