import React, { useState, KeyboardEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import emoji from 'public/assets/monocle.gif';
import burro from 'public/assets/burro.jpg';
import styles from './styles.module.scss'


export function HomePage() {
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState('');
	const [isInputEmpty, setIsInputEmpty] = useState(false);

	const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleSubmit(event);
		}
	};

	const handleSubmit = (event: FormEvent) => {
		if (!inputValue) {
			setIsInputEmpty(true);
		} else {
			inputValue.toLowerCase() === 'tamires balçante mendes de aguiar silveira'
				? navigate('/loading')
				: navigate('/intruder');
		}
	};

	return (
		<main className={styles.background}>
			<div className={styles.wrapperContent}>
				<h2 className={`${styles.title}`}>
					Qual o seu nome completo amigo?
				</h2>
				<form onSubmit={handleSubmit} className={styles.form}>

					<input
						className={styles.inputName}
						onChange={(event) => setInputValue(event.target.value)}
						onKeyDown={handleKeyPress}

					/>
					{isInputEmpty && (
						<>
							<h2 className={`${styles.burro}`}>
								sem digitar o nome fica dificil
							</h2>
							<h2 className={`${styles.burro}`}>
								BASTA LER A PRIMEIRA LINHA NÉ AMIGÃO
							</h2>
						</>
					)}
					<div className={styles.emojiWrapper}>
						<img
							src={isInputEmpty ? burro : emoji}
							alt={isInputEmpty ? "Picapau e burro" : "monocle emoji"
							} className={isInputEmpty ? styles.burroImage : styles.emojiImage}
						/>
					</div>
					<button type='submit' className={styles.submitButton}>
						acessar conteúdo
					</button>
				</form>
			</div>
		</main>
	);
}
