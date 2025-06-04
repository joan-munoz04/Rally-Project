// components/organisms/UserCard.tsx
import React from "react";
import Button from "../atoms/Button";

interface ButtonConfig {
  text: string;
  icon: string;
  iconPosition?: "left" | "right";
  color?: string;
  onClick: () => void;
}

interface UserCardProps {
  name?: string;
  email?: string;
  avatarUrl?: string;
  leftButton?: ButtonConfig;
  rightButton?: ButtonConfig;
  bottomButton?: ButtonConfig
}

const UserCard = ({ name, email, avatarUrl , leftButton, rightButton, bottomButton}: UserCardProps) => {
  return (
    <div className="relative bg-softOrange p-2 flex flex-col items-center w-full mx-auto">
      <div className="absolute top-4 left-0 right-0 flex justify-between px-4">
        {leftButton && (
          <Button
            text={leftButton.text}
            icon={leftButton.icon}
            color={leftButton.color || "lOrange"}
            variant="altOrange"
            size="small"
            iconPosition={leftButton.iconPosition}
            onClick={leftButton.onClick}
          />
        )}
        {rightButton && (
          <Button
            text={rightButton.text}
            icon={rightButton.icon}
            color={rightButton.color || "lOrange"}
            variant="altOrange"
            size="small"
            iconPosition={rightButton.iconPosition}
            onClick={rightButton.onClick}
          />
        )}
      </div>

      {/* Avatar */}
      <div className="w-58 h-58 rounded-full overflow-hidden  shadow-md mb-2">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-400 text-white text-4xl font-bold">
            {name ? name.charAt(0): "?"}
          </div>
        )}
      </div>

      {/* Nombre y correo */}
      <div className="text-center mt-2">
  {name && email ? (
    <>
      <h3 className="text-4xl font-bold text-gray-800">{name}</h3>
      <p className="text-2xl text-gray-600">{email}</p>
    </>
  ) : bottomButton ? (
    <Button
      text={bottomButton.text}
      icon={bottomButton.icon}
      size="small"
      color={bottomButton.color || 'lOrange'}
      iconPosition={bottomButton.iconPosition}
      variant="altOrange"
      onClick={bottomButton.onClick}
    />
  ) : null}
</div>

    </div>
  );
};

export default UserCard;
