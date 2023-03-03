import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const CustomerTable = (props) => {
  return (
    <div style={{ height: 600, width: '100%' }}>
        <DataGrid
            getRowId={(row) => row.Order_Id}
            rows={props.rows}
            columns={props.columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
    </div>
  )
}

export default CustomerTable