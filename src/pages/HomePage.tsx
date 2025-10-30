import Hero from "../sections/Hero";
import LetterGlitch from "../components/LetterGlitch";

function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-15">
        <LetterGlitch
          glitchColors={["#a2ffe3", "#60ff83", "#7ff0fe"]}
          glitchSpeed={75}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
          characters="ICPEP.se NCR"
        />
      </div>
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}

export default HomePage;
