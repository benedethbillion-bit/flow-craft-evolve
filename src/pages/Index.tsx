import { Navigation } from "@/components/navigation/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Principles } from "@/components/sections/Principles";
import { Research } from "@/components/sections/Research";
import { Tools } from "@/components/sections/Tools";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Principles />
        <Research />
        <Tools />
      </main>
    </div>
  );
};

export default Index;
