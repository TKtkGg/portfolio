"use client";

import { FC, memo, useState } from "react";
import { motion, Variants } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import emailjs from "@emailjs/browser";
type SubmitStatus = "idle" | "sending" | "success" | "error";

const Contact: FC = memo(() => {
    const [status, setStatus] = useState<SubmitStatus>("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const templateParams = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setStatus("success");
            form.reset();
        } catch {
            setStatus("error");
        }
    };

    return (
        <motion.section 
            id="contact" 
            className="px-6 py-20"
            initial="hidden"
            variants={fadeInUp as Variants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2 className="mb-8 text-center text-4xl font-bold text-black">
                Contact
            </h2>

            <div className="mx-auto max-w-xl rounded-lg bg-white">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* 名前 */}
                    <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    {/* メールアドレス */}
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
                            placeholder="you@email.com"
                            required
                        />
                    </div>

                    {/* メッセージ */}
                    <div>
                        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea 
                            id="message"
                            name="message"
                            rows={5}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
                            placeholder="Your Message"
                            required
                        />
                    </div>

                    {/* 送信ボタン */}
                    <div className="pt-2">
                        <button 
                        type="submit" 
                        disabled={status === "sending"}
                        className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
                        >
                            {status === "sending" ? "Sending..." : "Send"}
                        </button>
                        {status === "success" && (
                            <p className="mt-4 text-center text-sm text-green-600">Sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="mt-4 text-center text-sm text-red-600">Failed to send. Please try again.</p>
                        )}
                    </div>
                </form>
            </div>
        </motion.section>
    );
});

Contact.displayName = "Contact";
export default Contact;