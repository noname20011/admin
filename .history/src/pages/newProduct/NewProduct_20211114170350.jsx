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
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="newProductItem">
                        <label>Image</label>
                        <input type="file" id="file" />
                    </div>
                    <button className="newProductButton">Create</button>
                </form>
            </div>
        </div>
    )
}
