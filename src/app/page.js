"use client";
import { useEffect, useRef, useState } from "react";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false); // ✅ Add useState for loading
    const messagesEndRef = useRef(null);


    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        setLoading(true); // ✅ Set loading to true before sending the request

        const newMessages = [...messages, { role: "user", content: input }];
        setMessages(newMessages);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            const data = await response.json();
            console.log(data)
            setMessages(data.messages);
        } catch (error) {
            console.error("Error sending message:", error);
        } finally {
            setLoading(false); // ✅ Reset loading state after request completes
        }

        setInput("");
    };

    return (


        <div className="container">
        <div  className="heading-conatiner">
        <div className="demo">
                <div className="iphone">
                    <div className="device">
                        <div className="device__island" />
                        <div className="device__controls">
                            <button type="button" className="device__controls__mute">
                                Mute
                            </button>
                            <button type="button" className="device__controls__power">
                                Power
                            </button>
                            <div className="device__controls__volume">
                                <button type="button" className="device__controls__volume__up">
                                    Volume up
                                </button>
                                <button type="button" className="device__controls__volume__down">
                                    Vlume down
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="screen">

                        <header className="header">
                            <div className="header__left">
                                <span className="provider">Infactory</span>
                            </div>
                            <div className="header__right">
                                <span className="gsm">
                                    <svg fill="currentColor" height={48} width={48}>
                                        <use xlinkHref="#gsm" />
                                    </svg>
                                </span>
                                <span className="wifi">
                                    <svg fill="currentColor" height={24} width={24}>
                                        <use xlinkHref="#wifi" />
                                    </svg>
                                </span>
                                <span className="battery">
                                    <svg fill="currentColor" height={56} width={56}>
                                        <use xlinkHref="#battery" />
                                    </svg>
                                </span>
                            </div>
                        </header>
                        <main >
                            <div className="chat-container-main">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`message-para ${msg.role}`}>
                                        {msg.role === "bot" ? (
                                            <svg className="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="gray" /></svg>
                                        ) : (
                                            <svg className="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="blue" /></svg>
                                        )}
                                        <p>{msg.content}</p>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            <div className="input">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about NYC Taxi Rides..."
                                />
                                <button onClick={sendMessage} disabled={loading}>
                                    {loading ? "Loading..." : "Send"}
                                </button>
                            </div>

                        </main>
                        <footer className="footer">
                            <div className="footer__bottom">
                                <span className="footer__bottom__icon--left">
                                    <svg fill="currentColor" height={69} width={69}>
                                        <use xlinkHref="#flashlight" />
                                    </svg>
                                </span>
                                <span className="footer__bottom__icon--right">
                                    <svg fill="currentColor" height={69} width={69}>
                                        <use xlinkHref="#camera" />
                                    </svg>
                                </span>
                            </div>
                            <button type="button" className="device__home">
                                Home
                            </button>
                        </footer>
                    </div>
                </div>
            </div>
            {/* svg icons and logos */}
            <svg width={0} height={0} style={{ display: "none" }}>
                <symbol id="gsm" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="m32 9c0-1.65685 1.3431-3 3-3h4c1.6569 0 3 1.34315 3 3v30c0 1.6569-1.3431 3-3 3h-4c-1.6569 0-3-1.3431-3-3z" />
                    <path d="m19 21c0-1.6569 1.3431-3 3-3h4c1.6569 0 3 1.3431 3 3v18c0 1.6569-1.3431 3-3 3h-4c-1.6569 0-3-1.3431-3-3z" />
                    <path d="m9 30c-1.65685 0-3 1.3431-3 3v6c0 1.6569 1.34315 3 3 3h4c1.6569 0 3-1.3431 3-3v-6c0-1.6569-1.3431-3-3-3z" />
                </symbol>
                <symbol id="wifi" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g
                        stroke="#fff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    >
                        <path d="m2 8c2.88494-1.89877 6.31702-3 10-3 3.683 0 7.1151 1.10123 10 3" />
                        <path d="m4.99995 11.8774c2.05922-1.272 4.44999-1.99996 7.00005-1.99996 2.55 0 4.9407.72796 7 1.99996" />
                        <path d="m9.07355 15.4549c.93835-.4533 1.94805-.7 2.99995-.7 1.052 0 2.0617.2467 3 .7" />
                        <path d="m11.9181 19.1465-.0161-.0161" />
                    </g>
                </symbol>
                <symbol id="battery" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                    <path d="m9.4633 42h31.3848c3.0305 0 5.5823-.2835 7.3898-2.0911 1.8078-1.8076 2.0556-4.3241 2.0556-7.3544v-9.0912c0-3.0304-.2478-5.5646-2.0556-7.3544-1.8252-1.8076-4.3593-2.1089-7.3898-2.1089h-31.438c-2.9772 0-5.5291.3013-7.3367 2.1089-1.8076 1.8075-2.0734 4.324-2.0734 7.3012v9.1444c0 3.0303.2658 5.5645 2.0734 7.3544 1.8076 1.8076 4.3595 2.0911 7.3899 2.0911zm-.4962-2.8532c-1.8253 0-3.7392-.2481-4.8025-1.3113-1.0811-1.0811-1.3114-2.9596-1.3114-4.7849v-10.0304c0-1.8607.2303-3.7746 1.2936-4.8379 1.0811-1.081 3.0127-1.3291 4.8735-1.3291h32.3239c1.8078 0 3.7394.2658 4.8028 1.3291 1.0808 1.081 1.2935 2.9595 1.2935 4.7848v10.0835c0 1.8253-.2305 3.7038-1.2935 4.7849-1.0634 1.081-2.995 1.3113-4.8028 1.3113zm-.3545-2.4101h33.0862c1.3113 0 2.0379-.1772 2.6048-.7266.5673-.5671.7266-1.3113.7266-2.605v-10.7924c0-1.3114-.1771-2.038-.7266-2.6051-.5669-.5671-1.2935-.7266-2.6048-.7266h-33.0862c-1.3113 0-2.0379.1595-2.605.7266s-.7266 1.2937-.7266 2.6051v10.7924c0 1.2937.1595 2.0379.7266 2.605.5671.5494 1.2937.7266 2.605.7266zm44.109-4.2532c1.3998-.0886 3.2784-1.8784 3.2784-4.5898 0-2.6937-1.8786-4.4836-3.2784-4.5722z" />
                </symbol>


            </svg>
        </div>
         
         <div className="heading-conatiner">
         <h1>Next.js AI Chatbot with Infactory API: Smarter NYC Taxi Insights</h1>
         </div>
           
        </div>

    );
}
