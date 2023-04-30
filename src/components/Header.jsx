import "./styles/header.css";

export default function Header({ display }) {
    if (display) {
        return (
            <header className="w-screen h-[40px] pl-4  flex items-center justify-evenly pt-4">
                <div
                    onClick={() => {
                        window.location.href = "/";
                    }}
                    className="hero text-2xl cursor-pointer"
                >
                    Midway
                </div>
                <div className="flex gap-10 middle-div">
                    <div className="hover:scale-105 transition-all cursor-pointer">
                        API
                    </div>
                    <div className="hover:scale-105 transition-all cursor-pointer">
                        Integration
                    </div>
                    <div
                        onClick={() => (window.location.href = "/compiler")}
                        className="hover:scale-105 transition-all cursor-pointer"
                    >
                        Compiler
                    </div>
                    <div className="hover:scale-105 transition-all cursor-pointer">
                        Retail
                    </div>
                </div>
                <div className="flex gap-10 button-section text-lg ">
                    <button
                        onClick={() => (window.location.href = "/get-started")}
                        className="p-2 border-black border-2 rounded-[10px] hover:bg-[#FF6D60] hover:border-none hover:text-white transition-all"
                    >
                        Get Started
                    </button>
                    <button className="hover:scale-105 transition-all">
                        Login
                    </button>
                </div>
            </header>
        );
    } else {
        return (
            <header className="w-screen h-[40px] pl-4  flex items-center justify-evenly pt-4">
                <div
                    onClick={() => {
                        window.location.href = "/";
                    }}
                    className="hero text-2xl cursor-pointer"
                >
                    Midway
                </div>
                <div className="flex gap-10 middle-div">
                    <div className="hover:scale-105 transition-all cursor-pointer">
                        API
                    </div>
                    <div className="hover:scale-105 transition-all cursor-pointer">
                        Integration
                    </div>
                    <div
                        onClick={() => {
                            window.location.href = "/compiler";
                        }}
                        className="hover:scale-105 transition-all cursor-pointer"
                    >
                        Compiler
                    </div>
                    <div className="hover:scale-105 transition-all cursor-pointer">
                        Retail
                    </div>
                </div>
                <div className="hidden">
                    <button
                        onClick={() => (window.location.href = "/get-started")}
                        className="p-2 border-black border-2 rounded-[10px] hover:bg-[#FF6D60] hover:border-none hover:text-white transition-all"
                    >
                        Get Started
                    </button>
                    <button className="hover:scale-105 transition-all">
                        Login
                    </button>
                </div>
            </header>
        );
    }
}
