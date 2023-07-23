import Link from "next/link";
import {ScrollAnimate} from "@/utils/ScrollAnimate";

export const Intro = () => {
	return (
		<ScrollAnimate>
			<section className="gridCenter">
				<h1
					className="text-extrabold text-5xl text-center md:text-6xl mb-4"
					style={{
						WebkitTextStrokeWidth: 2,
						fontWeight: 'bolder',
					}}>
					Welcome To Our Blog
				</h1>
					<Link
						href="posts/create-post"
						className="w-72 h-12 md:w-96 md:text-xl rounded-3xl border shadow
						 text-left text-slate-400 text-decoration-none ml-6 cursor-pointer
						 grid justify-start items-center px-4"
					>
						What&apos;s on you mind?
					</Link>
			</section>
		</ScrollAnimate>
	)
}