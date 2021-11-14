import "./user.css"

export default function User() {
    return (
        <div className="user">
            <div className="userContainer">
                <h1 className="useTitle">Edit User</h1>
                <button className="userAddBtn">
                    Create
                </button>
            </div>
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle"></span>
                </div>
            </div>
        </div>
    )
}
