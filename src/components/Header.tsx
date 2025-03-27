import logo from "../assets/onlyLogoUpscaled.png";
import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <nav className="flex justify-between p-3 px-6 bg-linear-to-r from-[#323B4B] to-[#515966]">
                <Link to="/">
                    <div className="flex items-center cursor-pointer">
                        <img src={logo} alt="Logo" width="40px" />
                        <h1 className="text-2xl text-white">proxidesk</h1>
                    </div>
                </Link>
                <div>
                    <Link to="/signin">
                        <button className="rounded-md py-2 px-4 border border-white text-center text-sm text-white transition-all shadow-md hover:border-transparent active:border-transparent focus:border-transparent hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            Sign-in
                        </button>
                    </Link>
                </div>
            </nav>
        </>
    )
}