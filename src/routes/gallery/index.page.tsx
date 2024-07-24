import React from 'react';
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
			<LightGallery
				onInit={onInit}
				speed={500}
				plugins={[lgThumbnail, lgZoom]}

			>
				<a href="https://www.portalntc.org.br/wp-content/uploads/Scania-vende-1.000-caminhoes.jpeg" className={styles.polaroid}>
					<img alt="img1" src="https://www.portalntc.org.br/wp-content/uploads/Scania-vende-1.000-caminhoes.jpeg" className={styles.polaroidImage} />

					<div className={styles.caption}><p>I Miss London</p></div>
				</a>

				<a href="https://quatrorodas.abril.com.br/wp-content/uploads/2021/02/FLP3993.jpg?quality=70&strip=info" className={styles.polaroid}>
					<img alt="img1" src="https://quatrorodas.abril.com.br/wp-content/uploads/2021/02/FLP3993.jpg?quality=70&strip=info" className={styles.polaroidImage} />
					<div className={styles.caption}><p>I Miss London</p></div>
				</a>
				<a href="https://quatrorodas.abril.com.br/wp-content/uploads/2021/02/FLP3993.jpg?quality=70&strip=info" className={styles.polaroid}>
					<img alt="img1" src="https://quatrorodas.abril.com.br/wp-content/uploads/2021/02/FLP3993.jpg?quality=70&strip=info" className={styles.polaroidImage} />
					<div className={styles.caption}><p>I Miss London</p></div>
				</a>
			</LightGallery>
		</div>
	);
}

export default Gallery