import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section */}
            <section className="text-center py-28 px-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Proxidesk: <span className="text-blue-400">Seamless</span> Remote Desktop Access
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
                        Access your computers from anywhere, anytime with military-grade security.
                    </p>
                    <Link to="/signin">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                            Get Started - It's Free
                        </button>
                    </Link>
                    <div className="mt-12 flex justify-center">
                        <div className="relative w-full max-w-3xl h-64 bg-slate-700 rounded-xl shadow-2xl overflow-hidden border border-slate-600">
                            {/* Placeholder for a screenshot or demo video */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-6">
                                    <div className="text-4xl mb-4">🖥️</div>
                                    <p className="text-blue-200">Experience seamless remote desktop</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Powerful <span className="text-blue-600">Features</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Secure Connection",
                            description: "End-to-end encryption with AES-256 for secure remote access.",
                            icon: "🔒"
                        },
                        {
                            title: "Cross-Platform",
                            description: "Access from Windows, macOS, Linux, iOS, and Android.",
                            icon: "🔄"
                        },
                        {
                            title: "File Transfer",
                            description: "Drag-and-drop file transfer between local and remote machines.",
                            icon: "📁"
                        },
                        {
                            title: "Session Recording",
                            description: "Record sessions with timestamped logs for compliance.",
                            icon: "🎥"
                        }
                    ].map((feature, index) => (
                        <div 
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-blue-200"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to transform your remote access experience?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                        Join thousands of professionals using Proxidesk daily.
                    </p>
                    <Link to="/signin">
                        <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                            Start For Free
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}