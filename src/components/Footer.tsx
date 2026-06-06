import { FC, memo } from "react";


const Footer: FC = memo(() => {
    return (
        <footer className="max-h-[80px] flex justify-between border-t border-gray-200 bg-white py-5 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 px-6">
                <p className="text-center text-sm text-gray-500 dark:text-zinc-500">
                    © 2026 Yuki Miyamoto
                    <br />
                    Build with Next.js & TypeScript
                </p>
            </div>
        </footer>
    )
}) 

Footer.displayName = "Footer";
export default Footer;