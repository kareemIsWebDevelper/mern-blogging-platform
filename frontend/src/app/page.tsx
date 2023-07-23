"use client";
import { fetchPosts } from '@/lib/api';
import {useEffect, useState} from "react";
import Link from "next/link";
import {NavBar} from "./components/header/NavBar";
import {NavBarMenu} from "./components/header/NavBarMenu";
import {Intro} from "@/app/components/Intro";
import {PostCard} from "@/app/components/post/PostCard";
import Footer from "@/app/components/footer/Footer";

interface PostsI {
    _id: string;
    title: string;
    body: string;
}
export default function Home() {
  const [posts, setPosts] = useState<PostsI[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await fetchPosts();
        setPosts(postsData);
        setIsLoading(false);
    };

    void getPosts();
  }, []);

  return (
     <>
       <header>
         <NavBar isVisible={isVisible} setIsVisible={setIsVisible} />
         <NavBarMenu isVisible={isVisible} setIsVisible={setIsVisible} />
       </header>
       <main className="w-full mt-4">
         <Intro />
         <PostCard posts={posts} isLoading={isLoading} />
       </main>
         <footer className={`${isLoading? 'fixed bottom-0 left-0 w-full' : ''}`}>
             <Footer />
         </footer>
     </>
  );
}
