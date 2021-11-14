import "./newProduct.css"

export default function NewProduct() {
    
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New Product</h1>
            <div className="newProductContainer">
                <form action="" className="newUserForm">
                    <div className="newProductItem">
                        <label>Product Name</label>
                        <input type="text" className="newProductInput" placeholder="Product Name"/>
                    </div>
                    <div className="newProductItem">
                        <label>Price</label>
                        <div>
                            <input type="text" className="newProductInput" placeholder="Price"/>
                            <span>$</span>
                        </div>
                    </div>
                    <div className="newProductItem">
                        <label>Stock</label>
                        <input type="text" className="newProductInput" placeholder="Stock"/>
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
                        <div className="newProductGender">
                            <input type="radio" name="active" id="active" value="activeTrue"/>
                            <label>Yes</label>
                            <input type="radio" name="active" id="active" value="activeFalse"/>
                            <label>No</label>
                        </div>
                    </div>
                    <div className="newProductItem">
                        <label>Image</label>
                        <input type="file" id="file" className="newProductPostImg"/>
                    </div>
                    <button className="newProductButton">Create</button>
                </form>
            </div>
        </div>
    )
}
