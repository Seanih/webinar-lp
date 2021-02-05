import styles from '../styles/ThankYou.module.scss';
import { withTheme } from 'styled-components';

const thankYouStyles = {
	fontWeight: 'bold',
	fontSize: '1.4rem',
	padding: '1rem 4rem 2rem',
	color: 'var(--myBlue)',
};

const ThankYou = () => {
	return (
		<div align='center' className={styles.fade_in}>
			<p style={thankYouStyles}>
				Your email was successfully submitted! Please check your inbox for your
				invitation.
			</p>
		</div>
	);
};

export default ThankYou;
