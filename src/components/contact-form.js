import React from 'react';
// import Img from 'gatsby-image';
// import { Link } from 'gatsby';

const labelStyles = {
	color: `var(--gray5)`,
	fontWeight: `500`
}

const inputStyles = {
	border: `2px solid var(--gray2)`,
	borderRadius: `4px`,
	display: `block`,
	marginBottom: `.5rem`,
	paddingLeft: `.5rem`,
	width: `100%`
}

const buttonStyles = {
	backgroundColor: `var(--accent1)`,
	borderRadius: `4px`,
	color: `var(--gray1)`,
	fontWeight: `500`
}

const ContactForm = () => (
	<form name="contact" method="post" action="#">
		<label htmlFor="name" style={labelStyles}>Name</label>
		<input type="text" name="name" id="name" placeholder="Luke Wroblewski" style={inputStyles}/>

		<label htmlFor="email" style={labelStyles}>Email</label>
		<input type="email" name="email" id="email" placeholder="name@email.com" style={inputStyles}/>

		<label htmlFor="subject" style={labelStyles}>Subject</label>
		<input type="text" name="subject" id="subject" placeholder="How are ya, now?" style={inputStyles}/>

		<label htmlFor="message" style={labelStyles}>Message</label>
		<textarea name="message" id="message" rows="5" placeholder="" style={inputStyles}/>

		<input type="reset" value="Clear" style={inputStyles}/>
		<button type="submit" style={buttonStyles}>Send</button>
	</form>
);

export default ContactForm;
