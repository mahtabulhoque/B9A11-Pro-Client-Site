import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/Logo.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);
  const [theme, setTheme] = useState(() => {

    return localStorage.getItem('theme') || 'light';
  });

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };



  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'night' : 'light'));
  };



    const links = (
        <div className="lg:flex font-semibold rounded-xl text-[20px]">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ee">All Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/ee">Add A Job</NavLink>
          </li>
          <li>
            <NavLink to="/t">My Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/t">Blogs</NavLink>
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

        <div className='flex items-center gap-3'>
           <div className='w-16 lg:w-20'>
           <img src={logo} alt="" />
           </div>
            <a className="text-lg lg:text-4xl font-extrabold text-cyan-600">JobQuestHub</a>
        </div>


      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[18px] font-semibold">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-4">
        
       <div>
       <input
          onChange={handleToggle}
          type="checkbox"
          value="synthwave"
          className="toggle ml-7 mt-4 lg:mt-2  theme-controller"
          checked={theme === 'night'}
        />
       </div>



      



      {user ? (
          <>
            <span className="hidden lg:inline-block">{user.email}</span>
            {user.photoUrl ? (
              <img
                src={user.photoUrl}
                alt="User"
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <span className="hidden lg:inline-block">No photo</span> 
            )}
            <button onClick={ handleLogOut } className="btn">
              Log Out
            </button>
          </>
        ) : (
          <Link to={"/logIn"}>
            <button className="btn font-bold text-lg bg-green-500 ">Login</button>
          </Link>
        )}




    </div>
  </div>
  );
};

export default Navbar;
