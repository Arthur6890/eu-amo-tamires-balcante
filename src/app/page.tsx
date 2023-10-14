'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import emoji from '#/public/assets/monocle.gif';
import burro from '#/public/assets/burro.jpg';
import { Noto_Serif_JP } from 'next/font/google';
import styles from './page.module.scss';

const noto = Noto_Serif_JP({ subsets: ['latin'], weight: '400' });

export default function Home() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleSubmit = () => {
    if (!inputValue) {
      setIsInputEmpty(true);
    } else {
      inputValue.toLowerCase() === 'tamires balçante mendes de aguiar silveira'
        ? router.push('/loading')
        : router.push('/intruder');
    }
  };
  return (
    <main className={styles.main}>
      <h2 className={`${styles.title} ${noto.style}`}>
        Qual o seu nome completo amigo?
      </h2>
      <input
        className={styles.inputName}
        onChange={(event) => setInputValue(event.target.value)}
      />
      {isInputEmpty && (
        <>
          <h2 className={`${styles.burro} ${noto.style}`}>
            sem digitar o nome fica dificil
          </h2>
          <h2 className={`${styles.burro} ${noto.style}`}>
            BASTA LER A PRIMEIRA LINHA NÉ AMIGÃO
          </h2>
        </>
      )}
      <Image
        src={isInputEmpty ? burro : emoji}
        alt="monocle emoji"
        className={isInputEmpty ? styles.burroImage : styles.emojiImage}
      />
      <button onClick={handleSubmit} className={styles.submitButton}>
        acessar conteúdo
      </button>
    </main>
  );
}
