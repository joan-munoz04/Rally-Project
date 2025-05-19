import Button from '@/components/atoms/Button';
import router from 'next/router';

export default function NavButtonGroup() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-4 w-full max-w-xl ">
      <Button
        text="Perfil"
        size="xxl"
        color="grey"
        variant="grey"
        icon="ic:outline-person"
        onClick={() => router.replace('/profile')}
      />
      <Button
        text="Vista General"
        size="xxl"
        color="grey"
        variant="grey"
        icon="ic:baseline-signal-cellular-alt"
      />
      <Button
        text="Vista por Puntos de Control"
        size="xxl"
        color="grey"
        variant="grey"
        icon="mdi:map-marker-path"
      />
      <Button
        text="Vista por Categoría"
        size="xxl"
        color="grey"
        variant="grey"
        icon="mdi:format-list-bulleted-type"
      />
      <div className="sm:col-span-2 flex justify-center">
        <Button
          text="Eventos Próximos"
          size="xxl"
          color="grey"
          variant="grey"
          icon="mdi:calendar"
        />
      </div>
    </div>
  );
}

