import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Product title',
      width: 150,
    },
    {
      field: 'description',
      headerName: 'Product description',
      width: 150,
    },
    {
        field: 'category',
        headerName: 'Product category',
        width: 150,
    },
    {
      field: 'price',
      headerName: 'Product price',
      type: 'number',
      width: 110,
    },   
  ];
  
const About = () => {
    const [data, setData] = useState([]);
useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
        setData(res.data)
    });
},[]);
console.log(data)

  return (
    <div className='container'>
   <Box sx={{ height: 400, width: 800, marginTop: 10, marginLeft: 20}}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
  )
}

export default About
