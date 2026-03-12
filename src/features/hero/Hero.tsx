"use client";

import Image from "next/image";
import { FC, memo } from "react";
import { motion, Variants } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

const GITHUB_URL = "https://github.com/TKtkGg"

const Hero: FC = memo(() => {
    return (
        <motion.section 
            id="hero" 
            className="relative min-h-[90vh] w-full overflow-hidden bg-white dark:bg-zinc-900"
            initial="hidden"
            animate="visible"
            variants={fadeInUp as Variants}
        >
            {/* 背景画像 */}
            <div className="absolute inset-0">
                <Image 
                    src="/img/unsplash_4hbJ-eymZ1o.png"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            {/* グラデーション */}
            <div 
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 45%, transparent 100%)",
                }}
            />

            {/* 左のコンテンツ */}
            <div className="relative z-9 flex min-h-[70vh] flex-col justify-center px-8 py-20 ml-25 md:max-w-[45%] md:px-12 lg:px-16">
                <h1 className="text-left text-5xl font-bold tracking-tight text-white md:text-5xl">
                    TKG
                </h1>
                <p className="mt-3 text-left text-3xl text-white/90">
                    Web Developer
                </p>
                <p className="mt-8 text-left text-xl text-white/80">
                    頑張るぜ
                </p>
            </div>

            {/* 右のアイコン */}
            <a 
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-8 right-8 z-10 flex items-center justify-center rounded-full bg-white-10 p-3 transition hover:bg-white-20"
                aria-label="GitHub"
            >
                <Image 
                    src="/icons/github-original.svg"
                    alt="GitHub"
                    width={32}
                    height={32}
                    className="h-10 w-10 object-contain invert"
                />
            </a>
        </motion.section>
    );
});

Hero.displayName = "Hero";
export default Hero;