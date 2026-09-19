import styles from './WelcomeBanner.module.css';

const user = {
	name: 'Mario Rossi',
	role: 'Cliente',
};

const WelcomeBanner = () => {
	return (
		<div className={styles.banner}>
			<h2 className={styles.title}>Benvenuto, {user.name}!</h2>
			<p className={styles.subtitle}>Ruolo: {user.role}</p>
		</div>
	);
};

export default WelcomeBanner;
