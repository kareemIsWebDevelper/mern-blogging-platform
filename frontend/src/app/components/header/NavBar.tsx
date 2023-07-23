'use client';
import Link from "next/link";
import Image from "next/image";
import menu from '@/assets/icons/menu.svg';
import {useEffect, useState} from "react";

type NavBarProps = {
	isVisible: boolean;
	setIsVisible: any;
}

export const NavBar = ({setIsVisible, isVisible}: NavBarProps) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const isDark = localStorage.getItem('theme') === 'dark';
		setIsDarkMode(isDark);

		if (isDark) {
			document.documentElement.classList.add('dark');
		}
	}, []);

	return (
		<nav className="navBar">
			<div className="flex justify-between items-center w-full">
				<button onClick={() => window.scroll(0, 0)}>
					<Link href="/" className="flex place-items-center gap-1 text-black text-decoration-none">
						<span className="text-2xl font-extrabold">Blogify</span>
					</Link>
				</button>
				<button>
					<Image
						onClick={() => {setIsVisible(!isVisible)}}
						src={menu}
						alt={'menu'}
						width={45}
						height={45}
						className="dark:invert"
					/>
				</button>
			</div>
		</nav>
	)
}