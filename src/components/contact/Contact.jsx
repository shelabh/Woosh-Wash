import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, Button, Box, Card, CardContent, TextField,} from '@material-ui/core'; 
import Header from '../header/Header'
import contact from '../images/contact.png'
import contact2 from '../images/contact2.png'



const useStyle = makeStyles((theme) => ({
	page: {
		background: '#0C0A44',
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: '450%',
		marginTop: '5%',
		marginLeft: '7%',
	},
	red: {
		color: '#FE5959',
	},
	body: {
		width:'25%',
		color: 'white',
		fontSize: '120%',
		marginTop: '5%',
		marginLeft: '7%',
	},
	img: {
		marginTop: '-35%',
		marginLeft: '45%',
		width: '50%',
	},
	phone: {
		color: 'white',
		fontSize: '120%',
		fontWeight: 'bold',
		marginLeft: '11%',
		marginTop: '-3%',
	
	},
	v1:{
		marginLeft: '-4%',
		marginTop: '-1.6%'
	},
	mail: {
		color: 'white',
		fontSize: '120%',
		fontWeight: 'bold',
		marginLeft: '11%',
		marginTop: '1%'
	
	},
	v2:{
		marginLeft: '-4%',
		marginTop: '-1.6%'
	},
	img1: {
		marginLeft: '7%',
		width: '30%',
		marginTop: '5%'
	},
	name: {
		backgroundColor: 'rgba(196, 196, 196, 0.35)',
		border: '1px solid #C4C4C4',
		marginLeft: '60%',
		marginTop: '-30%',
		borderRadius: '10px',
		width: '488px',
		fontSize: '18px',
	},
	input: {
		color: 'white',
	},
	email: {
		backgroundColor: 'rgba(196, 196, 196, 0.35)',
		border: '1px solid #C4C4C4',
		marginLeft: '60%',
		marginTop: '-25%',
		borderRadius: '10px',
		width: '488px',
		fontSize: '18px',
	},
	message: {
		backgroundColor: 'rgba(196, 196, 196, 0.35)',
		border: '1px solid #C4C4C4',
		marginLeft: '60%',
		marginTop: '-20%',
		borderRadius: '10px',
		width: '488px',
		fontSize: '18px',
	},
	send: {
		borderRad: '10px',
		height: '33px',
		width: '8%',
		fontSize: '120%',
		marginTop: '-17%',
		marginLeft: '79.5%',
		color: 'white',
		backgroundColor: '#55ACEE',
		'&:hover': {
		  background: '#55ACEE',
		 },
	}

}));




function Contact() {
	const classes = useStyle();
	return (
		<Box className={classes.page}>
			<Header />
			<Typography className={classes.title}>
				Have a <span className={classes.red}>Question?</span><br/>Look here
			</Typography>
			<Typography className={classes.body}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
			</Typography>
			<img className={classes.img} src={
					contact}
			/>
			<Typography className={classes.phone}>
				+9999999999
				<div className={classes.v1}>
					<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.1928 6.80001L7.96404 1.91876C7.47654 1.35626 6.58279 1.35876 6.01654 1.92626L2.53904 5.41001C1.50404 6.44626 1.20779 7.98501 1.80654 9.21876C5.38356 16.625 11.3566 22.6064 18.7578 26.1938C19.9903 26.7925 21.5278 26.4963 22.5628 25.46L26.0728 21.9438C26.6415 21.375 26.6428 20.4763 26.0753 19.9888L21.1753 15.7825C20.6628 15.3425 19.8665 15.4 19.3528 15.915L17.6478 17.6225C17.5605 17.714 17.4456 17.7743 17.3207 17.7942C17.1959 17.814 17.0679 17.7924 16.9565 17.7325C14.1696 16.1276 11.8578 13.8128 10.2565 11.0238C10.1966 10.9122 10.1749 10.784 10.1947 10.659C10.2146 10.5339 10.275 10.4187 10.3665 10.3313L12.0665 8.63001C12.5815 8.11251 12.6378 7.31251 12.1928 6.79876V6.80001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</Typography>
			<Typography className={classes.mail}>
				carwash@gmail.com
				<div className={classes.v2}>
					<svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M28.625 0.5625H2.375C1.79484 0.5625 1.23844 0.792968 0.828204 1.2032C0.417968 1.61344 0.1875 2.16984 0.1875 2.75V20.25C0.1875 20.8302 0.417968 21.3866 0.828204 21.7968C1.23844 22.207 1.79484 22.4375 2.375 22.4375H28.625C29.2052 22.4375 29.7616 22.207 30.1718 21.7968C30.582 21.3866 30.8125 20.8302 30.8125 20.25V2.75C30.8125 2.16984 30.582 1.61344 30.1718 1.2032C29.7616 0.792968 29.2052 0.5625 28.625 0.5625ZM26.2188 2.75L15.5 10.1656L4.78125 2.75H26.2188ZM2.375 20.25V3.74531L14.8766 12.3969C15.0597 12.5239 15.2772 12.592 15.5 12.592C15.7228 12.592 15.9403 12.5239 16.1234 12.3969L28.625 3.74531V20.25H2.375Z" fill="white"/>
					</svg>
				</div>
			</Typography>
			<img className={classes.img1} src={
					contact2}
			/>
			<Box className={classes.box}>
				<TextField  label="Name" variant="outlined"  className={classes.name}  InputProps={{classes: {input: classes.input}}}/>
				<TextField  label="Email" variant="outlined"  className={classes.email}  InputProps={{classes: {input: classes.input}}}/>
				<TextField  label="Message" variant="outlined"  multiline rows={6} className={classes.message}  InputProps={{classes: {input: classes.input}}}/>
				<Button className={classes.send}>Send</Button>
			</Box>


		</Box>
	)
}

export default Contact;
