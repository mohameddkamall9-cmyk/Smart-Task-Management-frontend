import { Result } from 'postcss';
import logo from '../assets/logo.png';
import {useState} from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isopen , setopen] = useState(false);


    const Menuchanger  = () => {
    if (isopen == true ){
    setopen(false)
    } else {
        setopen(true)
    }


    return isopen;
    
    };

    return(
        <div className="navbar flex flex-row p-4 justify-between items-center bg-emerald-400  shadow-md relative"> 
        <div className="navbar-logo  mr-10">
            <img className="w-16 h-16" src={logo} alt="Logo" />
        </div>
        <div className="navbar-links hidden sm:flex  ">
            <ul className="flex flex-row gap-4  text-lg font-semibold text-slate-100 ">
                <li className="hover:text-green-300 transition duration-300"><a href="">Home</a></li>
                <li className="hover:text-green-300 transition duration-300"><a href="">About</a></li>
                <li className="hover:text-green-300 transition duration-300"><a href="">Contact</a></li>
            </ul>
        </div>
        <div className="navbar-menu-button flex flex-row gap-4 ">
            {isopen ? (
            <FiX className="navbar-menu-icon w-12 h-12 cursor-pointer sm:hidden" onClick={Menuchanger} ><div className='nav-window bg-emerald-700 w-3/6 h-screen flex flex-col'></div></FiX>
        ) : (
            <FiMenu className="navbar-menu-icon w-12 h-12 cursor-pointer sm:hidden" onClick={Menuchanger} />
        )}
                <button className="navbar-button bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"><a></a>Sign Up/login</button>
        </div>
        {isopen ? (<div className="nav-window bg-emerald-500 absolute top-full left-0 w-full rounded-b-2xl shadow-md sm:hidden">
            <div className="navbar-links  ">
            <ul className="flex  flex-col gap-4  text-lg font-semibold text-slate-100 ">
                <li className="hover:text-green-300 transition duration-300"><a href="">Home</a></li>
                <li className="hover:text-green-300 transition duration-300"><a href="">About</a></li>
                <li className="hover:text-green-300 transition duration-300"><a href="">Contact</a></li>
            </ul>
        </div>
        </div>) : (<div className="nav-window hidden "></div>)}
        
    </div>
    

    );
}

export default Navbar;