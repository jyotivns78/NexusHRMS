import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import NexusLogo from "../../assets/images/dashboard/nexus.png";
import NexusL from "../../assets/images/dashboard/round.png";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';


const SecondNav = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={ isNavExpanded ?  "second-nav expanded" : "second-nav"}>
        
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
<AddCircleOutlineIcon className="right-icon"/>
</li>

<li>
<NotificationsIcon className="right-icon"/>
</li>
<li>
<img src={ NexusL } alt="" className="right-icon"/>
</li>
</div>

</ul>

<MenuIcon  className="hide-icon" onClick={ () => { setIsNavExpanded(!isNavExpanded); } }/>
<img src={ NexusLogo } alt="" className="nexus-l" />
</div>
  )
}

export default SecondNav