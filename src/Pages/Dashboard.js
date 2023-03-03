import React from 'react'
import BarChart from '../components/BarChart'
import ColumnChart from '../components/ColumnChart'
import PieChart from '../components/PieChart'
// import DashboardCard from '../components/DashboardCard'
import DashboardCard from '../components/DashboardCard'
import NewOrderTable from '../components/NewOrderTable'
import { Button } from '@mui/material'
import CustomerTable from '../components/CustomerTable'
import Dropdown from '../components/Dropdown'


const OrderColumns = [
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
                }}>See more...</Button>
            </div>
} },
];

const OrderRows = [
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



const CustomerColumn = [
  { 
    field: 'Order_Id', 
    headerName: 'Order ID', 
    width: 70 
},
  { 
    field: 'Customer_Id', 
    headerName: 'Customer ID', 
    width: 100 
  },
  { 
    field: 'Description', 
    headerName: 'Order Description', 
    width: 930
  },
  {
    field: 'Total',
    headerName: 'Total Amount',
    type: 'number',
    width: 100,
  },
  {
    field: 'Status',
    headerName: 'Order Status',
    type: 'number',
    width: 100,
  },
  { field: `Buy`, headerName: 'Action', width: 150, renderCell: (cellValues) => {
    return <div className=''>
              <Dropdown />
            </div>
} },
];


const CustomerRow = [
  { Order_Id: 1, Customer_Id: 2 , Description: 'Please confirm the details of your order and provide us with any additional information or requests you may have. We want to ensure that your wedding cake exceeds your expectations and adds to the joy of your celebration. We look forward to serving you and your guests!',  Total: 3500 , Status: 'Ordered' },
  { Order_Id: 2, Customer_Id: 1 , Description: 'Please confirm the details of your order and provide us with any additional information or requests you may have. We want to ensure that your wedding cake exceeds your expectations and adds to the joy of your celebration. We look forward to serving you and your guests!',  Total: 3500 , Status: 'Ordered' },
  { Order_Id: 3, Customer_Id: 10 , Description: 'Please confirm the details of your order and provide us with any additional information or requests you may have. We want to ensure that your wedding cake exceeds your expectations and adds to the joy of your celebration. We look forward to serving you and your guests!',  Total: 3500 , Status: 'Ordered' },
  { Order_Id: 4, Customer_Id: 20, Description: 'Please confirm the details of your order and provide us with any additional information or requests you may have. We want to ensure that your wedding cake exceeds your expectations and adds to the joy of your celebration. We look forward to serving you and your guests!',  Total: 3500 , Status: 'Ordered' },
  { Order_Id: 5, Customer_Id: 2 , Description: 'Please confirm the details of your order and provide us with any additional information or requests you may have. We want to ensure that your wedding cake exceeds your expectations and adds to the joy of your celebration. We look forward to serving you and your guests!',  Total: 3500 , Status: 'Ordered' },
  { Order_Id: 6, Customer_Id: 21 , Description: 'Please confirm the details of your order and provide us with any additional information or requests you may have. We want to ensure that your wedding cake exceeds your expectations and adds to the joy of your celebration. We look forward to serving you and your guests!',  Total: 3500 , Status: 'Ordered' },
];




const Dashboard = () => {
  return (
    <div>
        <div className=' flex justify-evenly'>
          <DashboardCard bg={ 'bg-green-600' } icon='mdi:user' value={655565} title={'Total Sales (LKR)'}/>
          <DashboardCard bg={ 'bg-pink-600' } value={151} title={'Total Customers'}/>
          <DashboardCard bg={ 'bg-blue-600' } value={65} title={'Total Deliveries'}/>
        </div>
       
        <div className='xl:grid xl:grid-cols-3 xl:gap-2 lg:grid lg:grid-cols-3 lg:gap-2 sm:grid sm:grid-cols-1 sm:gap-0 m-2 rounded-lg bg-dark-blue p-2'>
                  <BarChart />
                  <PieChart title='Customer Persentage in Gender Wise ' /> 
                  <ColumnChart title='Monthly Sales' />
        </div>
        <div>
          <NewOrderTable columns={OrderColumns} rows={OrderRows} />
        </div>
        <div>
          <CustomerTable columns={CustomerColumn} rows={CustomerRow} />
          {/* <NewOrderTable columns={CustomerColumn} rows={CustomerRow} /> */}
        </div>
    </div>
  )
}

export default Dashboard