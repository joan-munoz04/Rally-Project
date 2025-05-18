import Button from '@/components/atoms/Button';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex justify-between font-bold gap-4 p-4">
      <Button text="Login" size="medium" color="lOrange" icon="system-uicons:enter" variant='orange' onClick={() => router.push('/login')}/>
      <Button text="Registrarse" size="medium" color="lOrange" icon="ic:baseline-assignment" variant='orange' onClick={() => router.push('/register')}/>
    </div>
  );
}
