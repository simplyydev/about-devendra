import { Briefcase, Camera, Code, Linkedin, Moon, Palette, School, Sun } from "lucide-react";
import { Section } from "@/components/Section";
import { SocialButton } from "@/components/SocialButton";
import { InterestCard } from "@/components/InterestCard";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <div className="container px-4 py-4 mx-auto max-w-4xl">
        {/* Theme Toggle */}
        <div className="flex justify-end items-center gap-2 mb-8 animate-fade-in">
          <Sun className="h-4 w-4" />
          <Switch
            checked={theme === "dark"}
            onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          />
          <Moon className="h-4 w-4" />
        </div>

        <main className="py-8">
          {/* Hero Section */}
          <Section className="text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
              <div className="relative">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
                  Devendra
                </h1>
                <p className="text-xl text-muted-foreground mb-8 animate-fade-up [animation-delay:200ms]">
                  CEO & Founder at MotoGrowth Media
                </p>
                <div className="flex flex-wrap justify-center gap-4 animate-fade-up [animation-delay:400ms]">
                  <SocialButton
                    href="https://linkedin.com/in/simplyydev"
                    icon={<Linkedin className="h-5 w-5" />}
                    label="LinkedIn"
                  />
                  <SocialButton
                    href="https://instagram.com/simplyy.dev"
                    icon={<Camera className="h-5 w-5" />}
                    label="Instagram"
                  />
                  <SocialButton
                    href="https://www.skool.com/motogrowth-media-9603"
                    icon={<School className="h-5 w-5" />}
                    label="Skool"
                  />
                </div>
              </div>
            </div>
          </Section>

          {/* About Section */}
          <Section
            title="About Me"
            subtitle="Get to know me"
            className="border-t"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl" />
              <div className="relative">
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up">
                Hey there! I’m Dev, a 20-year-old entrepreneur and the CEO of Hailsben, a private fund management firm that dives into hedge funds, trust funds, and equity funds. Before Hailsben, I was at MGM, where I delivered value to Ultra-High-Net-Worth Individuals (UHNWI) and sharpened my approach to high-stakes investment strategies. When it comes to investing, I stick to a straightforward yet impactful philosophy:"You can’t predict. You can prepare." — Howard Marks. My vision for Hailsben is to transform it into a top-notch investment firm that focuses on creating long-term value and driving strategic financial growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up [animation-delay:200ms]">
                  <InterestCard
                    icon={<Code className="h-8 w-8" />}
                    title="Development"
                    description="Building digital solutions that solve real-world problems through clean, efficient code."
                  />
                  <InterestCard
                    icon={<Palette className="h-8 w-8" />}
                    title="What We Do"
                    description="Empowering Businesses with the right consultancy, investments, and legal services."
                  />
                </div>
              </div>
            </div>
          </Section>
          <h1>Hola</h1>
          <Section
            title="About Me"
            subtitle="Get to know me"
            className="border-t"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl" />
              <div className="relative">
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up">
                Hey there! I’m Dev, a 20-year-old entrepreneur and the CEO of Hailsben, a private fund management firm that dives into hedge funds, trust funds, and equity funds. Before Hailsben, I was at MGM, where I delivered value to Ultra-High-Net-Worth Individuals (UHNWI) and sharpened my approach to high-stakes investment strategies. When it comes to investing, I stick to a straightforward yet impactful philosophy:"You can’t predict. You can prepare." — Howard Marks. My vision for Hailsben is to transform it into a top-notch investment firm that focuses on creating long-term value and driving strategic financial growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up [animation-delay:200ms]">
                  <InterestCard
                    icon={<Code className="h-8 w-8" />}
                    title="Development"
                    description="Building digital solutions that solve real-world problems through clean, efficient code."
                  />
                  <InterestCard
                    icon={<Palette className="h-8 w-8" />}
                    title="What We Do"
                    description="Empowering Businesses with the right consultancy, investments, and legal services."
                  />
                </div>
              </div>
            </div>
          </Section>
        </main>

        {/* Copyright Footer */}
        <footer className="py-8 text-center text-sm text-muted-foreground border-t animate-fade-up">
          <p>© {new Date().getFullYear()} Powered by Hailsben. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
