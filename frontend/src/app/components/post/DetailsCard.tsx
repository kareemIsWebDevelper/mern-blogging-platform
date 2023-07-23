import Link from "next/link";
import {ScrollAnimate} from "@/utils/ScrollAnimate";
import {useState} from "react";

export const DetailsCard =
	({
		 post,
		 handleDelete,
		 isLoading
	}) => {
	const [toggle, setToggle] = useState<boolean>(false);
	return (
		<div className="py-8">
			{isLoading && <p>Loading Post...</p>}
			<ScrollAnimate>
				{post && (
					<div key={post._id} className="card border shadow h-auto" id="postCard">
						<h2 className="card-header text-left gap-4 fw-bold text-xl">
							{post.title}
						</h2>
						<p className="card-body">
							{post.body}...
						</p>
						<div className="card-footer w-full flex justify-around items-center">
							<Link
								href={`update-post/${post._id}`}
								className="btn btn-primary md:w-44"
							>
								Update
							</Link>
							<button className="btn btn-danger" onClick={() => {setToggle(true)}}>
								Delete
							</button>
						</div>
					</div>
				)}
			</ScrollAnimate>
			{toggle &&
				<div className="bg-white fixed top-0 left-0 w-full z-30 border shadow p-8 h-44 gridCenter">
					<p>You are going to delete post !</p>
					<div className="flex place-items-center gap-4">
						<button className="text-white text-sm rounded bg-red-600 p-2 md:w-44 md:text-xl mt-4" onClick={() => setToggle(false)}>
							Cancel
						</button>
						<button
							onClick={() => {
								handleDelete(post._id);
								setToggle(false);
							}}
		
							className="text-white p-2 rounded text-sm bg-blue-500 md:w-44 md:text-xl mt-4"
						>
							Confirm
						</button>
					</div>
				</div>
			}
		</div>
	)
}
