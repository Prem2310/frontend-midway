export default function Register() {
    return (
        <section
            onClick={() => (window.location.href = "/get-data-centers")}
            className="flex flex-col h-screen bg-gray-200 text-black  items-center justify-center hover:scale-105 transition-all cursor-pointer"
        >
            <div className="text-5xl font-inconsolata">Register</div>
            <div className="p-10 font-ibm text-lg text-center">
                Connect to hundreds of data centers in your API of choice and
                structure your data in a way that makes sense to you.
            </div>
        </section>
    );
}
