"use client";

import Image from "next/image";
import { FC, memo, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

const tabs = [
    { id: "intro", label: "Intro"},
    { id: "skills", label: "Skills"},
    { id: "current", label: "Current"},
    { id: "interests", label: "Interests"},
]

const tabContents: Record<(typeof tabs)[number]["id"], string> = {
    intro: "自己紹介",
    skills: "スキル",
    current: "現在",
    interests: "興味",
}

const About: FC = memo(() => {
    const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("intro");

    return(
        <motion.section 
            id="about" 
            className="px-6 py-20 bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-50"
            initial="hidden"
            variants={fadeInUp as Variants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2 className="mb-12 text-center text-4xl font-bold text-black dark:text-zinc-50">About</h2>
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-30 md:flex-row md:items-start">
                {/* 左：写真 */}
                <div className="flex-shrink-0">
                    <div className="relative h-64 w-64 overflow-hidden rounded-full bg-gray-200 md:h-100 md:w-100 dark:bg-zinc-800">
                        <Image src="/images/about.jpg" alt="プロフィール写真" fill className="object-cover" />
                    </div>
                </div>

                {/* 右：タブ・説明 */}
                <div className="flex-1 ml-10 md:ml-17">
                    {/* タブ */}
                    <div className="inline-flex border-b border-gray-200 dark:border-zinc-800">
                        {tabs.map((tab) => (
                            <button 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-3 text-sm font-medium transition-all duration-500 ${
                                    activeTab === tab.id
                                        ? "border-b-2 border-black text-black dark:border-zinc-50 dark:text-zinc-50"
                                        : "border-b-2 border-transparent text-gray-500 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* 説明 */}
                    <div className="mt-6 min-h-[120px]">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={activeTab} 
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                                className="whitespace-pre-wrap break-words text-gray-600 dark:text-zinc-400"
                            >
                                {tabContents[activeTab]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.section>
    );
})

About.displayName = "About";
export default About;