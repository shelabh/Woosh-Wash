import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Para1, Para2, Img, Img2, Ttle, Rec, Bs, Butt, Frame } from './ServiceStyles'


function Service() {
	return (
		<div>
			<Header />
			<Frame>
				<Para1> Best Service,<br/> Right Time, <br/>Right People</Para1>
				<Img src="https://cdn.discordapp.com/attachments/873997132833628282/938510594271768626/Screenshot_2021-12-23_at_1.51_1.svg"/>
				<Para2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Para2>
				<Img2 src="https://cdn.discordapp.com/attachments/873997132833628282/938512379073941525/Book_Our_Service_Here.svg"/>
				<Ttle>Please Provide Following Details</Ttle>
				<Rec>
				<Bs>BOOKING SUMMARY</Bs>
				</Rec>
				<Butt>BOOK</Butt>
			</Frame>
			{/* <Footer/> */}
		</div>
	)
}

export default Service