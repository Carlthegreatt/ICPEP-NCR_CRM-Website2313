import FeatureCard from '../components/featureCard'; // Use the recommended @/ alias
import { chapterFeatures } from '../lib/about_constants'; // Import the content data

export default function About() {
  return (
    <main className="min-h-screen stone-950 p-15">
      <section className="container mx-auto py-16">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 [text-shadow:0_0_20px_rgb(59,130,246),0_0_40px_rgb(59,130,246)]">
            About Our Chapter
          </h2>
          <p className="text-lg text-gray-300 mx-auto w-150 text-justify">
            ICPEP is a dynamic student organization fostering collaboration, innovation, and growth in computer engineering.
          </p>
        </div>

        {/* Feature Grid: This is the key layout section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

      </section>
      {/* You can add your teammate's Header/Hero component above this section */}
    </main>
  );
}