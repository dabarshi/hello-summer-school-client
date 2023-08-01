import { Link } from "react-router-dom";
import logo from "../../assets/Brand/logo.svg";
import { BsBrightnessHigh, BsMoon, BsList } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
    const [dropDownShow, setDropDownShow] = useState(false);
    const [userDropDownShow, setUserDropDownShow] = useState(false);

    const userImg = 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png';
    const navItems = <>
        <Link>Home</Link>
        <Link>Instructors</Link>
        <Link>Classes</Link>
        <Link>Dashboard</Link>
    </>;
    return (
        <nav className="px-4 py-4 shadow-sm">
            <div className="flex justify-between items-center max-w-5xl mx-auto relative">
                <div className="flex items-center gap-2">
                    <div className="md:hidden">
                        <div onClick={() => setDropDownShow(!dropDownShow)}>
                            <BsList className="border-2 border-black rounded text-2xl" />
                        </div>
                        <div className={dropDownShow ? "block absolute top-full left-0 my-6 py-2 px-2 bg-slate-200 rounded" : "hidden"}>
                            <ul className='flex flex-col'>
                                {navItems}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Link>
                            <img className="w-8 rounded-full" src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div>
                    <ul className="md:flex gap-5 hidden">
                        {navItems}
                    </ul>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <div className="rounded-full bg-slate-300 p-2 cursor-pointer">
                        <BsBrightnessHigh className="hidden rounded-full" />
                        <BsMoon className="rounded-full" />
                    </div>

                    <div>
                        <div onClick={() => setUserDropDownShow(!userDropDownShow)}>
                            <Link>
                                <img className="w-8 rounded-full" src={userImg} alt="" />
                            </Link>
                        </div>
                        <div className={userDropDownShow ? "block absolute top-full right-0 my-4 py-2" : "hidden"}>
                            <Link>Sign Out</Link>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;