import Link from "next/link";
import { FC, memo } from "react";

const Navbar: FC = memo(() => {
    return (
        <nav className="border-b border-gray-200 bg-white fixed top-0 left-0 right-0 z-10">
            <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-lg font-medium text-black">
                    Portfolio
                </Link>
                <ul className="flex gap-6">
                    <li>
                        <a href="#" className="text-gray-600 hover:text-black">
                            Hero
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="text-gray-600 hover:text-black">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-gray-600 hover:text-black">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="text-gray-600 hover:text-black">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-gray-600 hover:text-black">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
});

Navbar.displayName = "Navbar";
export default Navbar;