import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import * as theme from '../public/theme';
import styles from '../styles/Home.module.scss';

import ActionArea from '../components/ActionArea';
import HostsArea from '../components/HostsArea';
import Testimonial from '../components/TestimonialArea';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<div className={styles.lp_body}>
				<div className={styles.container}>
					<Head>
						<title>Financial Freedom Webinar</title>
						<link rel='icon' href='/favicon.ico' />
						<meta
							name='description'
							content='Find out how to escape the financial rat race'
						/>
					</Head>

					<main className={styles.main}>
						<ActionArea />
						<HostsArea />
						<Testimonial />
					</main>

					<footer>
						<Footer />
					</footer>
				</div>
			</div>
		</ThemeProvider>
	);
}
