import React, { JSX } from "react";

interface HeadingProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, level = 1 }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-medium flex gap-2`}
    >
      {text}
      <span className="md:h-3 md:w-3 h-2 w-2 bg-orange-500 rounded-full inline-block"></span>
    </Tag>
  );
};

export { Heading };
