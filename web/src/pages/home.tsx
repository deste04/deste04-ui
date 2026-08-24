import { SiteHeader } from "../components/layout/site-header";
import { Hero } from "../components/home/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col lg:h-screen lg:overflow-hidden">
      <SiteHeader />
      <main className="flex-1 lg:overflow-hidden">
        <Hero />
      </main>
    </div>
  );
}
