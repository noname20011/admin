import { Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"
import Chart from "../../comopnents/chart/Chart"
import { productData } from "../../dummyData.js"
import "./product.css"

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/addproduct">
                    <button className="productAddBtn">
                        Create
                    </button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart title="Sales Performance" dataKey="Sales" data={productData}/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg"/>
                        <span className="productName">Apple Airpods 2</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id: </span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales: </span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active: </span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock: </span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <span className="productUpdateTitle">Update </span>
                <form action="" className="productUpdateForm">
                    <div className="productUpdateLeft">
                        <div className="productUpdateItem">
                            <label>Product Name</label>
                            <input type="text"
                            placeholder="Airpods 2" className="productUpdateInput" />
                        </div>
                        <div className="productUpdateItem">
                            <label>Sales</label>
                            <input type="text"
                            placeholder="5123" className="productUpdateInput" />
                        </div>
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <div className="productUpdateItem">
                            <label>Note</label>
                            <input type="text"
                            placeholder="Note" className="productUpdateInput" />
                        </div>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpdateUpload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productFormImg" />
                            <label htmlFor="file">
                                <Publish className="productUpdateIcon"/>
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
