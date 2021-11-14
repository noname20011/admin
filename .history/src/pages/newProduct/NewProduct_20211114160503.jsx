import { DataGrid } from "@material-ui/data-grid"
import "./newProduct.css"

export default function NewProduct() {
    
    return (
        <div className="productList">
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
