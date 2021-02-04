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
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
							a optio deleniti, aliquid tenetur ullam! Harum vitae perspiciatis
							veniam alias!
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
							nesciunt aliquid quam ratione, nam eius possimus. Perferendis,
							amet distinctio! Possimus?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HostsArea;
