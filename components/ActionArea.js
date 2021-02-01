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
				Sign up to receive a link to our FREE webinar
			</h1>
			<p className={styles.p}>
				Financial Freedom isn't just a fantasy - join us as we discuss exactly
				what you need to do to escape the rat race
			</p>
			{isSubmitted ? <ThankYou /> : <SignUp submitForm={submitForm} />}
		</div>
	);
};

export default ActionArea;
