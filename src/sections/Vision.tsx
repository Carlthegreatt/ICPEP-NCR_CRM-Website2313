import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type BuildCardProps = {
  className?: string;
};
const BuildCard = ({ className = "" }: BuildCardProps) => {
  return (
    <Card
      className={cn(
        "flex-1 py-30 px-8 flex flex-col justify-center items-center",
        "bg-primary/10 border-2 border-primary/15 gap-2",
        "hover:[&>h1]:scale-110 hover:[&>span]:scale-110",
        "transition-all duration-300",
        className,
      )}
    >
      <h1 className="text-8xl text-glow tracking-tighter font-medium text-primary/15 transition-all duration-300">
        {"{ }"}
      </h1>
      <span className="text-xs sm:text-sm text-foreground/60 text-center transition-all duration-300">
        Building the future of tech
      </span>
    </Card>
  );
};

const Vision = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="container">
        <div className="w-full h-screen flex justify-center items-center gap-12 p-8 md:p-24">
          <div className="flex-1 space-y-8">
            {/* desktop view */}
            <div className="hidden md:block space-y-8">
              <h1 className="text-2xl md:text-3xl font-sans text-glow text-primary font-bold tracking-tight">
                Our Vision
              </h1>
              <p className="md:text-lg text-foreground/60 leading-6 md:leading-7 font-sans">
                To be the leading platform for computer science professionals in
                the NCR region, fostering innovation, collaboration, and
                excellence in technology.
              </p>
            </div>

            {/* mobile view */}
            <Accordion type="single" collapsible className="py-0 mb-0">
              <AccordionItem value="vission" className="md:hidden space-y-2">
                <AccordionTrigger>
                  <h1 className="text-2xl md:text-3xl font-sans text-glow text-primary font-bold tracking-tight">
                    Our Vision
                  </h1>
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-foreground/60 leading-6 md:leading-7 font-sans">
                  To be the leading platform for computer science professionals
                  in the NCR region, fostering innovation, collaboration, and
                  excellence in technology.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* mobile view */}
            <BuildCard className="lg:hidden py-20 [&>h1]:text-6xl [&>span]:text-xs" />

            <ul className="list-disc text-sm md:text-lg pl-4 font-sans space-y-3">
              <li className="marker:text-primary">Empower professionals</li>
              <li className="marker:text-primary">Drive Innovation</li>
              <li className="marker:text-primary">Build Community</li>
              <li className="marker:text-primary">Create Opportunity</li>
            </ul>
          </div>

          {/* desktop view */}
          <BuildCard className="hidden lg:flex" />
        </div>
      </div>
    </section>
  );
};

export default Vision;
