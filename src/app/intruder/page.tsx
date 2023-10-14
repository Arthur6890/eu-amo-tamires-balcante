'use client';

import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import retirese from '#/public/assets/retirese.jpg';
import ReactPlayer from 'react-player';
import styles from './styles.module.scss';

const Intruder: NextPage = () => {
  const [count, setCount] = useState(20);
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    count === 0
      ? (window.location.href =
          'https://www.youtube.com/watch?v=BGTx91t8q50&t=11s')
      : null;

    return () => clearInterval(countdownInterval);
  }, [count]);
  return (
    <main className={styles.main}>
      <ReactPlayer
        config={{
          youtube: {
            playerVars: { modestbranding: 1 },
          },
          file: {
            attributes: {
              controlsList: 'nodownload',
            },
          },
        }}
        controls={false}
        height={315}
        playing
        style={{ display: 'none' }}
        url={'https://www.youtube.com/watch?v=rUkzZTGE6jI'}
        loop
      />
      <h2 className={styles.title}>
        VOCÊ NÃO É ELA grrrr
        <br />
        😡😡😡😡😡😡😡😡😡
      </h2>
      <Image
        src={retirese}
        alt="Retire-se do grupo degustador de piroca"
        className={styles.image}
      />
      <h3 className={styles.warning}>
        Você não deveria estar aqui e como punicão em {count} segundos você será
        redirecionado para uma aula de JAVA ministrada por um indiano
      </h3>
    </main>
  );
};

export default Intruder;
