import "./userList.css"
import {useState} from "react"
import { userRows} from "../../dummyData"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function UserList() {

    const [data, setData] = useState(userRows)
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 300,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 240 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                <>
                    <Link to={"/user/" + params.row.id}>
                        <button className="userListEdit">Edit</button>
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
        <div className="userList">
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
