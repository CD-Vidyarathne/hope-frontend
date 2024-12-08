import { cn } from "../lib/util";

interface AuthImageProps {
  imageSrc: string;
  className?: string;
}

const AuthImage: React.FC<AuthImageProps> = ({ imageSrc, className }) => {
  return (
    <div
      className={cn(
        "w-full lg:w-[60%] relative h-[50vh] lg:h-full overflow-hidden",
        className,
      )}
    >
      <div className="w-full h-full">
        <img
          src={imageSrc}
          className="h-full w-full object-cover"
          alt="Background"
        />
      </div>
      <div className="absolute top-[60%] left-[10%] transform -translate-y-1/2 text-left">
        <p className="italic font-poppins font-light text-white text-[32px] md:text-[48px] lg:text-[72px] opacity-[100%]">
          Welcome, Admin!
        </p>
        <p className="italic font-poppins font-light text-white text-[24px] md:text-[36px] lg:text-[48px] opacity-[90%]">
          Manage the platform,
        </p>
        <p className="italic font-poppins font-light text-white text-[24px] md:text-[36px] lg:text-[48px] opacity-[80%]">
          oversee donations,
        </p>
        <p className="italic font-poppins font-light text-white text-[24px] md:text-[36px] lg:text-[48px] opacity-[70%]">
          create an impact.
        </p>
      </div>
    </div>
  );
};

export default AuthImage;
