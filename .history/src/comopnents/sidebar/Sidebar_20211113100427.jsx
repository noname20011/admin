import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons'
import React from 'react'
import "./sidebar.css"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <h3 className="sidebarTitle">Dashboard</h3>
                <div className="sideMenu">
                    <h4 className="sidebarMenuTitle">Quick Menu</h4>
                    <ul className="sidebarLists">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sideMenu">
                    <h4 className="sidebarMenuTitle">Quick Menu</h4>
                    <ul className="sidebarLists">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sideMenu">
                    <h4 className="sidebarMenuTitle">Quick Menu</h4>
                    <ul className="sidebarLists">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
