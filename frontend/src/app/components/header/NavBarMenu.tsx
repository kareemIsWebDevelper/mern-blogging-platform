import close from '@/assets/icons/close.svg';
import Image from "next/image";
import Link from "next/link";
import {ScrollAnimate} from "@/utils/ScrollAnimate";

type NavBarMenuProps = {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBarMenu = ({isVisible, setIsVisible}: NavBarMenuProps) => {
	return (
		<>
			{isVisible &&
				<div className="navBarMenu">
					<div className="navBarMenuHeader">
						<button onClick={() => window.scroll(0, 0)}>
							<Link href="/" className="flex place-items-center gap-1 text-black text-decoration-none">
								<span className="text-2xl font-extrabold">Blogify</span>
							</Link>
						</button>
						<button onClick={() => setIsVisible(!isVisible)}>
							<Image
								src={close}
								alt="close"
								width={35}
								height={35}
								className="dark:invert"
							/>
						</button>
					</div>
					<ScrollAnimate>
						<div className="navBarMenuText">
							<Link
								href="/"
								onClick={() => setIsVisible(!isVisible)}
								className="text-decoration-none text-black md:border md:mb-1 w-full p-2">
								Home
							</Link>
							<Link
								href="/"
								onClick={() => setIsVisible(!isVisible)}
								className="text-decoration-none text-black md:border md:mb-1 w-full p-2">
								All Posts
							</Link>
							<Link
								href="posts/create-post"
								onClick={() =>
									setIsVisible(!isVisible)}
								className="text-decoration-none text-black md:border md:mb-1 w-full p-2">
								New Post
							</Link>
						</div>
					</ScrollAnimate>
				</div>
			}
		</>
	)
}