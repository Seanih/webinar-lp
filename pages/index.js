import Head from 'next/head';
import ActionArea from '../components/ActionArea';
import { ThemeProvider } from 'styled-components';
import * as theme from '../public/theme';

import styles from '../styles/Home.module.scss';
import HostsArea from '../components/HostsArea';

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
					</main>
				
					<footer className={styles.footer}></footer>
				</div>
			</div>
		</ThemeProvider>
	);
}
