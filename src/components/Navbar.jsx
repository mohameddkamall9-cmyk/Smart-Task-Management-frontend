import logo from '../assets/logo.png'


const Navbar = () => {

    return(
        <div className="navbar flex flex-row p-4 justify-between bg-emerald-400 rounded-b-2xl shadow-md"> 
        <div className="navbar-logo  mr-15">
            <img className="w-12 h-12" src={logo} alt="Logo" width="240" height="240" />
        </div>
        <div className="navbar-links ">
            <ul className="flex flex-row gap-4  text-lg font-semibold text-slate-100">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </div>

    );
}

export default Navbar;