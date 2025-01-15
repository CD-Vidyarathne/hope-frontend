import { cn } from "../lib/util";

interface HopeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  onClick?: () => void;
}

const HopeButton: React.FC<HopeButtonProps> = ({
  text,
  className,
  onClick,
}) => {
  return (
    <button
      className={cn(
        "px-2 bg-dblue text-white font-bold py-3 rounded-lg shadow-md hover:scale-105 duration-200",
        className,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default HopeButton;
