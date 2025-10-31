import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FeatureCard from "../components/featureCard"; // Use the recommended @/ alias
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
        <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-12">
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

          {/* Feature Grid: This is the key layout section */}
          <div className="hidden sm:grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
            {/* Map over the imported data and render one Card component for each item */}
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
          <Accordion
            type="single"
            collapsible
            defaultValue="about-our-chapter"
            className="sm:hidden w-full"
          >
            <AccordionItem
              value="about-our-chapter"
              className="md:hidden space-y-4 border-none"
            >
              <AccordionTrigger className="p-0 flex justify-between items-center">
                <h1 className="text-xl font-extrabold text-primary text-glow tracking-tight">
                  About Our Chapter
                </h1>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/60 leading-6 md:leading-7">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/15">
                  ICPEP is a dynamic student organization fostering
                  collaboration, innovation, and growth in computer engineering.
                </div>
              </AccordionContent>
            </AccordionItem>

            {chapterFeatures.map((feature, i) => {
              const FeatureIcon = feature.icon;
              return (
                <AccordionItem
                  key={i}
                  value={feature.title}
                  className="border-none"
                >
                  <AccordionTrigger>
                    <div className="flex justify-start items-center gap-2">
                      <FeatureIcon className="size-4 text-primary" />
                      <h3 className="text-foreground text-lg font-bold">
                        {feature.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 text-sm">
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/15">
                      {feature.description}
                    </div>
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
