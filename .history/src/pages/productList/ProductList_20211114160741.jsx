import "./productList.css"
import { productRows } from "../../dummyData";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
export default function ProductList() {
    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 300,
            renderCell: (params) => {
                return (
                    <div className="productListProduct">
                        <img className="productListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                </div>
                );
            },
        },
        { field: "Stock", headerName: "Stock", width: 240 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                <>
                    <Link to={"/product/" + params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline
                    className="userListDelete"
                    onClick={() => handleDelete(params.row.id)}
                    />
                </>
                );
            },
        },
    ];
    return (
        <div>
            <DataGrid
            rows={data}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            checkboxSelection
            />
        </div>
    )
}
