import logo from "../assets/onlyLogoUpscaled.png";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
            <nav className="max-w-7xl mx-auto flex justify-between items-center p-4 px-6">
                <Link to="/" className="flex items-center space-x-2">
                    <img 
                        src={logo} 
                        alt="Proxidesk Logo" 
                        className="h-10 w-10" 
                    />
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                        proxidesk
                    </h1>
                </Link>
                
                <div className="flex items-center space-x-4">
                    <Link 
                        to="/signin" 
                        className="hidden md:inline-block text-slate-700 hover:text-slate-900 font-medium transition-colors"
                    >
                        Features
                    </Link>
                    <Link 
                        to="/signin" 
                        className="hidden md:inline-block text-slate-700 hover:text-slate-900 font-medium transition-colors"
                    >
                        Pricing
                    </Link>
                    <Link to="/signin">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                            Sign In
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}