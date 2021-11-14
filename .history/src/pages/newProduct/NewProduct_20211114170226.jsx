import "./newProduct.css"

export default function NewProduct() {
    
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New Product</h1>
            <div className="newProductContainer">
                <form action="" className="newUserForm">
                    <div className="newProductItem">
                        <label>Username</label>
                        <input type="text" className="newProductInput" placeholder="Username"/>
                    </div>
                    <div className="newProductItem">
                        <label>Email</label>
                        <input type="email" className="newProductInput" placeholder="email"/>
                    </div>
                    <div className="newProductItem">
                        <label>Phone</label>
                        <input type="text" className="newProductInput" placeholder="Phone"/>
                    </div>
                    <div className="newProductItem">
                        <label>Full Name</label>
                        <input type="text" className="newProductInput" placeholder="Fullname"/>
                    </div>
                    <div className="newProductItem">
                        <label>Password</label>
                        <input type="text" className="newProductInput" placeholder="Password"/>
                    </div>
                    <div className="newProductItem">
                        <label>Address</label>
                        <input type="text" className="newProductInput" placeholder="Address"/>
                    </div>
                    <div className="newProductItem">
                        <label>Gender</label>
                        <div className="newProductGender">
                            <input type="radio" name="gender" id="male" value="male"/>
                            <label>Male</label>
                            <input type="radio" name="gender" id="female" value="female"/>
                            <label>Female</label>
                            <input type="radio" name="gender" id="other" value="other"/>
                            <label>Other</label>
                        </div>
                    </div>
                    <div className="newProductItem">
                        <label>Active</label>
                        <div className="newProductActive">
                            <input type="radio" name="active" id="activeTrue" value="activeTrue"/>
                            <label>Yes</label>
                            <input type="radio" name="active" id="activeFalse" value="activeFalse"/>
                            <label>No</label>
                        </div>
                    </div>
                    <button className="newProductButton">Create</button>
                </form>
            </div>
        </div>
    )
}
