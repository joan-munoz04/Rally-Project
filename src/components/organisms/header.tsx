import Button from '@/components/atoms/Button';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center w-full p-4">
      <Button
        text="Login"
        size="medium"
        color="lOrange"
        icon="system-uicons:enter"
        onClick={() => router.push('/login')}
      />
      <Button
        text="Registrarse"
        size="medium"
        color="lOrange"
        icon="ic:baseline-assignment"
        iconPosition='right'
        onClick={() => router.push('/register')}
      />
    </div>
  );
}
