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
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="UserUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Product Name</label>
                            <input type="text"
                            placeholder="Airpods 2" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Sales</label>
                            <input type="text"
                            placeholder="5123" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Note</label>
                            <input type="text"
                            placeholder="NewYork | USA" className="userUpdateInput" />
                        </div>
                    </div>
                    <div className="userFormRight">
                        <div className="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userFormImg" />
                            <label htmlFor="file">
                                <Publish className="userUpdateIcon"/>
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
