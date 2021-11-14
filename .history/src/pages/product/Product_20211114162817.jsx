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
                    </div>
                </div>
            </div>
        </div>
    )
}
