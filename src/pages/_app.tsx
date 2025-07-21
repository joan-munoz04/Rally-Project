import '@/styles/globals.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import LoadingScreen from '@/components/organisms/loadingScreen';
import { EventProvider } from '@/context/eventContext';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setTimeout(() => setLoading(false), 800); // opcional: darle tiempo a la animación

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <EventProvider>
      <>
      {loading && <LoadingScreen />}
      <Component {...pageProps} />
    </>
    </EventProvider>
  );
}
