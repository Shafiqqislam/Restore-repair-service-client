import React, { useEffect, useState } from 'react';
import Sidebar from '../Home/Dashboard/Sidebar/Sidebar';
import deleteImg from '../../images/Group 33150.png';

const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: '1px solid red'
}
const ManageService = () => {
    const [products,setProducts]=useState([]);
   
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    // const {name,price,weight,_id}=props.product;
    const deleteProduct=id=>{
       fetch(`http://localhost:5000/deleteProduct/${id}`,{
           method:'DELETE',
          
       })
       .then(res=>res.json())
       .then(res => console.log('server side response', res))
    }
    return ( 
        products.map(td => (
            <div>
            <ul className='manage-product'>
                <li><h5>{td.service}</h5></li>
                <li><h5>{td.price}</h5></li>
                <li><h5><button class="detail-button btn btn-primary" onClick={()=>deleteProduct(td._id)}><img style={{height:'30px'}} src={deleteImg} alt=""/></button></h5></li>

            </ul>
</div>
            )))
        }

export default ManageService;