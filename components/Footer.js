import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<Link href='#sign-up'>
				<input
					type='button'
					value="Can't make it? Then get the webinar recording"
				/>
			</Link>
		</div>
	);
};

export default Footer;
