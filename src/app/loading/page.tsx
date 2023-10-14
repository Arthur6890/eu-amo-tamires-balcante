'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { NextPage } from 'next';
import { LoadingSpinner } from '@/components/loadingSpinner';
import { Water_Brush, Oswald } from 'next/font/google';
import styles from './styles.module.scss';

const waterBrush = Water_Brush({ subsets: ['latin'], weight: '400' });
const oswald = Oswald({ subsets: ['latin'], weight: '400' });

const LoadingPage: NextPage = () => {
  const [count, setCount] = useState(10);
  const router = useRouter();
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    count === 0 ? router.push('/real-one') : null;

    return () => clearInterval(countdownInterval);
  }, [count]);
  return (
    <main className={styles.wrapper}>
      <h2 className={waterBrush.className}>Seja bem vinda Tamy!</h2>
      <div className={styles.loading}>
        <LoadingSpinner />
      </div>
      <h3 className={oswald.className}>
        Estamos terminando de montar a página para você.
      </h3>
      <h3 className={oswald.className}>
        Em breve você será redirecionada para o conteúdo!
      </h3>
    </main>
  );
};

export default LoadingPage;
