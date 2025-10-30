import { Separator } from "@/components/ui/separator";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center">
      <div className="container">
        <div className="w-full text-foreground/60 flex flex-col md:flex-row justify-between items-start gap-10 px-8 md:px-24 pt-8">
          {/* #2 */}
          <section className="flex-4 md:max-w-1/3">
            <div className="flex flex-row justify-start items-center gap-8">
              <img
                src="/ICpEP.SE Logo 3.png"
                alt="icpep-logo"
                className="w-[70px] md:w-[81px] aspect-square"
              />
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl text-glow-soft text-primary font-extrabold tracking-tight">
                  ICpEP.se NCR
                </span>
                <span className="text-sm: lg:text-lg font-bold">
                  A.Y. 2025-2026
                </span>
              </div>
            </div>
            <p className="md:hidden lg:block mt-8 text-sm md:text-lg leading-normal tracking-tight font-sans">
              Institute of Computer Engineers of The Philippines Student Edition
              – National Capital Region
            </p>
          </section>

          {/* #2 */}
          <section className="w-auto flex flex-col gap-4">
            <h2 className="text-lg md:text-xl font-sans text-foreground font-extrabold tracking-tight">
              Quick Links
            </h2>
            <a
              href="/"
              className="text-sm md:text-lg font-sans hover:underline transition-all duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm md:text-lg font-sans hover:underline transition-all duration-300"
            >
              About
            </a>
          </section>

          {/* #3 */}
          <section className="w-auto space-y-4 text-foreground">
            <h2 className="text-lg md:text-xl font-sans font-extrabold tracking-tight">
              Get In Touch
            </h2>
            <div className="flex gap-4 [&>a:hover]:scale-110 [&>a:active]:scale-90 transition-all duration-300">
              <a href="#">
                <FaFacebookSquare className="size-8" />
              </a>
              <a href="#">
                <FaFacebookSquare className="size-8" />
              </a>
              <a href="#">
                <FaFacebookSquare className="size-8" />
              </a>
              <a href="#">
                <FaFacebookSquare className="size-8" />
              </a>
            </div>
          </section>
        </div>

        <div className="w-full px-8 md:px-12 text-foreground/60">
          <p className="hidden md:block lg:hidden mt-8 text-sm md:text-lg leading-normal tracking-tight font-sans">
            Institute of Computer Engineers of The Philippines Student Edition –
            National Capital Region
          </p>
          <Separator className="mt-8" />
          <p className="text-center text-xs md:text-sm my-8 font-sans">
            © 2025 ICPEP SE - NCR. All rights reserved. | Creating Pioneers for
            Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
