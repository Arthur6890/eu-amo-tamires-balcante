'use client';

import React from 'react';
// import { NextPage } from 'next';
// import Image from 'next/image';
import ReactPlayer from 'react-player';
// import Link from 'next/link';
// import { Autour_One } from 'next/font/google';
import Doggo from 'public/assets/cachorro.webp';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

// const autorOne = Autour_One({ subsets: ['latin'], weight: '400' });


export const RealOnePage = () => {
	return (
		<main className={`${styles.wrapper}`}>
			<h2 className={styles.title}>
				Um pequeno tributo àquela que me faz feliz
			</h2>

			<div className={styles.videoWrapper}>
				<h3 className={styles.texts}>
					Nosso amor é tão lindo quanto a canção Another Love de Tom Odell:
				</h3>
				<div className={styles.videoPlayer}>
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
						controls
						height={'100%'}
						width={'100%'}
						url={'https://www.youtube.com/watch?v=MwpMEbgC7DA'}
					/>
				</div>
			</div>

			<div className={styles.videoWrapper}>
				<h3 className={styles.texts}>
					Há também quem diga que é tao lindo quanto a versão do manoel gomes
					cantando:
				</h3>

				<div className={styles.videoPlayer}>
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
						controls
						className={styles.videoPlayer}
						height={'100%'}
						width={'100%'}
						url={'https://www.youtube.com/watch?v=u9sJ5UW-K84'}
					/>
				</div>
			</div>

			<div className={styles.videoWrapper}>
				<h3 className={styles.texts}>
					Outros dizem que é belo como o MC Poze cantando em sua versão de No
					Baile Nós é Mídia:
				</h3>

				<div className={styles.videoPlayer}>
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
						controls
						className={styles.videoPlayer}
						url={'https://www.youtube.com/watch?v=glKGuKCCOdo'}
						height={'100%'}
						width={'100%'}
					/>
				</div>
			</div>

			<div className={styles.videoWrapper}>
				<h3 className={styles.texts}>
					Mas pra mim, ele é maior que tudo isso, pois ele é junção de todas
					essas músicas, sendo ele, a versão de Another Love, No Baile Nós é
					Mídia, cantada por Manoel Gomes o caneta azul🖊️:
				</h3>

				<div className={styles.videoPlayer}>
					<ReactPlayer
						config={{
							youtube: {
								playerVars: { modestbranding: 1, allowFullScreen: 0 },
							},
							file: {
								attributes: {
									controlsList: 'nodownload',
								},
							},
						}}
						controls
						className={styles.videoPlayer}
						height={'100%'}
						width={'100%'}
						url={'https://www.youtube.com/watch?v=lZO1j7NzbZQ'}
					/>
				</div>
			</div>

			<h3 className={styles.final}>
				Em breve, ao clicar&nbsp;
				<Link to={"/photos"} >aqui</Link>
				&nbsp;você verá uma coletanea de nossas fotos juntos.
				<br />
				mas por enquanto, fique com aquela figurinha do cachorro que é 100% você
				quando está feliz
			</h3>

			<img src={Doggo} alt="cachorro feliz" className={styles.doggo} />
		</main>
	);
};

