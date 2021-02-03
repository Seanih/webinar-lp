import styles from '../styles/ActionArea.module.scss';
import { useState } from 'react';
import SignUp from './SignUp';
import ThankYou from './ThankYou';

const ActionArea = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<div className={styles.action_area}>
			<h1 className={styles.h1}>
				Sign up for our next <span className={styles.span}>FREE</span> financial
				webinar
			</h1>
			<h2 className={styles.h2} style={{ marginTop: '0px' }}>
				April 23rd, 2021
				<br />
				<span className={styles.h2_span}>6PM - 8PM EST</span>
			</h2>
			<p className={styles.p}>
				<span className={styles.joinUs}>
					Financial Freedom isn't just a fantasy - join us as we discuss exactly
					what you need to do to get off the hamster wheel!
				</span>
			</p>
			<div className={styles.wheel}>
				<img src='/hamster-wheel.jpg' alt='hamster wheel' />
			</div>
			<>{isSubmitted ? <ThankYou /> : <SignUp submitForm={submitForm} />}</>

			<h2 className={styles.h2}>Topics we'll be discussing:</h2>
			<ul className={styles.ul}>
				<li>stocks & options - make money in a bear OR bull market</li>
				<li>growing your savings</li>
				<li>getting out of consumer debt</li>
				<li>building your credit score</li>
				<li>buying real estate</li>
				<li>& more!</li>
			</ul>
		</div>
	);
};

export default ActionArea;
