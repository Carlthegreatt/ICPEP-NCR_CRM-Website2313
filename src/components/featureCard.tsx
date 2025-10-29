
interface FeatureCardProps {
  icon: string; 
  title: string;
  description: string;
}


const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-6 
      bg-stone-950 border border-gray-800 rounded-lg shadow-xl 
      transition-all duration-300 ease-in-out   
      hover:border-blue-500/50 hover:shadow-blue-500/20 
      hover:-translate-y-2 hover:scale-[1.02]
      cursor-pointer ">
      <div className="mb-4">
        <span className="text-4xl">{icon}</span> 
      </div>

      {/* Title nng card */}
      <h3 className="text-xl font-semibold mb-2 text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;