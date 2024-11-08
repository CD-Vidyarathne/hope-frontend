import { logo } from "../assets";

interface AuthInputsProps {
  topic: string;
  buttonText: string;
  children: React.ReactNode;
  className?: string;
}

function AuthInputs({
  topic,
  buttonText,
  children,
  className,
}: AuthInputsProps) {
  return (
    <div
      className={`w-full lg:w-[40%] bg-gradient-to-br from-border to-main flex flex-col justify-center items-center ${className}`}
    >
      <img src={logo} alt="logo" className="max-w-[30%] mb-4" />
      <div className="text-center bg-white bg-opacity-10 w-[90%] md:w-[80%] lg:w-[80%] h-[60%] md:h-[50%] lg:h-[40%] border border-border rounded-[25px] flex flex-col justify-center items-center">
        <div className="w-[80%] md:w-[70%] lg:w-[70%] flex flex-col gap-4">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
            {topic}
          </h3>
          <form className="text-left">
            {children}
            <button className="w-full mt-4 bg-main text-white font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthInputs;
