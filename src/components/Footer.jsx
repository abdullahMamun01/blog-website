import Logo from "./Header/Logo";


const Footer = () => {
    return (
        <footer className="my-6 md:my-8 bg-[#030317] ">
            <div className="container mx-auto flex items-center justify-between">
                <a href="/">
                    <Logo />
                </a>
                <ul className="flex items-center space-x-5">
                    <li className="text-center">
                        <a
                            className="text-white/50 hover:text-white transition-all duration-200"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="24"
                                height="24"
                                fill="currentColor"
                            >
                                <path d="M512 257.6c0-141.4-114.6-256-256-256S0 116.2 0 257.6c0 127.8 93.6 233.7 216 252.9v-179.9l-65-9.9v-55.1l65-9.9V9.6C159.6 21.8 84 92.1 84 176.5c0 64.2 38.2 99.6 96.7 99.6 28 0 57.3-5 57.3-5V208l-32.3.1c-31.8 0-41.7-19.7-41.7-40.1V119l71-10.8-11.4-73.5-59.6 8.9V257c0 127.8 93.6 233.7 216 252.9V257.6z" />
                            </svg>
                        </a>
                    </li>
                    <li className="text-center">
                        <a
                            className="text-white/50 hover:text-white transition-all duration-200"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 56.7 56.7"
                                width="24"
                                height="24"
                                fill="currentColor"
                            >
                                <path d="M28.2 16.7c-7 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8 12.8-5.7 12.8-12.8-5.7-12.8-12.8-12.8zM28.2 37.7c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z" />
                                <circle cx="41.5" cy="16.4" r="2.9" />
                                <path d="M49 8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7 0-14.5 5.8-14.5 14.5v20.5c0 4.3 1.4 8 4.2 10.7 2.7 2.6 6.3 3.9 10.4 3.9h20.4c4.3 0 7.9-1.4 10.5-3.9 2.7-2.6 4.1-6.3 4.1-10.6V19.3C53 15.1 51.6 11.5 49 8.9zM48.6 39.9c0 3.1-1.1 5.6-2.9 7.3-1.7 1.7-4.3 2.6-7.3 2.6H18c-3 0-5.5-0.9-7.3-2.6-1.7-1.7-2.7-4.3-2.7-7.3V19.3c0-3 0.9-5.5 2.7-7.3 1.7-1.7 4.3-2.6 7.3-2.6h20.6c3 0 5.5 0.9 7.3 2.7 1.7 1.8 2.7 4.3 2.7 7.2V39.9L48.6 39.9z" />
                            </svg>
                        </a>
                    </li>
                    {/* Add more SVG icons */}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
