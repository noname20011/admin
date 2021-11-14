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
                    <div className="newUserItem">
                        <label>Email</label>
                        <input type="email" className="newUserInput" placeholder="email"/>
                    </div>
                    <div className="newUserItem">
                        <label>Phone</label>
                        <input type="text" className="newUserInput" placeholder="Phone"/>
                    </div>
                    <div className="newUserItem">
                        <label>Full Name</label>
                        <input type="text" className="newUserInput" placeholder="fullname"/>
                    </div>
                    <div className="newUserItem">
                        <label>Username</label>
                        <input type="text" className="newUserInput" placeholder="username"/>
                    </div>
                    <div className="newUserItem">
                        <label>Username</label>
                        <input type="text" className="newUserInput" placeholder="username"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
