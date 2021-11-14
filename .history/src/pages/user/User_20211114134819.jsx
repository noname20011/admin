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
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle"></span>
                </div>
            </div>
        </div>
    )
}
