import { Separator } from "@/components/ui/separator";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center">
      <div className="container">
        <div className="w-full bg-accent flex flex-row justify-center items-start gap-10 px-12">
          {/* #2 */}
          <section className="flex-3 bg-background">
            <div className="flex justify-start items-center">
              <img
                src="/ICpEP.SE Logo 3.png"
                alt="icpep-logo"
                className="w-[81px] h-[81px]"
              />
              <div className="flex flex-col">
                <span>ICpEP.se NCR</span>
                <span>A.Y. 2025-2026</span>
              </div>
            </div>
            <p>
              Institute of Computer Engineers of The Philippines Student Edition
              – National Capital Region
            </p>
          </section>

          {/* #2 */}
          <section className="flex-2 flex flex-col bg-background">
            <h2>Quick Links</h2>
            <a href="hero">Home</a>
            <a href="#about">About</a>
          </section>

          {/* #3 */}
          <section className="flex-2 bg-background">
            <h2>Get In Touch</h2>
            <div className="flex gap-4">
              <FaFacebookSquare className="size-8" />
              <FaFacebookSquare className="size-8" />
              <FaFacebookSquare className="size-8" />
            </div>
          </section>
        </div>

        <div className="w-full px-12">
          <Separator />
          <p className="text-center">
            © 2025 ICPEP SE - NCR. All rights reserved. | Creating Pioneers for
            Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
