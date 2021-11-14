import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, ErrorOutline, LineStyle, MailOutlined, PersonOutline, Storefront, Timeline, TrendingUp,  WorkOutlineOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <h3 className="sidebarTitle">Dashboard</h3>
                <div className="sidebarMenu">
                    <h4 className="sidebarMenuTitle">Main Menu</h4>
                    <ul className="sidebarLists">
                        <Link to="/">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon"/>
                                Home
                            </li>
                        </Link>
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
                <div className="sidebarMenu">
                    <h4 className="sidebarMenuTitle">Quick Menu</h4>
                    <ul className="sidebarLists">
                        <Link to="/users">
                            <li className="sidebarListItem">
                                <PersonOutline className="sidebarIcon"/>
                                User
                            </li>
                        </Link>
                        <Link to="/products">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon"/>
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Transaction
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h4 className="sidebarMenuTitle">Notifications</h4>
                    <ul className="sidebarLists">
                        <li className="sidebarListItem">
                            <MailOutlined className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon"/>
                            Message
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h4 className="sidebarMenuTitle">Staff</h4>
                    <ul className="sidebarLists">
                        <li className="sidebarListItem">
                            <WorkOutlineOutlined className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ErrorOutline className="sidebarIcon"/>
                            Report
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
