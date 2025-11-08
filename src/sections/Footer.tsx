import { Separator } from "@/components/ui/separator";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-12 lg:px-24">
      <div className="container max-w-7xl mx-auto w-full">
        <div className="w-full text-foreground/60 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 lg:gap-12 pb-6">
          {/* Logo & Description Section */}
          <section className="w-full md:flex-1 md:max-w-md lg:max-w-lg">
            <div className="flex flex-row justify-start items-center gap-3 sm:gap-4 md:gap-6">
              <img
                src="/icpep-se.png"
                alt="icpep-logo"
                className="w-14 sm:w-16 md:w-20 lg:w-[81px] aspect-square shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl text-glow-soft text-primary font-extrabold tracking-tight">
                  ICpEP.se NCR
                </span>
                <span className="text-xs sm:text-sm md:text-base font-bold">
                  A.Y. 2025-2026
                </span>
              </div>
            </div>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base leading-relaxed">
              Institute of Computer Engineers of The Philippines Student Edition
              – National Capital Region
            </p>
          </section>

          {/* Quick Links Section */}
          <section className="w-full md:w-auto flex flex-col gap-3 md:gap-4">
            <h2 className="text-sm sm:text-base md:text-lg text-foreground font-extrabold tracking-tight">
              Quick Links
            </h2>
            <nav className="flex flex-col gap-2 sm:gap-3">
              <a
                href="/"
                className="text-xs sm:text-sm md:text-base hover:underline hover:text-foreground transition-all duration-300 w-fit"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-xs sm:text-sm md:text-base hover:underline hover:text-foreground transition-all duration-300 w-fit"
              >
                About
              </a>
              <a
                href="/join-us"
                className="text-xs sm:text-sm md:text-base hover:underline hover:text-foreground transition-all duration-300 w-fit"
              >
                Join Us
              </a>
            </nav>
          </section>

          {/* Get In Touch Section */}
          <section className="w-full md:w-auto space-y-3 md:space-y-4">
            <h2 className="text-sm sm:text-base md:text-lg text-foreground font-extrabold tracking-tight">
              Get In Touch
            </h2>
            <div className="flex gap-4 [&>a:hover]:scale-110 [&>a:active]:scale-90 [&>a]:transition-all [&>a]:duration-300">
              <a
                href="https://www.facebook.com/ICpEP.SE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="shrink-0 text-foreground/60 hover:text-foreground"
              >
                <FaFacebookSquare className="size-6 sm:size-7 md:size-8" />
              </a>
              <a
                href="mailto:icpep.se.ncr@gmail.com"
                aria-label="Email"
                className="shrink-0 text-foreground/60 hover:text-foreground"
              >
                <BiLogoGmail className="size-6 sm:size-7 md:size-8" />
              </a>
            </div>
          </section>
        </div>

        <div className="w-full px-8 md:px-12 text-foreground/60">
          <p className="hidden md:block lg:hidden mt-8 text-xs md:text-sm leading-normal tracking-tight">
            Institute of Computer Engineers of The Philippines Student Edition –
            National Capital Region
          </p>
          <Separator className="mt-6 md:mt-8" />
          <p className="text-center text-xs sm:text-sm my-6 md:my-8 leading-relaxed px-2">
            © 2025 ICPEP SE - NCR. All rights reserved. | Creating Pioneers for
            Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
