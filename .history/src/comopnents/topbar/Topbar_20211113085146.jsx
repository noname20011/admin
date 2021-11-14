import React from 'react'
import './topbar.css'

import { NotificationsNone } from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">Young H</div>
                </div>
                <div className="topRight">
                    <NotificationsNone/>
                </div>
            </div>
        </div>
    )
}
