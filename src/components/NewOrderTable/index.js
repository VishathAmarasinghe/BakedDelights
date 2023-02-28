import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 200 },
    { field: 'lastName', headerName: 'Last name', width: 200 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 120,
    },
    {
      field: 'mobile',
      headerName: 'Mobile Number',
      type: 'number',
      width: 180,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 250,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: `Buy`, headerName: 'Action', width: 300, renderCell: (cellValues) => {
      return <div className=' grid grid-cols-2 gap-1'>
                <Button variant="contained" sx={{ bgcolor: "green" }} onClick={""}>Not Solved</Button> 
                <Button variant="contained" onClick={() => {
                  // dispatch(openModel());
                  // console.log("Cell data ->",cellValues.row);
                  // dispatch(addModelData(cellValues.row));
                  //  console.log("Model data to send Model ->",applicationdata.modalData[0])
                  }}>See more...</Button>
              </div>
  } },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon',  age: 35 , mobile: '0715771284' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 , mobile: '0715771284' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 , mobile: '0715771284' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 , mobile: '0715771284' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null , mobile: '0715771284'},
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 , mobile: '0715771284' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, mobile: '0715771284' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, mobile: '0715771284' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , mobile: '0715771284' },
  ];
const NewOrderTable = () => {
  return (
    <div style={{ height: 600, width: '100%' }}>
        <DataGrid
            getRowId={(row) => row.id}
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
    </div>
  )
}

export default NewOrderTable