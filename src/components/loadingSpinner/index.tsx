import React, { FC } from 'react';
import styles from './styles.module.scss';

export const LoadingSpinner: FC = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};
