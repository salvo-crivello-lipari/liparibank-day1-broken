import { type TTheme, useTheme } from '../../../hooks/useTheme';
import styles from './ToggleThemeButton.module.css';

const THEMES: TTheme[] = ['light', 'dark'];

function ToggleThemeButton() {
	const { appTheme, applyTheme } = useTheme();

	return (
		<div role="group" aria-label="Theme" className={styles.toggleBox}>
			{THEMES.map((theme) => (
				<button className={styles.button} key={theme} onClick={() => applyTheme(theme)} disabled={theme === appTheme}>
					{theme}
				</button>
			))}
		</div>
	);
}

export default ToggleThemeButton;
