import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, Button, Box, Card, CardContent} from '@material-ui/core'; 
import Header from '../header/Header'
import about from '/Users/shelabhtyagi/Desktop/car wash/car-wash/src/components/images/about.webp'


const useStyle = makeStyles((theme) => ({
	title: {
		fontSize: '490%',
		fontWeight: 'bold',
		width: '35%',
		lineHeight: '110%',
		marginLeft: '7%',
		marginTop: '2%',
	},
	body: {
		fontSize: '150%',
		width: '60%',
		marginLeft: '35%',
		marginTop: '4%'
	},
	subtitle: {
		fontSize: '400%',
		marginLeft: '7%',
		marginTop: '7%'
	},
	body1: {
		color: '#939393',
		fontSize: '130%',
		width: '18%',
		marginLeft: '7%',
		marginTop: '1.5%'
	},
	body2: {
		fontSize: '100%',
		width: '17%',
		marginLeft: '7%',
		marginTop: '2%'
	},
	body3: {
		fontSize: '100%',
		width: '17%',
		marginLeft: '7%',
		marginTop: '2%'
	},
	join:{
		background: '#FF7E36',
		borderRadius: '10px',
		color: 'white',
		width: '126px',
		height: '42px',
		marginLeft: '7%',
		marginTop: '1.5%',
		fontSize: '19px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		marginLeft: '30%',
		marginTop: '-40%',
		width: '60%',
	},
	box: {
		background: '#3D99FC',
		width: '100%',
		height: '855px',
		boxShadow: 'inset 4px 4px 20px rgba(0, 0, 0, 0.25)',
		position: 'absolute'
	
	},
	title1: {
		textAlign: 'center',
		fontSize: '400%',
		width: '30%',
		fontWeight: 'bold',
		marginLeft: '35%',
		marginTop: '5%',
		position: 'absolute'
	},
	v1: {
		marginLeft: '35.8%',
		marginTop: '5.3%'
	},
	v2: {
		marginLeft: '56%',
		marginTop: '0%'
	},
	cards: {
		display: 'flex',
		flexDirection: 'row',
	},
	card1: {
		boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
		width: '20%',
		height: '344px',
		marginLeft: '7%',
		marginTop: '5%'
	},
	name1:{
		fontSize: '39px',
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: '15%',
	},
	designation1: {
		fontSize: '22px',
		textAlign: 'center',
	},
	card2: {
		boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
		width: '20%',
		height: '344px',
		marginLeft: '12.5%',
		marginTop: '5%'
	},
	name2:{
		fontSize: '39px',
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: '15%',
	},
	designation2: {
		fontSize: '22px',
		textAlign: 'center',
	},
	card3: {
		boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
		width: '20%',
		height: '344px',
		marginLeft: '12.5%',
		marginTop: '5%'
	},
	name3:{
		fontSize: '39px',
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: '15%',
	},
	designation3: {
		fontSize: '22px',
		textAlign: 'center',
	},
}));


function About() {
	const classes = useStyle();
	return (
		<div>	
			<Header />
			<Typography className={classes.title}>
				LET'S GET TO KNOW EACH OTHER
			</Typography>
			<Typography className={classes.body}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</Typography>
			<Typography className={classes.subtitle}>
				Our Vision
			</Typography>
			<Typography className={classes.body1}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
			</Typography>
			<Typography className={classes.body2}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
			</Typography>
			<Typography className={classes.body3}>
				fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</Typography>
			<Typography className={classes.join}>
				Join Us
			</Typography>
			<img className={classes.img} src={
					about}
			/>
			<div className={classes.box}>
				<Typography className={classes.title1} style={{ zIndex: '1'}}>
					Meet the minds behind Car Wash
				</Typography>
				<div className={classes.v1}  style={{ zIndex: '0'}} position="absolute">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.3671 0.37593C9.31224 1.8217 2.81072 7.28739 0.770351 14.4457C-0.474622 18.8888 -0.267127 23.4729 1.80783 27.5986C2.08449 28.1628 2.39572 28.6918 2.70697 29.1855C3.4332 30.8075 4.43611 32.2886 5.61191 33.5933C8.8281 37.1548 12.8051 39.1648 17.5083 39.8348C24.8744 40.8574 32.9322 37.049 36.9437 30.737C38.742 27.916 39.8832 24.2487 39.987 20.8635C40.1599 15.8915 38.6037 11.6247 35.7333 7.67527C31.4797 1.71589 23.3874 -1.06984 16.3671 0.37593Z" fill="#DDE0B6"/>
					</svg>
				</div>
				<div className={classes.v2}  style={{ zIndex: '0'}} position="absolute">
					<svg width="203" height="177" viewBox="0 0 203 177" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M169.185 23.8319C146.285 8.80304 118.263 -1.68882 89.9391 0.225236C75.1747 1.21771 61.3896 5.75473 48.9604 13.2692C39.6949 18.8696 27.793 23.8319 20.1095 31.2755C13.6312 37.5848 9.63879 47.7931 6.62564 55.9456C-0.153936 73.9519 -2.03713 93.7305 2.40726 112.446C10.6181 146.899 38.791 173.27 76.4553 176.531C125.042 180.785 177.998 155.831 196.906 112.162C211.143 79.3397 199.844 43.8232 169.185 23.8319Z" fill="#EFCFD0"/>
					</svg>
				</div>
				<div className={classes.cards}>
					<Card className={classes.card1}>
						<CardContent>
							<Typography className={classes.name1}>
								Shelabh
							</Typography>
							<Typography className={classes.designation1}>
								Developer
							</Typography>
						</CardContent>

					</Card>
					<Card className={classes.card2}>
						<CardContent>
							<Typography className={classes.name2}>
								Shelabh
							</Typography>
							<Typography className={classes.designation2}>
								Developer
							</Typography>
						</CardContent>

					</Card>
					<Card className={classes.card3}>
						<CardContent>
							<Typography className={classes.name3}>
								Shelabh
							</Typography>
							<Typography className={classes.designation3}>
								Developer
							</Typography>
						</CardContent>

					</Card>
				</div>
				
			</div>
		
		</div>
	)
}

export default About;