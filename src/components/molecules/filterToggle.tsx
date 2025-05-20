import Button from "@/components/atoms/Button";
import { useState } from "react";

export default function FilterToggle() {
  const [active, setActive] = useState("puntos");

  return (
    <div className="flex gap-4 mb-6">
      <Button
        text="Puntos de control"
        variant={active === "puntos" ? "grey" : "outline"}
        size="medium"
        color="grey"
        onClick={() => setActive("puntos")}
      />
      <Button
        text="Categorías"
        variant={active === "categorias" ? "grey" : "outline"}
        size="medium"
        color="grey"
        onClick={() => setActive("categorias")}
      />
    </div>
  );
}
