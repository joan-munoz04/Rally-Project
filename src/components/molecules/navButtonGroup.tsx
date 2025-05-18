import Button from '@/components/atoms/Button';

export default function NavButtonGroup() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      <Button text="Perfil" size="xxl" color="grey" variant='grey' icon="ic:outline-person"/>
      <Button text="Vista General" size="xxl" color="grey" variant='grey' icon="ic:baseline-signal-cellular-alt" />
      <Button text="Vista por Puntos de Control" size="xxl" color="grey" variant='grey' icon="mdi:map-marker-path" />
      <Button text="Vista por Categoría" size="xxl" color="grey" variant='grey' icon="mdi:format-list-bulleted-type" />
      <div className="col-span-2 flex justify-center -mb-4">
        <Button text="Eventos Próximos" size="xxl" color="grey" variant='grey' icon="mdi:calendar" />
      </div>
    </div>
  );
}
