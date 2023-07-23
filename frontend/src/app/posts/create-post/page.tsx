"use client";
import { useState } from "react";
import {makeNewPost} from "@/lib/api";
import {CreatePostForm} from "@/app/posts/create-post/components/CreatePostForm";
import {NavBar} from "@/app/components/header/NavBar";
import {NavBarMenu} from "@/app/components/header/NavBarMenu";
import {useRouter} from "next/navigation";
import Footer from "@/app/components/footer/Footer";

interface Post {
    title: string;
    body: string;
}

export default function CreatePost() {
    const router = useRouter();
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isPublishing, setIsPublishing] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPublishing(true);

        const post: Post = {
            title,
            body,
        };
        try {
            if (!title || !body) {
                setIsPublishing(false);
                setError(true);
                return;
            }
            await makeNewPost(post);
            setIsPublishing(false);
            setError(false);
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
           <main>
               <CreatePostForm
                   setBody={setBody}
                   setTitle={setTitle}
                   handleSubmit={handleSubmit}
                   isPublishing={!isPublishing}
                   error={error}
               />
           </main>
           <footer>
               <Footer />
           </footer>
       </>
    );
};
