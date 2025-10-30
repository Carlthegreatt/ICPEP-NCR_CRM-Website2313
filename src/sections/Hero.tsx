import Embed3DModel from "../components/Embed3DModel";
import { Button } from "../components/ui/button";

function Hero() {
  return (
    <div className="h-screen text-foreground flex flex-col md:flex-row items-center justify-center m-auto px-4 md:px-8 gap-8 md:gap-12 text-center md:text-left">
      <div className="relative w-full h-64 sm:h-80 md:h-[80vh] mt-6 md:mt-24">
        <Embed3DModel />
      </div>
      <div className="w-full md:px-0 md:ml-10 max-w-xl space-y-3 md:space-y-4">
        <p
          className="text-4xl sm:text-5xl md:text-6xl font-bold relative"
          style={{
            textShadow: "0 0 8px #7ff0fe, 0 0 16px #89E9FF",
          }}
        >
          ICpEP.se NCR
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold">
          A.Y. 2025-2026
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          ICPEP is a dynamic student organization fostering collaboration,{" "}
          <br /> innovation, and growth in computer engineering.
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
          <Button className="mt-4">Login</Button>
          <Button
            className="mt-4 border border-opacity-100"
            style={{ borderColor: "#89E9FF" }}
            variant="outline"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
