// components/organisms/ProfileDetail.tsx
import UserCard from '@/components/organisms/userCard'
import CompetenceRow from '@/components/molecules/competenceRow'
import Button from '@/components/atoms/Button'

export default function ProfileDetail() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-6">
      <UserCard email='valentina.cadenaz@udea.edu.co' name='Valentina Cadena'/>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Competencias</h2>
        <CompetenceRow title="Trabajo en equipo" level="Alto" />
        <CompetenceRow title="Resolución de problemas" level="Medio" />
        <CompetenceRow title="Comunicación" level="Bajo" />
      </div>

      <div className="flex justify-end space-x-4">
        <Button text="Editar" color="blue" size="md" variant="solid" />
        <Button text="Cerrar sesión" color="red" size="md" variant="outline" />
      </div>
    </div>
  )
}
