import type { ButtonProps } from "@/types/ui";
import BlockButton from "./ui/Button";

const UnwrappedOutlineButton: React.FC<Omit<ButtonProps, "className">> = ({
  href,
  children,
}) => {
  return (
    <BlockButton
      href={href}
      className={`my-10 rounded-full border-3 bg-inherit px-6 py-3 text-lg font-medium text-green-500 transition hover:border-green-400 hover:text-green-400`}
    >
      {children}
    </BlockButton>
  );
};

export default UnwrappedOutlineButton;
