import React from 'react'
import Header from'../header/Header'
import { Typography, makeStyles, Box, Card, CardMedia, CardContent, Button} from '@material-ui/core'; 
import homepage from '../images/homepage.webp'
import card1 from '../images/card1.webp'
import card2 from '../images/card2.png'
import card3 from '../images/card3.webp'



const useStyle = makeStyles((theme) => ({
	component: {
	    backgroundColor: 'rgba(61, 153, 252, 1)',
	    width: '100%',
	    height: '1043px'
	  },
       
	subTitle: {
	    padding: '200px 0 0 100px',
	    color: 'white',
	    fontSize: '34px',
	   
	   
	},
	img: {
		width: '926px',
		height: '700px',
		marginTop: '-260px',
		marginLeft: '800px'
	},
	title:{
		marginTop: '-430px',
		marginLeft: '98px',
		fontSize: '62px',
		color: 'white',
	},
	sub:{
		color: 'yellow',
		fontSize: '34px',
		marginTop: '200px',
		marginLeft: '100px'
	},
	line1: {
		width: '575px',
		height: '14px',
		background: 'rgba(101, 246, 255, 0.65)',
		opacity: '65%',
		marginTop: '-33px',
		marginLeft: '100px'

	},
	line2: {
		width: '260px',
		height: '14px',
		background: 'rgba(255, 164, 197, 0.65)',
		opacity: '65%',
		marginTop: '-20px',
		marginLeft: '100px'
	},
	imgbox: {
		
		marginTop: '20px',
		marginLeft: '100px',
	},
	paytm: {
		marginLeft: '20px',
		
	},
	order: {
		fontSize: '18px',
		marginTop: '150px',
		textAlign: 'center',
	},
	orderimg: {
		textAlign: 'center',
		marginTop: '10px'
	},
	box: {
		marginTop: '0px'
	},
	fresh: {
		textAlign: 'center',
		fontSize: '48px',
		fontWeight: 'bold'
	},
	green: {
		color: 'rgba(46, 206, 43, 1)'
	},
	v1: {
		marginLeft: '1702px',
		marginTop: '50px',
	},
	body: {
		textAlign: 'center',
		fontSize: '18px',
		marginTop: '30px',
	},
	card1: {
		width: '16%',
		height: '35%',
		marginTop: '5%',
		marginLeft: '10%',
		borderRadius: '10px',
		boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
		position: 'absolute'
	},
	cardimg1:{
		height: '157px',
		filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'

	},
	body1: {
		textAlign: 'center',
		marginTop: '15px',
		fontSize: '18px',
	},
	card2: {
		width: '16%',
		height: '35%',
		marginTop: '5%',
		marginLeft: '43.5%',
		borderRadius: '10px',
		boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
		position: 'absolute'
	
	},
	cardimg2:{
		height: '157px',
		filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'

	},
	body2: {
		textAlign: 'center',
		marginTop: '15px',
		fontSize: '18px',
	},
	card3: {
		width: '16%',
		height: '35%',
		marginTop: '5%',
		marginLeft: '75%',
		borderRadius: '10px',
		boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
		position: 'absolute'
		
	},
	cardimg3:{
		height: '157px',
		filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'

	},
	body3: {
		textAlign: 'center',
		marginTop: '15px',
		fontSize: '18px',
	},
	v2:{
		marginTop: '-1.5%',
		marginLeft: '24%'	
	},
	v3:{
		marginTop: '-15%',
		marginLeft: '5%'
	},
	v4:{
		marginTop: '20%'
	},
	box1: {
		marginTop: '-22%'
	},
	price: {
		textAlign: 'center',
		fontSize: '48px',
		fontWeight: 'bold',
	},
	body4: {
		textAlign: 'center',
		fontSize: '18px',
		marginTop: '30px',
	},
	card4: {
		width: '25%',
		height: '55%',
		marginLeft: '15%',
		marginTop: '10%',
		borderRadius: '10px',
		boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
	},
	plan1:{
		textAlign: 'center',
		fontSize: '20px',
		fontWeight: 'bold',
		marginTop: '10%',
	},
	body5: {
		textAlign: 'center',
		fontSize: '18px',
		color: '#838383',
		marginTop: '5%',
		marginLeft: '25%',
		width: '50%'
	},
	rupee:{
		marginRight: '35%',
		marginBottom: '-18%',
	},
	money: {
		textAlign: 'center',
		fontSize: '70px',
		fontWeight: 'bold',
		marginTop: '0%',
	},
	time: {
		textAlign: 'center',
		fontSize: '16px',
		marginTop: '',
	},
	buy:{	
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '25px',
		background: '#56FCA2',
		width: '28%',
		height: '33px',
		color: 'black',
		marginTop: '10%',
		marginLeft: '35%',
		fontSize: '16px',
		fontWeight: 'bold',
	},
	card5: {
		width: '25%',
		height: '55%',
		marginLeft: '40%',
		height: '650px',
		marginTop: '-33%',
		background: '#74B7FF',
		borderRadius: '10px',
		boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
		position: 'absolute'
	},
	most:{
		fontSize: '16px',
		color: 'white',
		textAlign: 'center',
		marginTop: '10%',
	},
	plan2:{
		textAlign: 'center',
		fontSize: '50px',
		fontWeight: 'bold',
		marginTop: '5%',
		color: 'white'
	},
	body6: {
		textAlign: 'center',
		fontSize: '18px',
		color: 'white',
		marginTop: '5%',
		marginLeft: '25%',
		width: '50%'
	},
	rupee1:{
		marginRight: '35%',
		marginBottom: '-18%',
	},
	money1: {
		textAlign: 'center',
		fontSize: '70px',
		fontWeight: 'bold',
		color: 'white',
		marginTop: '0%',
	},
	time1: {
		textAlign: 'center',
		fontSize: '16px',
		marginTop: '',
		color: 'white',
	},
	buy1:{	
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '25px',
		background: '#FCD756',
		width: '30%',
		height: '38px',
		color: 'black',
		marginTop: '12%',
		marginLeft: '35%',
		fontSize: '18px',
		fontWeight: 'bold',
	},
	card6: {
		width: '25%',
		height: '50.2%',
		marginLeft: '65%',
		marginTop: '-28.7%',
		borderRadius: '10px',
		boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
		position: 'absolute'
	},
	plan3:{
		textAlign: 'center',
		fontSize: '20px',
		fontWeight: 'bold',
		marginTop: '10%',
	},
	body7: {
		textAlign: 'center',
		fontSize: '18px',
		color: '#838383',
		marginTop: '5%',
		marginLeft: '25%',
		width: '50%'
	},
	rupee2:{
		marginRight: '35%',
		marginBottom: '-18%',
	},
	money2: {
		textAlign: 'center',
		fontSize: '70px',
		fontWeight: 'bold',
		marginTop: '0%',
	},
	time2: {
		textAlign: 'center',
		fontSize: '16px',
		marginTop: '',
	},
	buy2:{	
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '25px',
		background: '#56FCA2',
		width: '28%',
		height: '33px',
		color: 'black',
		marginTop: '10%',
		marginLeft: '35%',
		fontSize: '16px',
		fontWeight: 'bold',
	},
	v5:{
		marginTop: '-35%',
		marginLeft: '45%',
	}
	 
      }));




