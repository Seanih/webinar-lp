import React from 'react';

const thankYouStyles = {
	fontWeight: 'bold',
	padding: '1rem 0 2rem 0',
};

const ThankYou = () => {
	return (
		<div align='center'>
			<p style={thankYouStyles}>
				Your email was successfully submitted! Please check your inbox for your
				invitation.
			</p>
		</div>
	);
};

export default ThankYou;
