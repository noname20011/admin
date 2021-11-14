import React from 'react'
import './topbar.css'
import {NotificationsNoneIcon} from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">Young H</div>
                </div>
                <div className="topRight">right</div>
            </div>
        </div>
    )
}
