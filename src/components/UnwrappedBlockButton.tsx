import type { ButtonProps } from "@/types/ui";
import Button from "./ui/Button";

const UnwrappedBlockButton: React.FC<Omit<ButtonProps, "className">> = ({
  href,
  children,
}) => {
  return (
    <Button
      href={href}
      className={`my-10 rounded-full bg-green-500 px-6 py-3 text-lg font-medium text-black transition hover:bg-green-400`}
    >
      {children}
    </Button>
  );
};

export default UnwrappedBlockButton;
