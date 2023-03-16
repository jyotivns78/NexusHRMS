
import React, { Fragment } from 'react';
import { useContext } from 'react';
import { Maximize } from 'react-feather';
import { LI, UL } from '../../../AbstractElements';
import CustomizerContext from '../../../_helper/Customizer';
// import Bookmarks from './Bookmark';
// import LanguageClass from './Language';
// import LogoutClass from './Logout';
// import MessageDrop from './MessageDrop';
import MoonLight from './MoonLight';
// import Notifications from './Notifiations';

// Icons
import RefreshIcon from '@mui/icons-material/Refresh';
import ShareLogo from "../../../assets/images/dashboard/share.png";
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import WidgetsIcon from '@mui/icons-material/Widgets';

const Rightbar = () => {
    const { sidebarResponsive } = useContext(CustomizerContext);
    //full screen function
    function goFull() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    return (
        <Fragment>
            <div className="nav-right col pull-right right-menu p-0">
                <UL attrUL={{ className: `simple-list d-flex flex-row nav-menus ${sidebarResponsive ? 'open' : ''}` }} >
                    <LI><a className="text-dark" href="#javascript" onClick={goFull}>
                        <Maximize className='nav-icon' />
                    </a></LI>
                    {/* <LanguageClass /> */}
                    {/* <Bookmarks /> */}
                    {/* <Notifications /> */}
                    <LI><RefreshIcon className='nav-icon'/></LI>
                    <LI><img src={ ShareLogo } alt="" className='nav-icon'/></LI>
                    <LI><MoonLight className='nav-icon'/></LI>
                    <LI><FilterVintageIcon className='nav-icon'/></LI>
                    <LI><WidgetsIcon className='nav-icon'/></LI>
                    {/* <MessageDrop /> */}
                    {/* <LogoutClass /> */}
                </UL>
            </div>
        </Fragment >
    );
};

export default Rightbar;