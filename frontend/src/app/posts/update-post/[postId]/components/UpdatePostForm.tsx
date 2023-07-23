import {ScrollAnimate} from "@/utils/ScrollAnimate";

export const UpdatePostForm
	= ({
	   handleSubmit,
	   setBody,
	   body,
	   setTitle,
	   title,
	   }) => {
	return (
		<ScrollAnimate>
			<div className="card shadow border w-80 h-fit md:w-[600px] md:h-fit text-xl md:text-2xl">
				<h1 className="text-4xl font-extrabold text-center card-header">Update Post</h1>
				<form onSubmit={handleSubmit} className="card-body">
					<fieldset>
						<label className="fw-bold">Title:</label>
						<input
							onChange={(e) => {
								setTitle(e.target.value);
							}}
							className="form-control mb-4"
							value={title}
						/>
						<label className="fw-bold">Content:</label>
						<textarea
							onChange={(e) => {
								setBody(e.target.value);
							}}
							className="form-control h-32"
							value={body}
						/>
					</fieldset>
					<button type="submit" className="text-white text-sm rounded bg-blue-500 p-2 md:w-44 md:text-xl mt-4">
						Update
					</button>
				</form>
			</div>
		</ScrollAnimate>
	)
}
