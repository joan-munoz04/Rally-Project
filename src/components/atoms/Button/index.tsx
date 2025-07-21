import React from "react";
import { Icon } from "@iconify/react";

interface IndexProps {
  text: string;
  size: string;
  color: string;
  icon?: string;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined; 
}

const Index = ({
  text,
  size,
  color,
  icon,
  iconPosition,
  className,
  onClick,
  type
}: IndexProps) => {
  const sizeClass =
    size === "small"
      ? "h-10 min-w-32"
      : size === "medium"
      ? "h-12 min-w-40"
      : size === "large"
      ? "h-14 min-w-48"
      : size === "xl"
      ? "h-20 min-w-70 text-xl"
      : size === "xxl"
      ? "h-22 min-w-78 text-xl"
      : "h-10 min-w-32";

  const colorClass =
    color === "dOrange"
      ? "bg-darkOrange text-white hover:bg-orange-300"
      : color === "lOrange"
      ? "bg-lightOrange text-white hover:bg-orange-300"
      : color === "gOrange"
      ? "bg-creamOrange text-black"
      : color === "default"
      ? "bg-white text-black border-1 border-grey hover:bg-gray-200"
      : color === "grey"
      ? "bg-grey hover:bg-gray-300"
      : "";



  return (
    <button
      onClick={onClick}
      className={`${colorClass} hover:cursor-pointer rounded-xl font-medium flex items-center justify-center gap-4 ${sizeClass} ${className}`}
      type={type}
    >
      {icon && iconPosition !== "right" && (
        <Icon icon={icon} width="25" height="25" />
      )}
      <span>{text}</span>
      {icon && iconPosition === "right" && (
        <Icon icon={icon} width="25" height="25" />
      )}
      
    </button>
  );
};

export default Index;