function Home() {
	const classes = useStyle();
	return (
		<div>
			
			<Box className={classes.component}>
				<Header />
				<Typography className={classes.subTitle}>
					The best<br/>Carwash in your area!
				</Typography>
				<img className={classes.img} src={
					homepage}
				 />
				<Typography className={classes.title}>
					CLEAN SHINY CAR
				</Typography>
				<div className={classes.line1}></div>
				<Typography className={classes.sub}>
					Subscribe Today
				</Typography>
				<div className={classes.line2}></div>
				<div className={classes.imgbox}>
					<svg width="40" height="29" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M32.6465 12.9994C32.6465 12.9994 33.174 15.2602 33.2928 15.7338H30.974L32.0853 13.0902C32.0715 13.1088 32.314 12.5367 32.4528 12.1846L32.6465 12.9994ZM40.0003 3.80534V25.1947C39.9999 25.9683 39.6486 26.7101 39.0235 27.257C38.3983 27.804 37.5506 28.1115 36.6665 28.1117H3.33277C2.44871 28.1115 1.60095 27.804 0.975822 27.257C0.350694 26.7101 -0.000645266 25.9683 -0.000976562 25.1947V3.80534C-0.000645266 3.03178 0.350694 2.28999 0.975822 1.743C1.60095 1.19602 2.44871 0.888596 3.33277 0.888306H36.6665C37.5506 0.888596 38.3983 1.19602 39.0235 1.743C39.6486 2.28999 39.9999 3.03178 40.0003 3.80534ZM10.5903 19.0697L14.979 9.6394H12.0278L9.29902 16.0805L9.00027 14.7746L8.02777 10.4356C7.86777 9.83409 7.37527 9.66346 6.76402 9.6394H2.27152L2.22277 9.82752C3.25162 10.0484 4.23851 10.3984 5.15277 10.8666L7.63902 19.0697H10.5903ZM17.1465 19.0817L18.8965 9.6394H16.1053L14.3628 19.0817H17.1465ZM26.8615 15.9952C26.8753 14.92 26.1253 14.0997 24.5215 13.4249C23.5428 12.9928 22.9453 12.7019 22.9453 12.2578C22.959 11.8564 23.4528 11.443 24.549 11.443C25.263 11.4254 25.9725 11.548 26.6253 11.8017L26.8753 11.9046L27.2578 9.86252C26.4598 9.59522 25.6122 9.45914 24.7578 9.46112C22.0003 9.46112 20.0628 10.7496 20.049 12.5838C20.0278 13.9389 21.4378 14.6925 22.494 15.1475C23.5703 15.6091 23.939 15.9131 23.939 16.32C23.9253 16.9522 23.064 17.2431 22.2653 17.2431C21.154 17.2431 20.5565 17.0911 19.6465 16.7389L19.279 16.5869L18.8903 18.7077C19.5428 18.9691 20.7515 19.1999 22.0015 19.2119C24.9315 19.2174 26.8415 17.9475 26.8628 15.9919L26.8615 15.9952ZM36.6665 19.0817L34.4165 9.6394H32.2565C31.5903 9.6394 31.0828 9.81002 30.7978 10.4236L26.6515 19.0828H29.5815C29.5815 19.0828 30.0603 17.9158 30.1653 17.6675H33.749C33.8328 18.0022 34.0828 19.0828 34.0828 19.0828L36.6665 19.0817Z" fill="black"/>
					</svg>
					<svg width="55" height="25" viewBox="0 0 55 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.paytm}>
					<path d="M36.3229 0.00325894C36.2921 0.00330188 36.2614 0.00766977 36.2313 0.0163009C34.6729 0.635839 34.9869 3.75962 32.1498 4.027H31.8748C31.8348 4.02598 31.7948 4.03145 31.7556 4.0433H31.7533C31.6326 4.08453 31.5252 4.1827 31.4486 4.32183C31.372 4.46096 31.3308 4.63287 31.3317 4.80957V8.36377C31.3317 8.8007 31.5746 9.1496 31.8748 9.1496H33.3529V24.2239C33.3529 24.6544 33.5913 25 33.8869 25H36.3115C36.4545 24.9974 36.591 24.9143 36.6911 24.7689C36.7912 24.6234 36.8466 24.4275 36.8454 24.2239V9.1496H38.2204C38.5183 9.1496 38.7613 8.8007 38.7613 8.36377V4.80957C38.7619 4.604 38.7054 4.40642 38.6041 4.25984C38.5028 4.11327 38.3649 4.02958 38.2204 4.027H36.8179V0.717358C36.8185 0.624008 36.8062 0.531405 36.7817 0.444832C36.7571 0.35826 36.7208 0.279415 36.6748 0.212801C36.6289 0.146187 36.5741 0.0931089 36.5138 0.056596C36.4534 0.0200832 36.3885 0.000852491 36.3229 0V0.00325894ZM46.0052 3.81831C45.0931 3.81831 44.259 4.30742 43.6173 5.1063V4.70197C43.6092 4.50639 43.5494 4.32241 43.45 4.18693C43.3505 4.05146 43.2187 3.97452 43.081 3.97156H40.629C40.4839 3.975 40.3456 4.05986 40.2444 4.20766C40.1431 4.35546 40.0869 4.55422 40.0881 4.76066V24.0642C40.0869 24.2706 40.1431 24.4694 40.2444 24.6172C40.3456 24.765 40.4839 24.8498 40.629 24.8533H43.081C43.356 24.8533 43.5783 24.5565 43.615 24.1718V10.3137C43.6056 9.97753 43.6895 9.6496 43.8486 9.40069C44.0077 9.15179 44.2291 9.00187 44.4652 8.9833H44.9144C45.1039 9.00432 45.2845 9.10665 45.4323 9.27677C45.5389 9.40368 45.6241 9.56304 45.6816 9.74308C45.7391 9.92311 45.7675 10.1192 45.7646 10.3169V23.6011L45.7738 24.1066C45.7731 24.313 45.8299 24.5114 45.9316 24.6586C46.0333 24.8058 46.1718 24.8898 46.3169 24.8924H48.769C48.9091 24.8892 49.0431 24.8096 49.1433 24.6701C49.2435 24.5306 49.3022 24.3417 49.3075 24.1424L49.3052 10.2974C49.3052 9.84088 49.4473 9.43002 49.704 9.18873C49.8383 9.06242 49.9927 8.98617 50.1531 8.967H50.6069C51.134 9.03222 51.4548 9.61915 51.4548 10.2974C51.4663 14.8494 51.464 19.4274 51.464 24.0707C51.4633 24.2771 51.5201 24.4755 51.6218 24.6227C51.7235 24.7699 51.862 24.8539 52.0071 24.8565H54.4592C54.7571 24.8565 55 24.5044 55 24.0707V9.25721C55 8.24638 54.9221 7.81597 54.8167 7.37577C54.5724 6.34385 54.1075 5.44642 53.487 4.80911C52.8665 4.17181 52.1215 3.82651 51.3563 3.82157H51.3219C50.8269 3.82213 50.3372 3.9671 49.8831 4.24752C49.4291 4.52794 49.0202 4.93785 48.6819 5.45194C48.015 4.44763 47.0777 3.82157 46.0396 3.82157L46.0052 3.81831ZM0.531686 4.02374C0.461264 4.02459 0.39165 4.04517 0.326818 4.08431C0.261986 4.12344 0.203207 4.18036 0.153837 4.25182C0.104467 4.32328 0.0654722 4.40788 0.0390801 4.50078C0.012688 4.59368 -0.000584715 4.69307 1.97552e-05 4.79327V24.1098C1.97552e-05 24.5402 0.22002 24.8859 0.49502 24.8957H2.99294C3.29085 24.8957 3.53606 24.5468 3.53606 24.1131L3.54523 18.7068H5.8896C7.85356 18.7068 9.21939 16.7341 9.21939 13.8777V8.86266C9.21939 6.003 7.85356 4.02374 5.8896 4.02374H0.531686ZM21.23 4.02374C21.1581 4.02459 21.087 4.04559 21.0208 4.08555C20.9545 4.1255 20.8945 4.18363 20.8441 4.2566C20.7936 4.32957 20.7538 4.41596 20.7268 4.51084C20.6999 4.60572 20.6863 4.70723 20.6869 4.80957V12.8636C20.6869 15.9287 22.1925 18.1068 24.3054 18.1068H25.8523C25.8523 18.1068 25.889 18.1068 25.9371 18.1199C26.0782 18.1447 26.2081 18.2424 26.3019 18.3945C26.3957 18.5466 26.4469 18.7425 26.4458 18.9448C26.4458 19.3687 26.2258 19.7111 25.944 19.7633L25.9027 19.7763L25.2083 19.7959H22.3186C22.1741 19.7985 22.0362 19.8821 21.9349 20.0287C21.8336 20.1753 21.7771 20.3729 21.7777 20.5785V24.1326C21.7765 24.3391 21.8326 24.5378 21.9339 24.6856C22.0352 24.8334 22.1735 24.9183 22.3186 24.9217H26.329C28.4373 24.9217 29.9429 22.7403 29.9429 19.6785V4.80957C29.9435 4.604 29.887 4.40642 29.7857 4.25984C29.6845 4.11327 29.5466 4.02958 29.4021 4.027H26.95C26.8055 4.02958 26.6676 4.11327 26.5664 4.25984C26.4651 4.40642 26.4086 4.604 26.4092 4.80957C26.3977 7.37576 26.4092 9.78218 26.4092 12.1625C26.4074 12.3779 26.3465 12.5838 26.2394 12.7361C26.1323 12.8885 25.9877 12.9752 25.8363 12.9777H24.8073C24.6539 12.9751 24.5075 12.8862 24.4001 12.7303C24.2928 12.5745 24.2332 12.3644 24.2344 12.1462C24.2458 9.68762 24.2229 7.25512 24.2229 4.80957C24.2235 4.604 24.1671 4.40642 24.0658 4.25984C23.9645 4.11327 23.8266 4.02958 23.6821 4.027L21.23 4.02374ZM12.0542 4.0433C11.9844 4.0407 11.9149 4.0577 11.8496 4.09333C11.7844 4.12896 11.7248 4.18253 11.6742 4.25096C11.6235 4.3194 11.5828 4.40136 11.5545 4.49218C11.5261 4.58299 11.5105 4.68087 11.5088 4.78023V8.11595C11.5088 8.54637 11.7677 8.89853 12.0863 8.89853H15.3244C15.5811 8.95396 15.7827 9.2246 15.8125 9.64849V10.105C15.7827 10.5093 15.5833 10.8028 15.3381 10.8354H13.734C11.6027 10.8354 10.0811 12.8897 10.0811 15.7754V19.9133C10.0811 22.7827 11.3873 24.8239 13.5071 24.8239H17.9529C18.7504 24.8239 19.3967 23.9435 19.3967 22.8675V9.38111C19.3967 6.10734 18.2325 4.0433 15.455 4.0433H12.0542ZM3.54523 9.16916H5.09898C5.41752 9.16916 5.67189 9.54415 5.67189 10.0039V12.7299C5.6728 12.8382 5.6587 12.9458 5.6304 13.0463C5.6021 13.1469 5.56015 13.2386 5.50695 13.3161C5.45375 13.3936 5.39034 13.4555 5.32034 13.4981C5.25034 13.5407 5.17512 13.5634 5.09898 13.5646H4.86981C4.42981 13.5711 3.98523 13.5646 3.54523 13.5646V9.16916ZM14.2473 15.6156H15.2671C15.5856 15.6156 15.8446 15.9678 15.8446 16.3982V19.4372C15.8438 19.5218 15.833 19.6056 15.8125 19.685C15.7717 19.8435 15.6973 19.9801 15.5996 20.0759C15.5019 20.1717 15.3857 20.222 15.2671 20.2198H14.2473C14.0979 20.2242 13.9534 20.1444 13.8453 19.9978C13.7371 19.8512 13.674 19.6497 13.6698 19.4372V16.3949C13.6698 15.9645 13.9288 15.6156 14.2473 15.6156Z" fill="white"/>
					</svg>
				</div>
				<Typography className={classes.order}>
					Order Online to <u>Book Your Cleaner</u>
				</Typography>
				<div className={classes.orderimg}>
					<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.25">
						<path d="M24.2578 14.2383H22.609C22.2504 14.2383 21.9094 14.4105 21.6984 14.7023L18 19.8141L14.3015 14.7023C14.0906 14.4105 13.7531 14.2383 13.391 14.2383H11.7421C11.5136 14.2383 11.38 14.4984 11.5136 14.6848L17.7715 23.3332C17.884 23.4879 18.1125 23.4879 18.225 23.3332L24.4828 14.6848C24.6199 14.4984 24.4863 14.2383 24.2578 14.2383Z" fill="black"/>
						<path d="M18 2.25C9.30234 2.25 2.25 9.30234 2.25 18C2.25 26.6977 9.30234 33.75 18 33.75C26.6977 33.75 33.75 26.6977 33.75 18C33.75 9.30234 26.6977 2.25 18 2.25ZM18 31.0781C10.7789 31.0781 4.92188 25.2211 4.92188 18C4.92188 10.7789 10.7789 4.92188 18 4.92188C25.2211 4.92188 31.0781 10.7789 31.0781 18C31.0781 25.2211 25.2211 31.0781 18 31.0781Z" fill="black"/>
						</g>
					</svg>
				</div>
			</Box>
			<div className={classes.v1}>
					<svg width="75" height="87" viewBox="0 0 75 87" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M33.9617 0.817647C19.3229 3.96219 5.83225 15.8501 1.59848 31.4194C-0.984841 41.0831 -0.554288 51.0536 3.75125 60.0271C4.32532 61.2542 4.97113 62.4046 5.61696 63.4784C7.1239 67.0064 9.20492 70.2277 11.6447 73.0654C18.3183 80.8117 26.5705 85.1834 36.3297 86.6406C51.6143 88.8648 68.3342 80.5817 76.6583 66.853C80.3897 60.7173 82.7577 52.7409 82.973 45.3781C83.3318 34.5639 80.1027 25.2837 74.1467 16.6937C65.3204 3.73206 48.5288 -2.3269 33.9617 0.817647Z" fill="#F5A883"/>
					</svg>
			</div>
			<Box className={classes.box}>
				<Typography className={classes.fresh}>
					WHY <span className={classes.green}>FRESH ?</span>
				</Typography>
				<Typography className={classes.body}>
					We'll come to your home, office, gym...wherever...and hand-wash your car using optimum No Rinse, the safest <br/>and most environment friendly car washing system ever.
				</Typography>
			
				<div position="absolute" style={{ zIndex: '1'}}>
					<Card className={classes.card1}>
						<CardMedia 
							component="img"
							className={classes.cardimg1}
							src={card1}
							alt="image1"
						/>
						<CardContent>
							<Typography className={classes.body1}>
								Get your car cleaned and hand washed by trained staff. We vacuum your car everyday.
							</Typography>
						</CardContent>
					</Card>
					<Card className={classes.card2} >
						<CardMedia 
							component="img"
							className={classes.cardimg2}
							src={card2}
							alt="image1"
						/>
						<CardContent>
							<Typography className={classes.body2}>
								Dedicated Customer support desk and call center.<br/>Get your car polished once in a week.
							</Typography>
						</CardContent>
					</Card>
					<Card className={classes.card3}>
						<CardMedia 
							component="img"
							className={classes.cardimg3}
							src={card3}
							alt="image1"
						/>
						<CardContent>
							<Typography className={classes.body3}>
							Get your car Sanitized once in a week. Flexibile timings.
							</Typography>
						</CardContent>
					</Card>
				</div>
			</Box>
			<div className={classes.v2} style={{ zIndex: '0'}} position="absolute">
				<svg width="1066" height="659" viewBox="0 0 1066 659" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1065.61 413.607C1073.75 388.589 926.647 318.258 916.001 288.692C907.803 103.884 832.324 222.458 750.704 186.83C629.147 133.846 496.815 131.696 371.392 91.1052C384.909 135.38 379.724 118.395 371.392 91.1052C342.888 125.186 233.895 53.0079 116.307 1.09676C47.945 -5.56227 31.8943 46.5248 31.5558 71.7849C30.8797 140.813 0.239362 188.314 0.671943 257.6C0.852372 317.135 49.7409 387.411 65.3368 449.328C72.1005 476.515 99.4296 474.648 131.176 494.948C159.111 512.701 220.132 514.756 251.127 527.266C277.963 538.071 304.8 548.876 331.376 559.575C358.213 570.38 385.049 581.185 411.625 591.884C448.857 606.951 719.202 658.086 757.268 658.531C905.062 660.842 1035.62 505.27 1065.61 413.607Z" fill="#FEF1C9"/>
				</svg>
			</div>
			<div className={classes.v3} style={{ zIndex: '0'}} position="absolute" >
				<svg width="156" height="129" viewBox="0 0 156 129" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M124.164 15.7547C90.9469 -8.59751 34.2468 -5.42519 11.8679 30.2168C-5.49339 57.8346 -5.49337 91.7038 23.2079 112.51C33.143 119.695 44.5833 125.2 57.1276 127.439C71.1772 129.865 84.9257 129.118 99.0756 127.532C113.928 125.76 128.078 122.96 139.518 113.257C149.855 104.393 154.571 91.5172 155.776 78.7346C157.983 55.2221 143.633 30.0301 124.164 15.7547Z" fill="#F5A883"/>
				</svg>
			</div>
			<div className={classes.v4}>
				<svg width="177" height="250" viewBox="0 0 177 250" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M131.596 33.6177C101.196 12.4177 63.9956 -2.38228 26.3956 0.317721C6.79562 1.71772 -11.5043 8.11771 -28.0043 18.7177C-40.3043 26.6177 -56.1043 33.6177 -66.3043 44.1177C-74.9043 53.0177 -80.2044 67.4177 -84.2044 78.9177C-93.2044 104.318 -95.7043 132.218 -89.8043 158.618C-78.9043 207.218 -41.5043 244.418 8.49566 249.018C72.9957 255.018 143.296 219.818 168.396 158.218C187.296 111.918 172.296 61.8177 131.596 33.6177Z" fill="#DDE0B6"/>
				</svg>
			</div>
			<Box className={classes.box1}>
				<Typography className={classes.price}>
					PRICING
				</Typography>
				<Typography className={classes.body4}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br />ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</Typography>

				<div position="absolute" style={{ zIndex: '1'}}>
					<Card className={classes.card4}>
						<CardContent>
							<Typography className={classes.plan1}>
								LITE PLAN
							</Typography>
							<Typography className={classes.body5}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
							</Typography>
							
							<Typography className={classes.money}>
								<div className={classes.rupee}>
									<svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11 2V0H0V2H3.5C4.802 2 5.901 2.838 6.315 4H0V6H6.315C6.10973 6.58323 5.72892 7.08861 5.22488 7.44672C4.72085 7.80483 4.1183 7.9981 3.5 8H0V10.414L5.586 16H8.414L2.414 10H3.5C4.65196 9.99846 5.76816 9.59975 6.66039 8.8711C7.55263 8.14245 8.16632 7.12842 8.398 6H11V4H8.398C8.24471 3.2722 7.92884 2.58848 7.474 2H11Z" fill="black"/>
									</svg>
								</div>
								800
							</Typography>
							<Typography className={classes.time}>
								monthly
							</Typography>
							<Typography className={classes.buy} >
								BUY NOW
							</Typography>
						</CardContent>
					</Card>
					<Card className={classes.card5}>
						<CardContent>
							<Typography className={classes.most}>
								MOST POPULAR
							</Typography>
							<Typography className={classes.plan2}>
								PRO PLAN
							</Typography>
							<Typography className={classes.body6}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
							</Typography>
							<Typography className={classes.money1}>
								<div className={classes.rupee1}>
									<svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11 2V0H0V2H3.5C4.802 2 5.901 2.838 6.315 4H0V6H6.315C6.10973 6.58323 5.72892 7.08861 5.22488 7.44672C4.72085 7.80483 4.1183 7.9981 3.5 8H0V10.414L5.586 16H8.414L2.414 10H3.5C4.65196 9.99846 5.76816 9.59975 6.66039 8.8711C7.55263 8.14245 8.16632 7.12842 8.398 6H11V4H8.398C8.24471 3.2722 7.92884 2.58848 7.474 2H11Z" fill="white"/>
									</svg>
								</div>
								800
							</Typography>
							<Typography className={classes.time1}>
								monthly
							</Typography>
							<Typography className={classes.buy1} >
								BUY NOW
							</Typography>
						</CardContent>
					</Card>
					<Card className={classes.card6}>
						<CardContent>
							<Typography className={classes.plan3}>
								ENTERPRISE PlAN
							</Typography>
							<Typography className={classes.body7}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
							</Typography>
							<Typography className={classes.money2}>
								<div className={classes.rupee2}>
									<svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11 2V0H0V2H3.5C4.802 2 5.901 2.838 6.315 4H0V6H6.315C6.10973 6.58323 5.72892 7.08861 5.22488 7.44672C4.72085 7.80483 4.1183 7.9981 3.5 8H0V10.414L5.586 16H8.414L2.414 10H3.5C4.65196 9.99846 5.76816 9.59975 6.66039 8.8711C7.55263 8.14245 8.16632 7.12842 8.398 6H11V4H8.398C8.24471 3.2722 7.92884 2.58848 7.474 2H11Z" fill="black"/>
									</svg>
								</div>
								800
							</Typography>
							<Typography className={classes.time2}>
								monthly
							</Typography>
							<Typography className={classes.buy2} >
								BUY NOW
							</Typography>
						</CardContent>
					</Card>
				</div>
				<div className={classes.v5} style={{ zIndex: '0'}} position="absolute">
					<svg width="817" height="866" viewBox="0 0 817 866" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M730.176 765.983C735.513 744.864 740.195 723.557 744.876 702.25C753.697 660.29 761.534 618.048 768.714 575.619C783.218 490.261 796.738 404.622 810.515 319.325C815.926 285.555 821.508 249.948 809.919 214.815C797.731 176.815 767.999 144.306 725.587 121.377C683.503 98.5422 637.253 85.2988 592.144 68.0685C547.036 50.8382 505.922 25.8546 459.558 11.7697C410.57 -3.06654 362.678 -4.37804 321.485 14.2929C248.829 47.4103 221.987 138.672 188.005 196.613C131.411 296.341 69.9964 393.07 22.3013 496.424C5.48035 532.858 -13.2235 570.91 14.5954 612.577C39.7336 649.972 78.1787 685.515 115.141 716.32C244.967 824.402 425.895 833.341 589.564 859.177C613.31 863.011 637.641 867.282 660.475 864.384C716.469 857.231 721.071 802.739 730.176 765.983Z" fill="#EFCFD0"/>
					</svg>
				</div>
			</Box>	
		</div>
	)
}

export default Home;