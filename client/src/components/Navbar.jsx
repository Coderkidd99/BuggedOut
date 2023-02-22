import React,{useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import { NavbarData } from './NavbarData'
import "./Navbar.css"
import Dashboard from './Pages/Dashboard'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const ShowSidebar = () => setSidebar(!sidebar);
    
  return (
    <IconContext.Provider value={{color:'orange'}}>
    <>
        <div className='navbar'>
        <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={ShowSidebar} />
                </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu" }>
            <ul className='nav-menu-items'  onClick={ShowSidebar}>
                <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose onClick={ShowSidebar} />
                </Link>
                </li>
                {NavbarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                        <Link to={item.path}>{item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                 
                    )
                })}
            
            </ul>
        </nav>
        

    </>
    
    </IconContext.Provider>
 
)}

export default Navbar;