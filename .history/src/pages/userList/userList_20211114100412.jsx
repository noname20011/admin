import React from "./userList.css"
import {tableColumns, tableRows} from "../../dummyData"
import { DataGrid } from '@mui/x-data-grid';

export default function UserList() {

    return (
        <div className="userList">
            <DataGrid
            rows={tableRows}
            columns={tableColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
      />
        </div>
    )
}
