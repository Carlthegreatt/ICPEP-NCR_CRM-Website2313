import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FeatureCard from "../components/featureCard"; // Use the recommended @/ alias
import { chapterFeatures } from "../lib/about_constants"; // Import the content data

export default function About() {
  return (
    <main className="min-h-screen flex justify-center items-center stone-950 p-8 md:p-24">
      <section className="container">
        <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-8">
          {/*desktop view header */}
          <div className="hidden sm:flex flex-col justify-center gap-4 md:gap-8">
            <h2 className="w-full md:text-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary text-glow tracking-tight">
              About Our Chapter
            </h2>
            <p className="text-sm md:text-lg text-gray-300 mx-auto max-w-2xl text-justify md:text-center">
              ICPEP is a dynamic student organization fostering collaboration,
              innovation, and growth in computer engineering.
            </p>
          </div>

          {/*mobile view header */}
          <Accordion
            type="single"
            collapsible
            defaultValue="about-our-chapter"
            className="sm:hidden"
          >
            <AccordionItem value="about-our-chapter">
              <AccordionTrigger>
                <h2 className="w-full text-2xl font-extrabold text-primary text-glow tracking-tight">
                  About Our Chapter
                </h2>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-300 mx-auto max-w-2xl text-justify">
                ICPEP is a dynamic student organization fostering collaboration,
                innovation, and growth in computer engineering.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Feature Grid: This is the key layout section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
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
        </div>
      </section>
    </main>
  );
}

