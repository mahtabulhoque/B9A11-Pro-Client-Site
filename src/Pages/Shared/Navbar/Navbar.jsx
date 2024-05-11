import { NavLink } from 'react-router-dom';
import logo from '../../../../public/Logo.png'

const Navbar = () => {

    const links = (
        <div className="lg:flex font-semibold rounded-xl text-[16px]">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ee">All Art & Craft</NavLink>
          </li>
          <li>
            <NavLink to="/ee">Add Craft Item</NavLink>
          </li>
          <li>
            <NavLink to="/t">My Art & Craft List</NavLink>
          </li>
          <li>
            <NavLink to="/t">Register</NavLink>
          </li>
        </div>
      );
    


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 z-[999] fixed p-2 shadow bg-base-100 rounded-box"
          >
           {links}
          </ul>
        </div>

        <div className='flex items-center'>
           <div className='w-20'>
           <img src={logo} alt="" />
           </div>
            <a className="btn btn-ghost text-4xl">JobQuestHub</a>
        </div>


      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
