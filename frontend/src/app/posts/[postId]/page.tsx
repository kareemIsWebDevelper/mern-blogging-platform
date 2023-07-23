"use client";
import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {fetchSinglePost, deleteExistPost} from "@/lib/api";
import {NavBar} from "@/app/components/header/NavBar";
import {NavBarMenu} from "@/app/components/header/NavBarMenu";
import {DetailsCard} from "@/app/components/post/DetailsCard";
import Footer from "@/app/components/footer/Footer";

interface PostI {
    _id: string;
    title: string;
    body: string;
}

export default function Details() {
    const { postId } = useParams();
    const router = useRouter();
    const [post, setPost] = useState<PostI | undefined>(undefined);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getPost = async () => {
            const postsData = await fetchSinglePost(postId);
            if (postsData) {
                setPost(postsData);
            }
            setIsLoading(false);
        };

        void getPost();
    }, [postId]);

    const handleDelete = async (id) => {
        try {
            await deleteExistPost(id);
            alert('Post deleted successfully');
            setPost((prevPost) => {
                if (prevPost && prevPost._id !== id) {
                    return prevPost;
                }
                return undefined;
            });
            router.push('/'); // Redirect to the home page
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
       <>
           <header>
               <NavBar isVisible={isVisible} setIsVisible={setIsVisible} />
               <NavBarMenu isVisible={isVisible} setIsVisible={setIsVisible} />
           </header>
           <main className="w-full gridCenter gap-4">
               <DetailsCard
                   post={post}
                   handleDelete={handleDelete}
                   isLoading={isLoading}
               />
           </main>
           <footer className={`${isLoading ? 'hidden' : 'block'}`}>
               <Footer />
           </footer>
       </>
    );
};