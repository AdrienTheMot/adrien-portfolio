import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactMe from "@/components/ContactMe";
import Links from "@/components/Links";

export default function Home() {
  return (
    <main className="bg-black text-zinc-100 antialiased">
      <Hero />
      <Biography />
      <FeaturedProjects />
      <ContactMe />
      <Links />
    </main>
  );
}