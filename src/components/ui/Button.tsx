import Link from "next/link";
import type { ButtonProps } from "@/types/ui";

const Button: React.FC<ButtonProps> = ({ href, className, children }) => {
  return (
    <>
      <Link
        href={href}
        // todo: need to create a more neutral and re-usable button style as default
        className={
          className ??
          `rounded-full bg-green-500 px-6 py-3 text-lg font-medium text-black transition hover:bg-green-400`
        }
      >
        {children}
      </Link>
    </>
  );
};

export default Button;
