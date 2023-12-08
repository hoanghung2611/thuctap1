import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

function ListOrder({data}){

    const [quantity, setquantity] = useState(1);
    const increment = () => {
        setquantity(quantity + 1);
      };

      const decrement = () => {
        // Kiểm tra nếu giá trị là 1 thì không giảm nữa
        if (quantity > 1) {
            setquantity(quantity - 1);
        }
      };

    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}
    return(
        <tr>
        <td><a><img src={data.image} width="52px" height="52px" className='p-8 box-content m-auto' /></a></td>
        <td><a className='hover:text-[#f58634]'>{data.name}</a></td>
        <td>
            <span className='text-[#acacac] line-through mr-3'>{data.sale == 0 ? "" :new Intl.NumberFormat('vi-VN', config).format(data.price)}</span>
            <span >{data.sale == 0 ? new Intl.NumberFormat('vi-VN', config).format(data.price) : new Intl.NumberFormat('vi-VN', config).format((data.price) - ((data.sale)*(data.price))/100)}</span>
        </td>
        <td>
            <button className='border border-solid border-[#ebebeb] h-10 px-2' onClick={decrement}>-</button>
            <input className='border border-solid border-[#ebebeb] h-10 w-28 text-center' readOnly  value={quantity} />
            <button className='border border-solid border-[#ebebeb] h-10 px-2 '  onClick={increment}>+</button>
        </td>
        <td>{data.sale == 0 ? new Intl.NumberFormat('vi-VN', config).format((data.price)*quantity) : new Intl.NumberFormat('vi-VN', config).format(((data.price) - ((data.sale)*(data.price))/100)*quantity)}</td>
        <td>
            <i ><FaTimes className='m-auto hover:text-[#f58634]' /></i>
        </td>
    </tr>
    )
}
export default ListOrder