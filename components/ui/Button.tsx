import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  className = "",
  external = false,
  onClick,
}: ButtonProps) {
  const baseClasses = `
    relative inline-block z-10 text-white px-8 py-5 font-medium
    transition-colors duration-300 hover:text-crimson-red
    before:absolute before:w-[70px] before:h-[70px] before:top-1/2 before:left-0
    before:-translate-y-1/2 before:border-2 before:border-white-5 before:rounded-full
    before:transition-all before:duration-500 before:ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
    hover:before:left-[calc(100%-70px)]
  `;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${className}`}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}
