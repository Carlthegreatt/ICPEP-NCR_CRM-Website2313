import type { IconType } from "react-icons/lib";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const TitleIcon = icon;
  return (
    <div
      className="flex flex-col items-start p-6 sm:p-8 space-y-2 md:space-y-4
      rounded-lg shadow-xl 
        bg-primary/10 border-2 border-primary/15
      transition-all duration-300 ease-in-out   
      hover:border-blue-500/50 hover:shadow-blue-500/20 
      hover:-translate-y-2 hover:scale-[1.02]
      "
    >
      <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4">
        {/* desktop view */}
        <div className="hidden sm:block p-3 border-1 border-primary rounded-lg">
          <TitleIcon className="size-4 md:size-5 text-primary" />
        </div>

        {/* mobile view */}
        <TitleIcon className="sm:hidden size-4 md:size-5 text-primary" />

        {/* Title nng card */}
        <h3 className="text-sm md:text-lg font-semibold text-white">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-xs md:text-sm text-justify">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
