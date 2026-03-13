"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { FC, memo, useEffect, useState } from "react";

const Navbar: FC = memo(() => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <nav className="border-b border-gray-200 bg-white fixed top-0 left-0 right-0 z-10 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mx-auto flex max-w-4xl items-center flex-row justify-between gap-3 px-4 py-3 md:gap-0 md:px-6 md:py-4">
                <Link href="/" className="text-lg font-medium text-black dark:text-zinc-50">
                    Portfolio
                </Link>
                <ul className="flex flex-wrap justify-center gap-3 text-sm sm:gap-6 sm:text-base">
                    <li>
                        <a href="#" className="text-gray-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50">
                            Hero
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="text-gray-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-gray-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="text-gray-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-gray-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50">
                            Contact
                        </a>
                    </li>
                </ul>
                <button
                    type="button"
                    onClick={toggleTheme}
                    className="h-8 w-8 rounded-full border border-zinc-600 bg-zinc-800 text-xs text-gray-800 shadow-sm transition hover:bg-zinc-700 dark:border-gray-300 dark:bg-white dark:text-zinc-50 dark:hover:bg-gray-100"
                    aria-label="Toggle theme"
                >
                    {!mounted ? (
                        <span className="inline-block h-4 w-4" />
                    ) : resolvedTheme === "dark" ? (
                        "☀️"
                    ) : (
                        "🌙"
                    )}
                </button>
            </div>
        </nav>
    );
});

Navbar.displayName = "Navbar";
export default Navbar;