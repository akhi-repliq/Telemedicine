import Link from "next/link"
export default function Help() {
    return (
        <div className="min-h-screen bg-black  text-white flex  justify-center">
    <div className="w-full max-w-lg  p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl text-center font-bold mb-8">
            Help & Support
        </h1>
        <section className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
                Contact Us
            </h2>
            <p className="text-gray-400 mb-3 text-sm">
                For immediate assistance, please reach out:
            </p>
            <ul className="space-y-2 text-sm">
                <li>
                    📞 Phone:{" "}
                    <Link href="tel:+1234567890" >
                        +1234567890
                    </Link>
                </li>
                <li>
                    📧 Email:{" "}
                    <Link href="mailto:support@telemedicine.com" >
                        support@telemedicine.com
                    </Link>
                </li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
                Feedback
            </h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Your Name</label>
                    <input
                        type="text"
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white text-sm"
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Your Feedback</label>
                    <textarea
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white text-sm"
                        rows="3"
                        placeholder="Share your experience..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-violet-500 rounded font-semibold text-sm text-white hover:bg-fuchsia-500 transition"
                >
                    Submit Feedback
                </button>
            </form>
        </section>
    </div>
</div>

    );
}