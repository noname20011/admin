import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <div className="newUserContainer">
                <form action="" className="newUserForm">
                    <div className="newUserItem">
                        <label>Username</label>
                        <input type="text" className="newUserInput" placeholder="username"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
