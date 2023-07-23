import {ScrollAnimate} from "@/utils/ScrollAnimate";

export const CreatePostForm
	= ({
	   handleSubmit,
	   setTitle,
	   setBody,
	   isPublishing,
	   error
   }) => {
	return (
	<ScrollAnimate>
		<section className="py-8">
			<form onSubmit={handleSubmit} className="card p-4 shadow border w-80 h-fit md:w-[600px] md:h-fit text-xl md:text-2xl">
				<legend className="text-4xl font-extrabold text-center card-header mb-4">Create Post</legend>
				<fieldset>
					<label className="fw-bold mb-1">Title:</label>
					<input
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						type="text"
						placeholder="Enter post title"
						className="form-control mb-2"
					/>
					{error && <span className="text-danger text-sm block">This field cannot be empty</span>}
					<label className="fw-bold mb-1">Content:</label>
					<textarea
						onChange={(e) => {
							setBody(e.target.value);
						}}
						placeholder="What's on your mind?"
						className="form-control mb-2 h-32"
					/>
					{error && <span className="text-danger text-sm block">This field cannot be empty</span>}
				</fieldset>
				<button type="submit" className="btn bg-black text-white mt-4">
					{isPublishing ? 'Publish' : 'Publishing..'}
				</button>
			</form>
		</section>
	</ScrollAnimate>
	)
}