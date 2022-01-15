import { AppBar, Toolbar, Typography, makeStyles, Button, Box } from '@material-ui/core'; 
import { Link, useLocation } from 'react-router-dom';


const useStyle = makeStyles((theme) => ({
  component: {
      flexGrow: 1,
      background: 'transparent',
      boxShadow: 'none',
      '& > *': {
        padding: theme.spacing(1),
      }, 
    },
    title: {
      flexGrow: 1,
      padding: 20,
      color: 'black',
      fontWeight: 'bold',
      fontSize: '33px',
      [theme.breakpoints.down('sm')]: {
        flexGrow: 0,
      },
    },
    img: {
      marginLeft: 60,
      '& > *': {
        padding: theme.spacing(1),
      }
    },
    btn: {
      marginTop: '5px',
      marginRight: 60,
      width: '422px',
      display: 'flex',
      flexDirection: 'row',
      color: 'black',
    

      '& > *': {
        padding: theme.spacing(1),
      },
      
    },
    btn1:{
      borderRad: '10px',
      height: '33px',
      width: '91px',
      fontSize: '15px',
      marginTop: '3px',
      marginLeft: '6px',
      color: 'white',
      backgroundColor: 'black',
      '&:hover': {
        background: 'black',
       },
    }
 
}));



export default function Header() {
  const classes = useStyle();


  return (

      <AppBar  position="static" className={classes.component}>
        <Toolbar>
          <div>
            <svg width="27" height="34" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.img}>
            <path d="M14.6001 1.30007C13.9667 0.750073 13.0167 0.750073 12.3834 1.30007C4.25008 8.46674 0.166748 14.7001 0.166748 20.0001C0.166748 28.3001 6.50008 33.6667 13.5001 33.6667C20.5001 33.6667 26.8334 28.3001 26.8334 20.0001C26.8334 14.7001 22.7501 8.46674 14.6001 1.30007ZM6.55008 20.3334C7.16675 20.3334 7.66675 20.7667 7.78341 21.3667C8.46675 25.0667 11.5834 26.3334 13.8501 26.1501C14.5667 26.1167 15.1667 26.6834 15.1667 27.4001C15.1667 28.0667 14.6334 28.6167 13.9667 28.6501C10.4167 28.8667 6.26675 26.8334 5.31675 21.7834C5.28778 21.6047 5.29798 21.4219 5.34662 21.2475C5.39527 21.0731 5.4812 20.9114 5.59849 20.7735C5.71577 20.6356 5.86161 20.5249 6.02591 20.4489C6.19021 20.3729 6.36906 20.3335 6.55008 20.3334Z" fill="#050505"/>
            </svg>
          </div>
          <Typography  className={classes.title} component={Link} to={`/`} style={{ textDecoration: 'none' }} color='inherit'>
            CARWASH
          </Typography>
          <div className={classes.btn}>
            <Typography component={Link} to={`/about`} style={{ textDecoration: 'none' }} color='inherit'>ABOUT US</Typography>
            <Typography component={Link} to={`/service`} style={{ textDecoration: 'none' }} color='inherit'>SERVICES</Typography>
            <Typography component={Link} to={`/contact`} style={{ textDecoration: 'none' }} color='inherit'>CONTACT US</Typography>
            <Button component={Link} to={`/signup`} style={{ textDecoration: 'none' }} color='inherit' className={classes.btn1} variant="contained" >Sign Up</Button>
          </div>
        </Toolbar>
      </AppBar>

  );
}
