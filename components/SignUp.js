import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const SignUp = ({ submitForm }) => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit2 = data => {
		console.log(data);
		submitForm();
	};

	const Input = styled.input`
		font-size: large;
		margin: 1rem 1rem 2rem 1rem;
		padding: 10px;
		width: 50%;
		max-width: 525px;
		border: 3px solid ${props => props.theme.darkCerulean};
		border-radius: 10px;

		@media only screen and (max-width: 900px) {
			width: 60%;
		}

		&:hover,
		&:focus {
			border: 3px solid ${props => props.theme.lightBlu};
			outline: none;
		}
	`;

	const Button = styled.input`
		font-size: large;
		margin: 10px 5px;
		padding: 10px;
		border-radius: 50px;
		&:hover,
		&:focus {
			border: 3px solid ${props => props.theme.lightBlu};
			outline: none;
			cursor: pointer;
		}
	`;

	return (
		<div align='center'>
			<form noValidate onSubmit={handleSubmit(onSubmit2)}>
				<Input
					type='email'
					name='email'
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
				<Button type='submit' name='submit' />
				{errors.email && (
					<p style={{ paddingBottom: '1rem', fontWeight: 'bold' }}>
						<span style={{ background: 'white' }}>{errors.email.message}</span>
					</p>
				)}
			</form>
		</div>
	);
};

export default SignUp;
