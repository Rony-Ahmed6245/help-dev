import { NavLink, Outlet } from "react-router-dom";


const MainLayout = () => {


    const menu = <>
        <div className=" md:flex ">
            <li><NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-none border" : ""
            }>Home</NavLink></li>
            <li><NavLink to='/blog' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-none border" : ""
            }>Blog</NavLink></li>
            <li><NavLink to='/dashboard' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-none border-2 border-b-orange-500 " : "bg-none"
            }>Library</NavLink></li>
        </div>

    </>




    return (
        <div className="">
            <div className="drawer fixed z-10  ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar shadow-lg">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Navbar Title</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {menu}
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 min-h-full bgimg ">
                        {/* Sidebar content here */}
                        {
                            menu
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default MainLayout;