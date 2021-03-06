import styles from '../styles/HostsArea.module.scss';

const HostsArea = () => {
	return (
		<div className={styles.hosts_area}>
			<h2 className={styles.h2}>Our Hosts</h2>
			<div className={styles.hosts_info}>
				<div className={styles.female_div}>
					<div className={styles.female_info}>
						<h3 className={styles.h3}>Janet Oliviera</h3>
						<a
							href='https://twitter.com'
							target='_blank'
							className={styles.anchor}
						>
							@j_olivia
						</a>
						<p className={styles.p}>
							Janet is the founder and CEO of M.A.S. Financial Services. Prior
							to that, she was the CFO of a Fortune 500 company for 4 years.
						</p>
					</div>
					<div className={styles.image_border}>
						<img
							src='/female-host.jpeg'
							alt='female host'
							className={styles.image}
						/>
					</div>
				</div>
				<div className={styles.male_div}>
					<div className={styles.image_border}>
						<img
							src='/male-host.jpg'
							alt='male host'
							className={styles.image}
						/>
					</div>
					<div className={styles.male_info}>
						<h3 className={styles.h3}>Thomas McCarthy</h3>
						<a
							href='https://twitter.com'
							target='_blank'
							className={styles.anchor}
						>
							@tom-mccarthy
						</a>
						<p className={styles.p}>
							Thomas is a real estate investor with a 25 million dollar
							portfolio. He also has 10 years of experience as a portfolio
							manager.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HostsArea;
