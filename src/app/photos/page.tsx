'use client';

import React from 'react';
import { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Carrossel } from '@/components/carrossel';
import styles from './styles.module.scss';

const Photos: NextPage = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.carrossel}>
        <Carrossel />
      </div>
    </main>
  );
};

export default Photos;
