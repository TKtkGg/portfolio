import { FC, memo } from "react";

const Contact: FC = memo(() => {
    return (
        <section id="contact" className="px-6 py-20">
            <h2 className="mb-8 text-center text-4xl font-bold text-black">
                Contact
            </h2>

            <div className="mx-auto max-w-xl rounded-lg bg-white">
                <form className="space-y-6">
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
                        className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
});

Contact.displayName = "Contact";
export default Contact;