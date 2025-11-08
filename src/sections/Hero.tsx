import { lazy, Suspense } from "react";
const Embed3DModel = lazy(() => import("../components/Embed3DModel"));
import CountUp from "../components/CountUp";

function Hero() {
  return (
    <div className="h-screen text-foreground pt-20 flex flex-col md:flex-row items-center justify-center m-auto px- md:px-8 gap-8 md:gap-0 text-center md:text-left">
      <div className="w-full md:w-1/2">
        <div className="relative w-full h-64 sm:h-80 md:h-[80vh]  space-y-8 md:space-y-0">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#89E9FF] border-t-transparent" />
              </div>
            }
          >
            <Embed3DModel />
          </Suspense>
        </div>
      </div>
      <div>
        <div className="w-full md:ml-0 max-w-xl space-y-3 md:space-y-4">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold relative text-primary text-glow">
            ICpEP.se NCR
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">
            A.Y. 2025-2026
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            ICPEP is a dynamic student organization fostering collaboration,
            innovation, and growth in computer engineering.
          </p>

          <hr className="my-4 mt-8 border-t border-[#89E9FF] opacity-20 w-1/2 md:w-[80%] md:mr-20 mx-auto md:mx-0" />
          <div className="flex flex-row gap-1 md:gap-1 justify-center md:justify-start items-center">
            <div className="flex flex-row gap-10 md:gap-30 ">
              <div className="text-xl md:text-lg font-bold">
                <CountUp
                  from={0}
                  to={1000}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                {"+"}
                <br />
                <p className="text-sm md:text-xs">Members</p>
              </div>
              <div className="text-xl md:text-lg font-bold">
                <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                {"+"}
                <br />
                <p className="text-sm md:text-xs">Events </p>
              </div>
              <div className="text-xl md:text-lg font-bold">
                <CountUp
                  from={0}
                  to={33}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />{" "}
                <br />
                <p className="text-sm md:text-xs">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
