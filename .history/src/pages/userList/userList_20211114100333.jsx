import React from "./userList.css"
import {tableColumns, tableRows} from "../../dummyData"


export default function UserList() {

    return (
        <div className="userList">
            <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}
