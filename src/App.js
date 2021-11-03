import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from "material-table";
import axios from 'axios';
import {Modal, TextField, Button, AppBar,Container, Toolbar,Typography,Box} from '@material-ui/core';




const columns= [
  { title: 'ID_TRX', field: 'idTrx',defaultSort: 'desc' },
  { title: 'TELEFONO', field: 'telefono' },
  { title: 'FACTURA', field: 'factura' },
  { title: 'MONTO', field: 'monto', type: 'numeric'},
  { title: 'ESTADO', field: 'estado', type: 'numeric'},
  { title: 'RESULTADO', field: 'resultado'},
  { title: 'TIPO_BENEFICIO', field: 'tipoBeneficio'},
  { title: 'BENEFICIO', field: 'beneficio'},
  { title: 'FECHA', field: 'fechaCreacion'}
];
const baseUrl="http://10.231.128.126:8080/xmas2021/api/entregaBeneficios";



function App() {
  
  const [data, setData]= useState([]);

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
     setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }
  
  useEffect(()=>{
    peticionGet();
  }, [])

  return (
    <div className="App">
       <AppBar position="relative">
        <Toolbar>
          
          <Typography variant="h6" color="inherit" noWrap>
            Beneficios Navidad 2021
          </Typography>
        </Toolbar>
      </AppBar>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
         <Container maxWidth="lg">
     <MaterialTable
     title='Registros Beneficios'
          columns={columns}
          data={data}
          options={{
            sorting:true,
            pageSize:10,
            emptyRowsWhenPaging: false,   // To avoid of having empty rows
            pageSizeOptions:[5,10,25]
          }}
        />
        </Container>
        </Box>
        </div>

  );
}

export default App;
