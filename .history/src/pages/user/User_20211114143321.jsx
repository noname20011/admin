import { CalendarToday, LocationSearching, MailOutline, PersonOutline, PhoneIphone } from "@material-ui/icons"
import "./user.css"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="useTitle">Edit User</h1>
                <button className="userAddBtn">
                    Create
                </button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
                        <div className="userShowTopInfo">
                            <span className="userShowName">Anna Becker</span>
                            <span className="userShowJob">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowBottomInfo">
                            <PersonOutline className="userShowIcon"/>
                            <span className="userShowInfo">annabeck99</span>
                        </div>
                        <div className="userShowBottomInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfo">20.05.2001</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowBottomInfo">
                            <PhoneIphone className="userShowIcon"/>
                            <span className="userShowInfo">+84 36 4795 151</span>
                        </div>
                        <div className="userShowBottomInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfo">hieuddeu@gmail.com</span>
                        </div>
                        <div className="userShowBottomInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfo">NewYork | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="UserUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text"
                                placeholder="annabeck99" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full name</label>
                                <input type="text"
                                placeholder="Anna Becker" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email"
                                placeholder="hieuddeu@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text"
                                placeholder="+84 36 4795 151" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text"
                                placeholder="NewYork | USA" className="userUpdateInput" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
