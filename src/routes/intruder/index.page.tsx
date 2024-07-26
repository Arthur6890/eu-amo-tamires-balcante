'use client';

import React, { useEffect, useState } from 'react';
// import { NextPage } from 'next';
// import Image from 'next/image';
import retirese from 'public/assets/retirese.jpg';
import ReactPlayer from 'react-player';
import styles from './styles.module.scss';

export const IntruderPage = () => {
	const [count, setCount] = useState(20);
	useEffect(() => {
		const countdownInterval = setInterval(() => {
			setCount((prevCount) => {
				if (prevCount > 0) {
					return prevCount - 1;
				} else {
					window.location.href = 'https://www.youtube.com/watch?v=BGTx91t8q50&t=11s';
					clearInterval(countdownInterval);
					return prevCount;
				}
			});
		}, 1000);

		return () => clearInterval(countdownInterval);
	}, []);

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
			<img
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

