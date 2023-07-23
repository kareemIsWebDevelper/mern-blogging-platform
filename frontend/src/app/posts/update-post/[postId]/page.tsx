"use client";
import {useEffect, useState} from "react";
import {fetchSinglePost, updateExistPost} from "@/lib/api";
import {useParams, useRouter} from "next/navigation";
import {NavBar} from "@/app/components/header/NavBar";
import {NavBarMenu} from "@/app/components/header/NavBarMenu";
import {UpdatePostForm} from "@/app/posts/update-post/[postId]/components/UpdatePostForm";
import Footer from "@/app/components/footer/Footer";

interface Post {
    title: string;
    body: string;
}

export default function CreatePost() {
    const router = useRouter();
    const {postId} = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [body, setBody] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const fetchedPost = await fetchSinglePost(postId);
                setPost(fetchedPost);
                setBody(fetchedPost.body);
                setTitle(fetchedPost.title);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        void fetchPost();
    }, [postId]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const post: Post = {
            title,
            body,
        };
        try {
            await updateExistPost(post, postId);
            alert('Post updated successfully');
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <header>
                <NavBar isVisible={isVisible} setIsVisible={setIsVisible} />
                <NavBarMenu isVisible={isVisible} setIsVisible={setIsVisible} />
            </header>
            <main className="w-full gridCenter gap-4 py-24 px-8">
                <UpdatePostForm
                    title={title}
                    setTitle={setTitle}
                    body={body}
                    setBody={setBody}
                    handleSubmit={handleSubmit}
                />
            </main>
            <footer>
                <Footer />
            </footer>
        </>

    );
};
