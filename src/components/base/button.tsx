import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      className={`bg-orange-500 text-white rounded-full px-6 py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { PrimaryButton };
