import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from 'components/loadingSpinner';
import styles from './styles.module.scss';


export const LoadingPage = () => {
	const [count, setCount] = useState(7);
	const navigate = useNavigate();

	useEffect(() => {
		const countdownInterval = setInterval(() => {
			setCount((prevCount) => {
				if (prevCount > 0) {
					return prevCount - 1;
				} else {
					navigate('/real-one');
					clearInterval(countdownInterval);
					return prevCount;
				}
			});
		}, 1000);
	}, [count]);

	return (
		<main className={styles.wrapper}>
			<h2 className={styles.title}>Seja bem vinda Tamy!</h2>
			<div className={styles.loading}>
				<LoadingSpinner />
			</div>
			<h3 className={styles.subtitle}>Não saia daqui!</h3>
			<h3 className={styles.subtitle}>
				Em breve você será redirecionada para o conteúdo, estamos apenas
				carregando.
			</h3>
		</main>
	);
};
