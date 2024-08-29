import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <HeroSection />
      Meow
    </main>
  );
}
