import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FeatureCard from "../components/featureCard";
import { HiLightningBolt } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";
import type { Feature } from "@/types/types";

const chapterFeatures: Feature[] = [
  {
    icon: HiLightningBolt,
    title: "Innovation",
    description:
      "Pushing boundaries with cutting-edge technology and creative solutions",
  },
  {
    icon: FaHeart,
    title: "Collaboration",
    description:
      "Building a community of passionate computer science professionals",
  },
  {
    icon: GiGraduateCap,
    title: "Education",
    description:
      "Continuous learning through workshops, seminars, and mentorship",
  },
  {
    icon: IoRocketSharp,
    title: "Growth",
    description: "Accelerating careers and fostering professional development",
  },
];

export default function About() {
  return (
    <main className="min-h-screen flex justify-center items-center stone-950 p-8 md:p-24">
      <section className="container">
        <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-8 lg:gap-12">
          {/*desktop view header */}
          <div className="hidden sm:flex flex-col justify-center gap-4 lg:gap-8">
            <h2 className="w-full md:text-center text-xl md:text-2xl lg:text-4xl font-extrabold text-primary text-glow tracking-tight">
              About Our Chapter
            </h2>
            <p className="text-xs md:text-sm lg:text-lg text-foreground/60 mx-auto max-w-2xl text-justify md:text-center">
              ICPEP is a dynamic student organization fostering collaboration,
              innovation, and growth in computer engineering.
            </p>
          </div>
          {/*desktop view cards */}
          <div className="hidden sm:grid grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {chapterFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/*mobile view header */}
          <div className="sm:hidden space-y-4">
            <h1 className="text-xl font-extrabold text-primary text-glow tracking-tight">
              About Our Chapter
            </h1>
            <div className="text-sm text-foreground leading-6 md:leading-7 p-4 rounded-lg bg-primary/10 border border-primary/15">
              ICPEP is a dynamic student organization fostering collaboration,
              innovation, and growth in computer engineering.
            </div>
          </div>
          {/*mobile view cards */}
          <Accordion
            type="single"
            collapsible
            defaultValue="about-our-chapter"
            className="sm:hidden w-full"
          >
            {chapterFeatures.map((feature, i) => {
              const FeatureIcon = feature.icon;
              return (
                <AccordionItem key={i} value={feature.title}>
                  <AccordionTrigger>
                    <div className="flex justify-start items-center gap-2">
                      <FeatureIcon className="size-4 text-primary" />
                      <h3 className="text-foreground text-lg font-bold">
                        {feature.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="ml-6 text-foreground/80 text-sm">
                    {feature.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
