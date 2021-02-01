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
		margin: 10px 5px;
		padding: 10px;
		width: 50%;
        border: 3px solid ${props => props.theme.darkCerulean};

        @media only screen and (max-width: 900px) {
            width: 60%;
        }
        
        &::hover, &:focus {
            border: 3px solid ${props => props.theme.lightBlu};
        }
	`;

	const Button = styled.input`
		font-size: large;
		margin: 10px 5px;
        padding: 10px;
        border-radius: 50px;
	`;

	return (
		<div align='center'>
			<form noValidate onSubmit={handleSubmit(onSubmit2)}>
				<Input
					type='email'
					name='email'
					ref={register({
						required: { value: true, message: 'No e-mail was entered :(' },
						pattern: {
							value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
							message: 'Please enter a valid e-mail address',
						},
					})}
				/>
				<Button type='submit' name='submit' />
				{errors.email && <p>{errors.email.message}</p>}
			</form>
		</div>
	);
};

export default SignUp;
