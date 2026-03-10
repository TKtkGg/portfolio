"use client";

import Image from "next/image";
import { FC, memo, useState } from "react";

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
        <section id="about" className="px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-black">About</h2>
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-30 md:flex-row md:items-start">
                {/* 左：写真 */}
                <div className="flex-shrink-0">
                    <div className="relative h-64 w-64 overflow-hidden rounded-full bg-gray-200 md:h-100 md:w-100">
                        <Image src="/images/about.jpg" alt="プロフィール写真" fill className="object-cover" />
                    </div>
                </div>

                {/* 右：タブ・説明 */}
                <div className="flex-1 ml-10 md:ml-17">
                    {/* タブ */}
                    <div className="inline-flex border-b border-gray-200">
                        {tabs.map((tab) => (
                            <button 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-3 text-sm font-medium transition-colors ${
                                    activeTab === tab.id
                                        ? "border-b-2 border-black text-black"
                                        : "text-gray-500 hover:text-black"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* 説明 */}
                    <div className="mt-6 min-h-[120px]">
                        <p className="whitespace-pre-wrap break-words text-gray-600">
                            {tabContents[activeTab]}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
})

About.displayName = "About";
export default About;