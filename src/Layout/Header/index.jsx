import React, { Fragment, useState, useEffect, useLayoutEffect } from 'react';
import { MoreHorizontal } from 'react-feather';
import Leftbar from './LeftBar';
import Rightbar from './RightBar';
import Searchbar from './Search';
import { Row } from 'reactstrap';
import { useContext } from 'react';
import CustomizerContext from '../../_helper/Customizer';
// import SecondNav from './SecondNav';

import { Link } from 'react-router-dom';
import NexusLogo from "../../assets/images/dashboard/nexus.png";
import NexusL from "../../assets/images/dashboard/round.png";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [sidebartoogle, setSidebartoogle] = useState(true);
    const { toggleIcon, toggleSidebarResponsive, setToggleIcon } = useContext(CustomizerContext);
    const [toggle, setToggle] = useState(true);



    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
                if (window.innerWidth <= 991) {
                    setToggleIcon(true);
                } else {
                    setToggleIcon(false);
                }
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }
    // eslint-disable-next-line
    const [width] = useWindowSize();

    useEffect(() => {
        if (window.innerWidth <= 991) {
            setToggleIcon(true);
        } else {
            setToggleIcon(false);
        }
    }, []);

    const toggleResp = (value) => {
        setToggle(value);
        toggleSidebarResponsive(toggle);
    };
    return (
        <Fragment>
            <div className={`page-main-header ${toggleIcon ? 'close_icon' : ''}`}>
                <Row className="main-header-right m-0">
                    {/* <Leftbar sidebartoogle={sidebartoogle} setSidebartoogle={setSidebartoogle} /> */}
                    <Leftbar />
                    <Searchbar />
                    <Rightbar />
                    <div className="d-lg-none mobile-toggle pull-right w-auto" onClick={() => toggleResp(!toggle)}>
                        <MoreHorizontal />
                    </div>
                    {/* <SecondNav /> */}
                </Row>



            </div>
            <div className={isNavExpanded ? "second-nav expanded" : "second-nav"}>

                <ul>
                    <li className="left-option">
                        <Link to="#">Master</Link>
                    </li>
                    <li className="left-option">
                        <Link to="#">Time Office</Link>
                    </li>
                    <li className="left-option">
                        <Link to="#">Payroll</Link>
                    </li>
                    <li className="left-option">
                        <Link to="#">Reports</Link>
                    </li>
                    <li className="left-option">
                        <Link to="#">Performance Management</Link>
                    </li>
                    <li className="left-option">
                        <Link to="#">Help</Link>
                    </li>
                    <li>
                        <button>Apply Leave</button>
                    </li>
                    <div className="right-option">
                        <li>
                            <AddCircleOutlineIcon className="right-icon" />
                        </li>

                        <li>
                            <NotificationsIcon className="right-icon" />
                        </li>
                        <li>
                            <img src={NexusL} alt="" className="right-icon" />
                        </li>
                    </div>

                </ul>

                <MenuIcon className="hide-icon" onClick={() => { setIsNavExpanded(!isNavExpanded); }} />
                <img src={NexusLogo} alt="" className="nexus-l" />
            </div>



        </Fragment >
    );
};

export default Header;