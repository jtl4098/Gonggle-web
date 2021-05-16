import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import {IconContext} from 'react-icons';
import "./MainNavbar.css";



const MainNavbar = (props) => {
    const {handleLogout} = props;
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{color: 'fff'}}>

            
            <div className="mainnavbar">
                <Link to="#" className='mainmenu-bars'>
                    <FaIcons.FaBars color="#6777EA" onClick={showSidebar} />
                </Link>
                <h4 className={sidebar ? 'logo-toggle' : 'logo'  }>GONGGLE</h4>
             
            </div>
            <nav className={sidebar ? 'mainnav-menu active' : 'mainnav-menu'}>
                <ul className= 'mainnav-menu-items' onClick={showSidebar}>
                    <li className="mainnavbar-toggle">
                        <Link to="#" className='mainmenu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>

                    </li>
                    {SidebarData.map( (item, index) =>{
                        return (
     
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                      
                        )
                        
                    })}
                    <li className="mainnav-text">
                        <button className="btn-logout" onClick={handleLogout}>Log out</button>
                    </li>
                </ul>
            </nav>

        
            </IconContext.Provider>
            <div className="components">

            </div>
        </>
    )
}

export default MainNavbar
