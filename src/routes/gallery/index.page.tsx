import React from 'react';
import { GalleryItems } from 'utils/gallery';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import "./gallery.css"
import styles from "./styles.module.scss"

function Gallery() {
	const onInit = () => {
		console.log('lightGallery has been initialized');
	};

	return (
		<div className={styles.wrapper}>
			<h2>
				Quando se trata de fotos, você é a melhor que eu conheço!
			</h2>
			<h2>
				Como eu sempre digo, ser blogueirinha ta no seu sangue, então selecionei algumas e fiz esse pequeno albúm nosso, espero que você goste 😊😊
			</h2>
			<LightGallery
				onInit={onInit}
				speed={500}
				plugins={[lgThumbnail, lgZoom]}

			>
				{GalleryItems.map((item, index) => (
					<a href={item.imageSrc} className={styles.polaroid}>
						<img alt={item.caption} src={item.imageSrc} className={styles.polaroidImage} />

						<div className={styles.caption}><p>{item.caption}</p></div>
					</a>
				))}
			</LightGallery>
		</div>
	);
}

export default Gallery