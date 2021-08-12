import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { productRows } from '../../dummyData'
import './products.css'


export default function Products() {
    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    
    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => (
          <div className="productList">
              <img src={params.row.img} alt="" className="productListImg" />
              {params.row.name}
          </div>
      ) },
      { field: 'stock', headerName: 'Stock', width: 200 },
      { field: 'status', headerName: 'Status', width: 120},
      { field: 'price', headerName: 'Price', width: 160},
      { field: 'action', headerName: 'Action', width: 160, renderCell: (params) => (
          <>
            <Link to={`/products/${params.row.id}`}>
                <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline className="productListDelete" 
                onClick={() => handleDelete(params.row.id)} 
            />
          </>
      )},
    ];
    
    
    return (
        <div className="products">
            <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection disableSelectionOnClick />
        </div>
    )
}
