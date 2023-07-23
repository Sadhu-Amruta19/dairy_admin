import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../compnents/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";
import Add from "../../compnents/add/Add";
import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field:"img",
    headerName:"Avatar",
    width:100,
    renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  
  // {
  //   field:"actions",
  //   headerName:"Actions",
  //   width:100,
  //   renderCell: (params) => {
  //       return <div className="action">
  //           <div className="view">View</div>
  //           <div className="delete">Delete</div>
  //       </div>;
  //   },
  // },
  // {
  //   field:"status",
  //   headerName:"Status",
  //   width:100,
  //   type:"boolean",

  // },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    type:"string",
    // editable: true,
  },
  {
    field: 'lastName',
    type:"string",
    headerName: 'Last name',
    width: 150,
    // editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 200,
    //editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    // width: 160,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    type:'string',
    width:200,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'string',
    width: 200,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    type: 'boolean',
    width: 150,
    //editable: true,
  },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status:"true"},
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status:"false"},
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const Users = () => {
  const [open,setOpen] = useState(false);

  // TEST THE API

  // const {isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
      
  //     fetch("http://localhost:8800/api/users").then(  // already data exists in database directly call that using API
  //       (res) => res.json(),
  //     ),
  // });


  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows}/>

      {/* TEST THE API */}
       {/* {isLoading ? 
       ("Loading..." ) 
       : 
       (<DataTable slug="users" columns={columns} rows={data}/>
       )} */}
       
       {open && <Add setOpen={setOpen} slug="user" columns={columns}/>}

    </div>
  );
};

export default Users;




