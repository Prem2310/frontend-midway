import Typist from "react-typist";
import gsap from "gsap";
import { useEffect } from "react";

export default function Landing() {
    useEffect(() => {
        document.title = "Midway | Home";
        gsap.fromTo(
            ".after",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, delay: 30, ease: "power2.out" }
        );
    }, []);
    return (
        <main className="grid grid-cols-2 h-screen">
            <div>
                <div className="h-screen pl-20">
                    <div className="text-9xl font-ibm font-bold mt-20 ">
                        Midway
                    </div>
                    <div className="font-inconsolata text-5xl mt-8 pl-1">
                        <Typist
                            cursor={{
                                show: true,
                                blink: true,
                                element: "_",
                                hideWhenDone: true,
                                hideWhenDoneDelay: 1000,
                            }}
                        >
                            <span>One Middleware to connect them all</span>
                            <Typist.Backspace count={17} delay={150} />
                            <span> rule them all</span>
                            <Typist.Backspace count={50} delay={380} />
                            <span>Connecting GraphQL to REST</span>
                            <Typist.Backspace count={50} delay={380} />
                            <span>Simplifying SOAP queries for you</span>
                            <Typist.Backspace count={50} delay={380} />
                            <span>
                                Connecting the Dots: Your One-Stop Middleware
                                Solution for API Integration
                            </span>
                        </Typist>
                    </div>
                    <div className="flex mt-10 font-ibm gap-10 items-center after">
                        <button className="bg-[#FF6D60] p-4 font-bold text-white rounded-xl text-lg hover:scale-105 transition-all">
                            Let's Get You Started
                            <span className="fa-solid fa-arrow-right pl-2"></span>
                        </button>
                        <div className="text-sm font-semibold opacity-50">
                            Start connecting APIs for free
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </main>
    );
}
