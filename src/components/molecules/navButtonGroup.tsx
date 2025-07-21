import Button from '@/components/atoms/Button';
import router from 'next/router';

export default function NavButtonGroup() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
      <Button
        text="Perfil"
        size="xxl"
        color="grey"
        icon="ic:outline-person"
        onClick={() => router.replace('/profile')}
      />
      <Button
        text="Vista General"
        size="xxl"
        color="grey"
        icon="ic:baseline-signal-cellular-alt"
        onClick={() => router.replace('/results')}
      />
      <Button
        text="Vista por Puntos de Control"
        size="xxl"
        color="grey"
        icon="mdi:location-on-outline"
        onClick={() => router.replace('/results/controlPoints')}
      />
      <Button
        text="Vista por Categoría"
        size="xxl"
        color="grey"
        icon="mdi:format-list-bulleted-type"
        onClick={() => router.replace('/results/category')}
      />
      <div className="sm:col-span-2 flex justify-center">
        <Button
          text="Eventos Próximos"
          size="xxl"
          color="grey"
          icon="mdi:calendar"
          onClick={() => router.replace('/upcomingEvents')}
        />
      </div>
    </div>
  );
}

