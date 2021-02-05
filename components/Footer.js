import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
	return (
		<div align='center' className={styles.footer}>
			<Link href='#sign-up'>
				<button className={styles.footer_btn}>
					Can't make it? Get the recording so you don't miss out!
				</button>
			</Link>
			<div className={styles.white_rectangle}></div>
			<div className={styles.footer_bottom}>
				<span className={styles.company}>M.A.S. Financial</span>
				<span className={styles.copyright}>&copy;2021</span>
				<span className={styles.tagline}>"Mind & Spirit"</span>
			</div>
		</div>
	);
};

export default Footer;
