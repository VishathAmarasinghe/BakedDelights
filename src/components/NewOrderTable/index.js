import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';


const NewOrderTable = (props) => {
  return (
    <div style={{ height: 600, width: '100%' }}>
        <DataGrid
            getRowId={(row) => row.id}
            rows={props.rows}
            columns={props.columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
    </div>
  )
}

export default NewOrderTable