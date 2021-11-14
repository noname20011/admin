import { LineStyle } from '@material-ui/icons'
import React from 'react'
import "./sidebar.css"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarLists">
                    <li className="sidebarListItem">
                        <LineStyle/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        Home
                    </li>
                    <li className="sidebarListItem">
                        Home
                    </li>
                </ul>
            </div>
        </div>
    )
}
