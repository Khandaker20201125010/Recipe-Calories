import icon from '../../assets/images/p1.png'
const Header = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <a class="text-xl">Recipe Calories</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
            </div>
            <div class="flex-none gap-2">
                <div class="form-control">
                    <label class="input input-bordered flex items-center gap-2 input-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                        <input type="text" class="grow" placeholder="Search" />
                    </label>
                </div>
                <div class="dropdown dropdown-end p-4">
                    <div tabindex="0" role="button" class="btn  btn-sm  btn-circle  btn-success bg-green-500">
                        <div class="w-5 rounded-full">
                            <img alt="Tailwind CSS Navbar component" className='bg-green-500' src={icon} />
                        </div>
                    </div>
                    <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;