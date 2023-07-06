import React from 'react';
import './sidebar.scss'
import {Dashboard, Person, Store, ShoppingCart, DeliveryDining, Assessment, Notifications, Book, DesktopWindows, Settings, AccountCircle, Logout} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <span className="logo">abraradmin</span>
                </Link> 
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <li>
                            <Dashboard className='icon'/>
                            <span>Dashboard</span>
                        </li>
                    </Link>    
                    <p className="title">LISTS</p>
                    <Link to='/users' style={{textDecoration: 'none'}}>   
                        <li>
                            <Person className='icon'/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <li>
                        <Store className='icon'/>
                        <span>Products</span>
                    </li>
                    <li>
                        <ShoppingCart className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <DeliveryDining className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <Assessment className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <Notifications className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <DesktopWindows className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <Book className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <Settings className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircle className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <Logout className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
}

export default Sidebar;
