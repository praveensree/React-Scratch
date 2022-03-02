import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import axios from 'axios';


function Table() {
  const url = "http://localhost:10807/api/Hospital"
  const [data, setData] = useState([])
  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    axios.get(url).then(resp => resp.data)
      .then(resp => setData(resp))
  }
  const columns = [
    { title: "Name", field: "Name", validate: rowData => rowData.Name === undefined || rowData.Age === "" ? "Required" : true },
    {
      title: "Age", field: "Age",
      validate: rowData => rowData.Age === undefined || rowData.Age === "" ? "Required" : true
    },
    {
      title: "Contact", field: "Contact",
      validate: rowData => rowData.Age === undefined || rowData.Age === "" ? "Required" : true
    },
    ]
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <MaterialTable
        title="User Details"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) => new Promise((resolve, reject) => {
            //Backend call
            axios.post(url,  newData).then(resp => resp.data)
              .then(resp => {
                getUser()
                resolve()
              })
          }),
          onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
            //Backend call
            axios.put(url+ "/" + oldData.Id,newData).then(resp => resp.data)
              .then(resp => {
                getUser()
                resolve()
              })
          }),
          onRowDelete: (oldData) => new Promise((resolve, reject) => {
            //Backend call
            axios.delete(url+ "/" + oldData.Id).then(resp => resp.data)
              .then(resp => {
                getUser()
                resolve()
              })
          })
        }}
      />
    </div>
  );
}

export default Table;