import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';


const MyOrders = () => {

    const { url, token } = useContext(StoreContext)
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } })
            setData(Array.isArray(response.data.data) ? response.data.data : []);
        } catch (err) {
            setData([]);
            console.error("Failed to fetch orders:", err);
        }
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.map((order, index) => {
                    // Thêm log để kiểm tra cấu trúc order
                    // console.log(order);

                    // Ưu tiên order.items, fallback sang order.item
                    const items = Array.isArray(order.items) ? order.items : Array.isArray(order.item) ? order.item : [];

                    return (
                        <div key={index} className='my-orders-order'>
                            <img src={assets.parcel_icon} alt="" />
                            <p>{

                                items.length > 0
                                    ? items.map((item, idx) => (
                                        idx === items.length - 1
                                            ? item.name + " x " + item.quantity
                                            : item.name + " x " + item.quantity + ", "
                                    ))
                                    : "No items"
                            }</p>
                            <p>${order.amount}.00</p>
                            <p>Item:{items.length}</p>
                            <p><span>&#x25cf;</span><b>{order.status}</b></p>
                            <button>Track Order</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default MyOrders
