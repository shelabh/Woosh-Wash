import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, makeStyles, Button, Box, Card, CardContent, TextField, Checkbox} from '@material-ui/core'; 
import login from '../images/login.png'
import { Link, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";


const useStyle = makeStyles((theme) => ({
	title: {
		color: '#FF0000',
		fontSize: '500%',
		fontWeight: '600',
		marginTop: '5%',
		marginLeft: '15%',
		[theme.breakpoints.down('md')]: {
			fontSize: '400%'
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '400%',
			marginLeft: '8%'
		},
	},
	icons: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: '2%',
		marginLeft: '26%',
		[theme.breakpoints.down('sm')]: {
			marginLeft: '35%',
			marginTop: '5%'
		},
	},
	facebook: {
		marginLeft: '3%',
	},
	twitter: {
		marginLeft: '3%',
	},
	subtitle: {
		fontSize: '150%',
		marginTop: '3%',
		marginLeft: '22%',
		[theme.breakpoints.down('sm')]: {
			marginLeft: '18%',
			marginTop: '5%'
		},
	},
	box: {
		display: 'flex',
		flexDirection: 'column',
		
	},
	name: {
		marginTop: '5%',
		width: '34%',
		marginLeft: '15%',
		backgroundColor: 'rgba(196, 196, 196, 0.35)',
		border: '1px solid #C4C4C4',
		borderRadius: '10px',
		[theme.breakpoints.down('sm')]: {
			width: '77%',
			marginLeft: '10%',
			marginTop: '10%'
		},
	},
	email: {
		marginTop: '2%',
		width: '34%',
		marginLeft: '15%',
		backgroundColor: 'rgba(196, 196, 196, 0.35)',
		border: '1px solid #C4C4C4',
		borderRadius: '10px',
		[theme.breakpoints.down('sm')]: {
			width: '77%',
			marginLeft: '10%',
			marginTop: '5%'
		},
	},
	password: {
		marginTop: '2%',
		width: '34%',
		marginLeft: '15%',
		backgroundColor: 'rgba(196, 196, 196, 0.35)',
		border: '1px solid #C4C4C4',
		borderRadius: '10px',
		[theme.breakpoints.down('sm')]: {
			width: '77%',
			marginLeft: '10%',
			marginTop: '5%'
		},
	},
	img: {
		width: '45%',
		marginTop: '-35%',
		marginLeft: '52%',
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		},
	},
	box1: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: '-3%',
		marginLeft: '14.5%',
		[theme.breakpoints.down('sm')]: {
			marginLeft: '8%',
			marginTop: '5%'
		},
		
	},
	body: {
		fontSize: '130%',
		[theme.breakpoints.down('sm')]: {
			fontSize: '130%'
		},
	},
	red: {
		color: '#FF6363'
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: '3%',
		marginLeft: '15%',
		[theme.breakpoints.down('sm')]: {
			marginTop: '5%',
			marginLeft: '10%'
		},
	},
	signup: {
		background: '#FE5959',
		color: 'white',
		width: '18%',
		boxShadow: 'none',
		'&:hover': {
			background: '#FE5959',
		},
		[theme.breakpoints.down('sm')]: {
			width: '40%',
		},
	},
	signin: {
		border: '1px solid #FE5959',
		color: '#FE5959',
		width: '18%',
		marginLeft: '4%',
		[theme.breakpoints.down('sm')]: {
			width: '40%',
		},
	}




	
}));


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Signup = ({ setAuth }) => {

	const classes = useStyle();
	
	const [error, setError] = useState("");
	const { name, email, password } = inputs;
	    
	const onChange = e => setInputs({ ...inputs, [e.target.name]: e.target.value, [e.target.email]: e.target.value, [e.target.password]: e.target.value });
	
	const onSubmitForm = async e => {
		e.preventDefault();
		try {
		  const body = { name, email, password };
		  const response = await fetch(
		    "http://localhost:3001/user/signup",
		    {
		      method: "POST",
		      headers: {
			"Content-type": "application/json"
		      },
		      body: JSON.stringify(body)
		    }
		  );
		  const parseRes = await response.json();
	    
		  if (parseRes.jwtToken) {
		    localStorage.setItem("token", parseRes.jwtToken);
		    setAuth(true);
		    toast.success("Register Successfully");
		  } else {
		    setAuth(false);
		    toast.error(parseRes);
		  }
		} catch (err) {
		  console.error(err.message);
		}
	};

	
	return (
		<div>
			<Typography className={classes.title}>
				Create Account
			</Typography>
			<div className={classes.icons}>
				<div className={classes.google}>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M36.3425 16.7358H35V16.6666H20V23.3333H29.4191C28.045 27.2141 24.3525 30 20 30C14.4775 30 9.99998 25.5225 9.99998 20C9.99998 14.4775 14.4775 9.99998 20 9.99998C22.5491 9.99998 24.8683 10.9616 26.6341 12.5325L31.3483 7.81831C28.3716 5.04415 24.39 3.33331 20 3.33331C10.7958 3.33331 3.33331 10.7958 3.33331 20C3.33331 29.2041 10.7958 36.6666 20 36.6666C29.2041 36.6666 36.6666 29.2041 36.6666 20C36.6666 18.8825 36.5516 17.7916 36.3425 16.7358Z" fill="#FFC107"/>
					<path d="M5.255 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99998 20 9.99998C22.5492 9.99998 24.8683 10.9616 26.6342 12.5325L31.3483 7.81831C28.3717 5.04415 24.39 3.33331 20 3.33331C13.5983 3.33331 8.04667 6.94748 5.255 12.2425Z" fill="#FF3D00"/>
					<path d="M20 36.6667C24.305 36.6667 28.2166 35.0192 31.1741 32.34L26.0158 27.975C24.2863 29.2903 22.1729 30.0017 20 30C15.665 30 11.9841 27.2359 10.5975 23.3784L5.16248 27.5659C7.92081 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
					<path d="M36.3425 16.7359H35V16.6667H20V23.3334H29.4192C28.7618 25.1804 27.5778 26.7943 26.0133 27.9759L26.0158 27.9742L31.1742 32.3392C30.8092 32.6709 36.6667 28.3334 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7359Z" fill="#1976D2"/>
					</svg>
				</div>
				<div className={classes.facebook}>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_151_14)">
					<path d="M37.7923 40.0002C39.0114 40.0002 40 39.0117 40 37.7925V2.20766C40 0.988281 39.0114 0 37.7923 0H2.20766C0.988125 0 0 0.988281 0 2.20766V37.7925C0 39.0117 0.988125 40.0002 2.20766 40.0002H37.7923Z" fill="#395185"/>
					<path d="M27.5992 40.0002V24.51H32.7988L33.5772 18.4733H27.5992V14.6189C27.5992 12.8711 28.0847 11.68 30.5911 11.68L33.7878 11.6786V6.27941C33.2347 6.20582 31.3372 6.04144 29.1297 6.04144C24.5207 6.04144 21.3653 8.85472 21.3653 14.0213V18.4733H16.1525V24.51H21.3653V40.0002H27.5992Z" fill="white"/>
					</g>
					<defs>
					<clipPath id="clip0_151_14">
					<rect width="40" height="40" fill="white"/>
					</clipPath>
					</defs>
					</svg>
				</div>
				<div className={classes.twitter}>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M40 4.73511C38.5281 5.5382 36.9466 6.08096 35.2866 6.32514C36.9811 5.07542 38.2822 3.09643 38.8948 0.738491C37.284 1.91474 35.5216 2.74348 33.6838 3.18891C32.1867 1.22646 30.0541 0 27.6936 0C23.1614 0 19.4869 4.52131 19.4869 10.0978C19.4869 10.8893 19.5595 11.6599 19.6994 12.3992C12.8791 11.9779 6.83219 7.95786 2.78453 1.84844C2.07828 3.33984 1.67359 5.07465 1.67359 6.92501C1.67359 10.4285 3.1225 13.5191 5.32438 15.3301C4.02117 15.2799 2.74664 14.8467 1.60719 14.0669C1.60672 14.1092 1.60672 14.1515 1.60672 14.194C1.60672 19.0866 4.43547 23.168 8.18953 24.0956C6.98107 24.5 5.71348 24.5592 4.48359 24.2687C5.52781 28.2805 8.55859 31.1998 12.1495 31.2815C9.34094 33.9898 5.80234 35.6042 1.95766 35.6042C1.29516 35.6042 0.642031 35.5564 0 35.4631C3.63172 38.3283 7.94531 40 12.5797 40C27.6745 40 35.9287 24.6128 35.9287 11.2689C35.9287 10.8309 35.9209 10.3954 35.905 9.96241C37.5116 8.53328 38.8983 6.76315 40 4.73511Z" fill="#55ACEE"/>
					</svg>
				</div>
			</div>
			<Typography className={classes.subtitle}>
				or use your email for registration
			</Typography>
			<Box className={classes.box} onSubmit={onSubmitForm}>
				<TextField  label="Name" variant="outlined"  className={classes.name}  InputProps={{classes: {input: classes.input}}} onChange={e => onChange(e)} value={name}/>
				<TextField  label="Email" variant="outlined"  className={classes.email}  InputProps={{classes: {input: classes.input}}} onChange={e => onChange(e)} value={email}/>
				<TextField  label="Password" variant="outlined" className={classes.password}  InputProps={{classes: {input: classes.input}}} onChange={e => onChange(e)} value={password}/>
			</Box>
			<img className={classes.img} src={login} />
			<div className={classes.box1}>
				<Checkbox {...label} />
				<Typography className={classes.body}>
					I agree to the <span className={classes.red}>Terms</span> and <span className={classes.red}>Privacy Policy.</span>
				</Typography>
			</div>
			<div className={classes.buttons}>
				<Button variant="contained" className={classes.signup} component={Link} to={`/`} style={{ textDecoration: 'none' }} color='inherit'>
					Sign Up
				</Button>
				<Button variant="outlined" className={classes.signin} component={Link} to={`/signin`} style={{ textDecoration: 'none' }} color='inherit'>
					Sign In
				</Button>
			</div>
		


		</div>
	)
}

export default Signup;
