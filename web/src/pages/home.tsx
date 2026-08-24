import { SiteHeader } from "../components/layout/site-header";
import { Hero } from "../components/home/hero";
import { FeatureGrid } from "../components/home/feature-grid";
import { ShowcaseGrid } from "../components/home/showcase-grid";
import { Footer } from "../components/home/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <ShowcaseGrid />
      </main>
      <Footer />
    </div>
  );
}
