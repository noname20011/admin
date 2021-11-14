import React from 'react'
import './topbar.css'

import { Language, NotificationsNone, SettingsOutlined  } from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">Young H</div>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <div className="topIconsBadge">2</div>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <div className="topIconsBadge">2</div>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsOutlined/>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="admin" className="topAvatar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
