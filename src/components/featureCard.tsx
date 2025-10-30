interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div
      className="flex flex-col items-start p-6 space-y-2 md:space-y-4
      bg-stone-950 border border-gray-800 rounded-lg shadow-xl 
      transition-all duration-300 ease-in-out   
      hover:border-blue-500/50 hover:shadow-blue-500/20 
      hover:-translate-y-2 hover:scale-[1.02]
      cursor-pointer "
    >
      <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2">
        <span className="text-2xl md:text-3xl">{icon}</span>

        {/* Title nng card */}
        <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-xs md:text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;

