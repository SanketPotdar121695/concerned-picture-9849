import React from 'react'
import { useEffect } from 'react'
import {  useSelector } from 'react-redux'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {
    const [val,setval]=useState(1)
    const [total,setTotal]=useState(0)
    const [cartdata,setcartdata]=useState([])
    const navigate=useNavigate()

    const getcart = () => {
       
        axios.get("https://easy-red-pigeon-tutu.cyclic.app/seeds/cart")
        .then((res) => {
            console.log(res.data)
            setcartdata(res.data)
            carttotal()
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const handlechnage=(val)=>{
        setval(+val)
    }
      const carttotal=()=>{
        let total=0
        for(let i=0;i<=cartdata.length-1;i++){
            if (cartdata[i].price){

                total+= Number(cartdata[i].price * val)
            }else{
                total+=25
            }
        }
        setTotal(total)
      }
  
    const cartremove= (el)=>{
        const {_id}=el
           //console.log(el)
         axios.delete(`https://easy-red-pigeon-tutu.cyclic.app/seeds/cart/${_id}`)
         .then((res)=>{
            console.log(res)
            getcart()
         })
    }

    useEffect(() => {
        getcart()
    }, [val])

  
   const handlepayment=()=>{
    navigate("/checkout")
   }
    

    
   
    return (
        <Div>
            <div className='container'>
                <div className='total'>
                    <h3>Subtotal:₹ {total}</h3>
                    <button onClick={handlepayment} className='btn' style={{cursor:"pointer"}}>CHECKOUT</button>
                </div>
                <div>
                    <p style={{ marginLeft: "0px" }}>Shipping, Tax & Coupons are applied on the next page.</p>
                </div>
                <div style={{ height: "50px", width: "100%", border: "1px solid rgb(249,249,249)", display: "flex", alignItems: "center" }}>
                    <h4>IN CART count ITEM</h4>
                </div>
                <hr />
                <div className='cartcontainer'>
                    {
                        cartdata.map((el, index) => {
                            return (
                                <>
                                <div className='productcontainer'>
                                    <div style={{height:"250px",width:"20%",marginTop:"20px"}}>
                                        {
                                            el.image?  <img width="60%" height="200px" src={el.image} alt="" />:<img width="60%" height="200px" src={el.Poster
                                            } alt="" />
                                        }
                                      
                                    </div>

                                    <div style={{ marginLeft: "10px", textJustify: "auto" ,width:"80%",textAlign:"justify"}}>
                                        {
                                           <h2>{el.title}</h2>
                                        }
                                        
                                        <p> ₹ {el.price || 25}</p>
                                        <p>Estimated dilivery 2 days</p>
                                        <select name="" id=""   onChange={(e)=>handlechnage(e.target.value)}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <button onClick={()=>cartremove(el)} style={{ backgroundColor: "rgb(249,249,249)", borderColor: "white", color: "rgb(191,87,32)", border: "none" ,cursor:"pointer"}}>Remove</button>
                                    </div>
                                    
                                </div>
                               
                               <hr />
                               </>
                            )
                        })
                    }

                </div>


            </div>

        </Div>
    )
}

export default Cart

const Div = styled.div`
height: auto;
width: 100%;
border: 1px solid rgb(249,249,249);
background-color: rgb(249,249,249);
.container{
    height: auto;
    width:90%;
    border:1px solid rgb(249,249,249);
    margin: auto;

    .total{
        display: flex;
        justify-content: space-between;
    }
    .btn{
        height: 40px;
        width: auto;
        margin-top: 20px;
        background-color: rgb(191,87,32);
        color: white;
        border-color:rgb(191,87,32);
        border-radius: 5px;
    }
    .text{
        margin-left: 0px;
    }
    .productcontainer{
        height: 250px;
        width: 100%;
        border:1px solid rgb(249,249,249);
        display: flex;
    }
}

    
`