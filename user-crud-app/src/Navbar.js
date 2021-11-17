import React,{useState} from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
import './Navbar.css'

const Navbar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <MuiAppBar className="navbar">
                <div className='nav-center'>
                    <div className='nav-header'>
                        <IconButton onClick={openSidebar}>
                            <DehazeIcon />
                        </IconButton>
                    </div>
                    <Typography className='links-container'>
                        <h3>Dashboard World</h3>
                    </Typography>
                </div>
            </MuiAppBar>

            <aside variant="persistent" className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <div className='sidebar-header'>
                    <IconButton className='close-btn' onClick={closeSidebar}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <ul className='links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/create-user'>New User</Link>
                    </li>
                    <li>
                        <Link to='/users'>Users List</Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Navbar
