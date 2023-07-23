import Link from "next/link";
import {ScrollAnimate} from "@/utils/ScrollAnimate";

export const PostCard = ({posts, isLoading}) => {
	return (
		<section>
			{isLoading && <p>Loading...</p>}
			<div className="grid justify-center content-around gap-12">
				{posts.map(post => (
					<ScrollAnimate key={post._id}>
						<div className="card border shadow" id="postCard">
							<h2 className="card-header text-left gap-4 fw-bold text-xl">
								{post.title}
							</h2>
							<p className="card-body card-text">
								{post.body}...
							</p>
							<div className="card-footer">
								<Link href={`/posts/${post._id}`}>
									Read More
								</Link>
							</div>
						</div>
					</ScrollAnimate>
				))}
			</div>
		</section>
	);
};