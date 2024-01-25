import { Link, NavLink, Outlet } from "react-router-dom";
import { BsListUl } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";


const Dashboard = () => {
    const menu = <>
        <div>
            <div className="md:flex justify-between">
                <li className="font-bold "> <Link to="/" className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? " border-b-2  border-gray-100" : ""
                }>

                    Go Home
                </Link></li>
                <li className="font-bold "><Link to='/dashboard' className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? " border-b-2  border-gray-100" : ""
                }>Get Started</Link></li>
            </div>
            <div className="divider"></div>

            <li className=""><NavLink to='/dashboard/curd' className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? " border-b-2  border-gray-100" : ""
            }>Express server & connection mongoDB </NavLink></li>
            <li className=""><NavLink to='/dashboard/express' className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? " border-b-2  border-gray-100" : ""
            }>Curd Operations</NavLink></li>
            <li className=""><NavLink to='/dashboard/alert' className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? " border-b-2  border-gray-100" : ""
            }>Alert</NavLink></li>

        </div>
    </>
    return (
        <div className="bgimg ">




            <div className="drawer  lg:drawer-open">
                <label htmlFor="my-drawer-2" className="btn bg-slate-800 top-3 rounded-full right-0 fixed  lg:hidden">
                    <BsListUl className="text-white text-xl" />
                </label>
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 md:w-80 min-h-full border-r-2 bg-base-200  border-gray-100">
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

export default Dashboard;