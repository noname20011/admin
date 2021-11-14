import { Link } from "react-router-dom"
import Chart from "../../comopnents/chart/Chart"
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
                    <Chart title="Sales Performance"/>
                </div>
                <div className="productTopRight"></div>
            </div>
        </div>
    )
}
