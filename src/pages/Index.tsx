import { Briefcase, Code, Linkedin, Palette, School } from "lucide-react";
import { Section } from "@/components/Section";
import { SocialButton } from "@/components/SocialButton";
import { InterestCard } from "@/components/InterestCard";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <main className="container px-4 py-16 mx-auto max-w-4xl">
        {/* Hero Section */}
        <Section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
            John Doe
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-up [animation-delay:200ms]">
            Digital Creator & Tech Enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up [animation-delay:400ms]">
            <SocialButton
              href="https://linkedin.com/in/johndoe"
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
            />
            <SocialButton
              href="https://business.example.com"
              icon={<Briefcase className="h-5 w-5" />}
              label="Business"
            />
            <SocialButton
              href="https://skool.com/johndoe"
              icon={<School className="h-5 w-5" />}
              label="Skool"
            />
          </div>
        </Section>

        {/* About Section */}
        <Section
          title="About Me"
          subtitle="Get to know me"
          className="border-t"
        >
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up">
            I'm passionate about creating digital experiences and sharing knowledge. With a background in technology and design, I help businesses and individuals achieve their goals through innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up [animation-delay:200ms]">
            <InterestCard
              icon={<Code className="h-8 w-8" />}
              title="Development"
              description="Building digital solutions that solve real-world problems through clean, efficient code."
            />
            <InterestCard
              icon={<Palette className="h-8 w-8" />}
              title="Design"
              description="Creating beautiful, intuitive interfaces that provide exceptional user experiences."
            />
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Index;