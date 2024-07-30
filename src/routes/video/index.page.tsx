import React from 'react'
import styles from "./styles.module.scss"

export const VideoPage = () => {
	return (
		<div className={styles.wrapper}>
			<h2>
				Achei esses dois vídeos aqui e não resisti, tive que colocá-los aqui 🥹🥹🥹🥹🥹
			</h2>
			<h2>
				Eles representam tudo de bom que a gente já viveu e eu quero que vivamos ainda mais!
			</h2>

			<div className={styles.cuteVideos}>

				<video controls className={styles.video}>
					<source src={`${process.env.PUBLIC_URL}/video/1.mp4`} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<video controls className={styles.video}>
					<source src={`${process.env.PUBLIC_URL}/video/2.mp4`} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>

			<h2>
				E aqui temos um pequeno vídeo que eu fiz pra complementar tudo que disse na cartinha
			</h2>
			<h2>
				Tudo dito aqui e naquela carta representam tudo que está no meu coração e que eu tenho pensado muito ultimamente
			</h2>
			<br />
			<p>Obs: eu sou meio neurado e quando fui ver o vídeo depois de colocar ele aqui no site achei que ficou parecendo que eu disse que esse ano foi tudo ruim e eu NÃO ACHO ISSO DE FORMA ALGUMA!!!!!!!!!!!</p>
			<p>Se fosse pra resumir em uma fala tudo que eu quis dizer seria: Eu quero te fazer tão feliz quanto você me faz, e irei demonstrar isso com atitudes. Você é especial e vale todo esforço do mundo! Tenho muita sorte em ter você do meu lado</p>
			<br />
			<br />
			<div className={styles.videoYoutube}>
				<iframe height="615" src="https://www.youtube.com/embed/ko3cEXyVt_Y?si=9hUCIs8h8LjjknO2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
			</div>
		</div>
	)
}