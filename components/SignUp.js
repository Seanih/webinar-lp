import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/SignUp.module.scss';

const SignUp = ({ submitForm }) => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit2 = data => {
		console.log(data);
		submitForm();
	};

	return (
		<div align='center'>
			<form noValidate onSubmit={handleSubmit(onSubmit2)}>
				<input
					type='email'
					name='email'
					placeholder='enter your email here'
					className={styles.email_field}
					ref={register({
						required: {
							value: true,
							message: 'You must provide an e-mail address',
						},
						pattern: {
							value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
							message: 'Please enter a valid e-mail address',
						},
					})}
				/>
				<input type='submit' name='submit' className={styles.button} />
				{errors.email && (
					<p style={{ paddingBottom: '1rem', fontWeight: 'bold' }}>
						<span>{errors.email.message}</span>
					</p>
				)}
			</form>
		</div>
	);
};

export default SignUp;
