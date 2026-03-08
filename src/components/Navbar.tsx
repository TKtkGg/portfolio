import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="border-b border-gray-200 bg-white">
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
                        <a href="#contact" className="text-gray-600 hover:text-black">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}