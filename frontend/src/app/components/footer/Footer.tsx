import Link from 'next/link';

const Footer = () => {
    return (
        <div className="flex flex-col justify-evenly items-center gap-2">
            <Link href="/" className="text-3xl md:text-5xl text-decoration-none text-white font-bold">
                Blogify
            </Link>
            <p className="mt-4">
                A platform for sharing your
                <br className="md:hidden" />
                thoughts and ideas
            </p>
            <p className="-mt-4">© All copyrights preserved 2023</p>
        </div>
    );
};

export default Footer;