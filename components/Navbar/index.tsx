import Link from "next/link"
import { useState } from "react";


const Navbar = () => {
	const [scroll, setScroll] = useState(false);

	const handleScroll = () => {
		if(window.scrollY >= 80){
			setScroll(true);
		}
		else{
			setScroll(false);
		}
	}
	window.addEventListener('scroll', handleScroll);

	return (
		<nav className={scroll ? "flex flex-row fixed w-full justify-around pt-5 pb-5 border-b-2 border-black items-center bg-white text-black " : "flex flex-row justify-around pt-5 items-center fixed w-full text-white"}>
			<Link href="/">
				<div className="font-bold text-3xl">
					WooshWash
				</div>
			</Link>
			<ul className="flex flex-row gap-3 ">
				<Link href="/app/about">
					<li className="cursor-pointer">
						About Us
					</li>
				</Link>
				<li className="cursor-pointer">
					Services
				</li>
				<li className="cursor-pointer">
					Contact Us
				</li>
			</ul>
			<button className="border-white border-2 text-white rounded-md h-9   w-24">
				Sign Up
			</button>
		</nav>
	)
}

export default Navbar