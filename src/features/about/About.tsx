"use client";

import Image from "next/image";
import { FC, memo, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

const tabs = [
    { id: "intro", label: "Intro"},
    { id: "skills", label: "Skills"},
    { id: "current", label: "Current"},
    { id: "career", label: "Career"},
]

const tabContents: Record<(typeof tabs)[number]["id"], string> = {
    intro: "初めまして、宮本 侑季です！\nWebエンジニア志望の高校2年生です！\n「使う人の立場で考え、シンプルで可読性の高いコードを書く」ことを大切にしています。\n基本的には個人開発を行っており、最近はPythonやJava、Next.jsを使ったゲームサイトを制作しています。",
    skills: "【フロントエンド】\nReact / Next.js / TypeScript / JavaScript / HTML / CSS\n【バックエンド】\nPython / Django / Java / Spring\n【データベース】\nSQLite / postgreSQL",
    current: "現在は主にRebirthとLimitExploreを制作しています。\nCursorAIをメンターとして、実践的なコードの書き方、\nアプリケーション制作のノウハウを学びながら、\n積極的にコーディングを行なっています。",
    career: "2025年4月\nKADOKAWAドワンゴ情報工科学院\nITプログラミング学部エンジニア専攻・\nS高等学校普通科 入学\n2028年3月\nKADOKAWAドワンゴ情報工科学院\nITプログラミング学部エンジニア専攻・\nS高等学校普通科 卒業予定",
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
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 lg:gap-30 lg:flex-row lg:items-start">
                {/* 左：写真 */}
                <div className="flex-shrink-0">
                    <div className="relative h-64 w-64 overflow-hidden rounded-full bg-gray-200 mx-auto lg:h-100 lg:w-100 dark:bg-zinc-800">
                        <Image src="/img/profile.jpg" alt="プロフィール写真" fill className="object-cover" sizes="(max-width: 1024px) 256px, 400px" />
                    </div>
                </div>

                {/* 右：タブ・説明 */}
                <div className="text-black font-bold mt-10 flex-1 text-left lg:mt-0 lg:ml-17">
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