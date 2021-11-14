import { Link } from "react-router-dom"
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
        </div>
    )
}
