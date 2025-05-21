import React from "react";
import { Icon } from "@iconify/react";

interface IndexProps {
  text: string;
  size: string;
  color: string;
  icon?: string;
  variant?: string;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
}

const Index = ({
  text,
  size,
  color,
  icon,
  variant,
  iconPosition,
  className,
  onClick,
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
      ? "bg-darkOrange"
      : color === "lOrange"
      ? "bg-lightOrange"
      : color === "gOrange"
      ? "bg-creamOrange"
      : color === "grey"
      ? "bg-grey"
      : "";

  const colorTextClass =
    color === "dOrange"
      ? "text-white"
      : color === "lOrange"
      ? "text-white"
      : color === "gOrange"
      ? "text-black"
      : color === "grey"
      ? "text-black"
      : "";

  const variantClasses =
    variant === "orange"
      ? "text-white hover:bg-orange-500"
      : variant === "altOrange"
      ? "text-white hover:bg-creamOrange"
      : "text-gray-800 hover:bg-gray-300";

  return (
    <button
      onClick={onClick}
      className={`${colorClass} ${colorTextClass} ${variantClasses} hover:cursor-pointer rounded-xl flex items-center justify-center gap-4 ${sizeClass} ${className}`}
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
